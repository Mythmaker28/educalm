import { spawn } from "node:child_process";
import { setTimeout as delay } from "node:timers/promises";

const edgePath =
  process.env.EDGE_PATH ?? "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const targetUrl = process.argv[2] ?? "http://localhost:4173/";
const port = Number(process.env.CDP_PORT ?? 9232);
const userDataDir = `C:\\tmp\\educalm-cdp-${Date.now()}`;

const browser = spawn(
  edgePath,
  [
    "--headless=new",
    "--disable-gpu",
    "--no-first-run",
    "--disable-extensions",
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${userDataDir}`,
    "about:blank"
  ],
  { stdio: "ignore" }
);

let ws;
let nextId = 1;
const pending = new Map();

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

async function fetchJson(url, attempts = 40) {
  let lastError;
  for (let index = 0; index < attempts; index += 1) {
    try {
      const response = await fetch(url);
      if (response.ok) return response.json();
    } catch (error) {
      lastError = error;
    }
    await delay(150);
  }
  throw lastError ?? new Error(`No response from ${url}`);
}

function connect(url) {
  return new Promise((resolve, reject) => {
    ws = new WebSocket(url);
    ws.addEventListener("open", resolve, { once: true });
    ws.addEventListener("error", reject, { once: true });
    ws.addEventListener("message", (event) => {
      const data = JSON.parse(event.data);
      if (!data.id || !pending.has(data.id)) return;
      const task = pending.get(data.id);
      pending.delete(data.id);
      if (data.error) task.reject(new Error(data.error.message));
      else task.resolve(data.result);
    });
  });
}

function send(method, params = {}) {
  const id = nextId;
  nextId += 1;
  ws.send(JSON.stringify({ id, method, params }));
  return new Promise((resolve, reject) => {
    pending.set(id, { resolve, reject });
  });
}

async function evaluate(expression) {
  const result = await send("Runtime.evaluate", {
    expression,
    awaitPromise: true,
    returnByValue: true
  });
  if (result.exceptionDetails) {
    throw new Error(result.exceptionDetails.text);
  }
  return result.result.value;
}

async function waitForValue(expression, predicate, message, attempts = 35) {
  let value;
  for (let index = 0; index < attempts; index += 1) {
    value = await evaluate(expression);
    if (predicate(value)) return value;
    await delay(150);
  }
  throw new Error(`${message} Last value: ${String(value)}`);
}

async function run() {
  const pages = await fetchJson(`http://127.0.0.1:${port}/json/list`);
  const page = pages.find((item) => item.type === "page");
  assert(page?.webSocketDebuggerUrl, "No CDP page target found.");

  await connect(page.webSocketDebuggerUrl);
  await send("Page.enable");
  await send("Runtime.enable");
  await send("Page.navigate", { url: targetUrl });

  const title = await waitForValue(
    "document.title",
    (value) => String(value).includes("EduCalm"),
    "Document title is missing EduCalm."
  );
  assert(title.includes("EduCalm"), "Document title is missing EduCalm.");

  const optionCount = await waitForValue(
    "document.querySelectorAll('#scenarioSelect option').length",
    (value) => value >= 50,
    "Scenario options were not populated."
  );
  assert(optionCount >= 35, `Expected at least 50 scenarios, got ${optionCount}.`);

  await evaluate("document.querySelector('#panicButton').click()");
  await delay(100);
  const panicText = await evaluate("document.body.innerText");
  assert(panicText.includes("Mode urgence 30 secondes"), "Panic mode did not render.");
  assert(panicText.includes("Stop. Je fais une pause"), "Panic phrase is missing.");

  await evaluate(`
    document.querySelector('#domainSelect').value = 'chien'; document.querySelector('#domainSelect').dispatchEvent(new Event('change')); document.querySelector('#scenarioSelect').value = 'dog-growls';
    document.querySelector("input[value='child-pet']").checked = true;
    document.querySelector('#calmForm').requestSubmit();
  `);
  await delay(100);
  const safetyText = await evaluate("document.body.innerText");
  assert(safetyText.includes("Priorité sécurité"), "Safety guard did not render.");
  assert(safetyText.includes("ne remplace pas"), "Safety disclaimer is missing.");

  await evaluate(`
    document.querySelector('#emailInput').value = 'test@example.com';
    document.querySelector('#intentButton').click();
  `);
  await delay(100);
  const intentCount = await evaluate(
    "JSON.parse(localStorage.getItem('educalm.intents') || '[]').length"
  );
  assert(intentCount >= 1, "Pricing intent was not stored locally.");

  await evaluate(`
    document.querySelectorAll("input[name='risk']").forEach((item) => { item.checked = false; });
    document.querySelector('#domainSelect').value = 'enfant';
    document.querySelector('#domainSelect').dispatchEvent(new Event('change'));
    document.querySelector('#scenarioSelect').value = 'child-tantrum';
    document.querySelector('#calmForm').requestSubmit();
  `);
  await delay(100);
  const childText = await evaluate("document.body.innerText");
  assert(childText.includes("Je vois que c'est très dur") || childText.includes("La réponse reste non"), "Child CADRE content did not render.");

  await evaluate(`
    document.querySelectorAll("input[name='risk']").forEach((item) => { item.checked = false; });
    document.querySelector('#domainSelect').value = 'nutrition';
    document.querySelector('#domainSelect').dispatchEvent(new Event('change'));
    document.querySelector('#scenarioSelect').value = 'dog-overweight';
    document.querySelector('#calmForm').requestSubmit();
  `);
  await delay(100);
  const nutritionText = await evaluate("document.body.innerText");
  assert(nutritionText.includes("score corporel") || nutritionText.includes("On mesure d'abord"), "Nutrition content did not render.");

  await evaluate(`
    document.querySelectorAll("input[name='risk']").forEach((item) => { item.checked = false; });
    document.querySelector('#domainSelect').value = 'equides';
    document.querySelector('#domainSelect').dispatchEvent(new Event('change'));
    document.querySelector('#scenarioSelect').value = 'horse-colic-alert';
    document.querySelector('#calmForm').requestSubmit();
  `);
  await delay(100);
  const horseText = await evaluate("document.body.innerText");
  assert(horseText.includes("colique") && horseText.includes("veterinaire"), "Equine triage content did not render.");

  await evaluate(`
    document.querySelectorAll("input[name='risk']").forEach((item) => { item.checked = false; });
    document.querySelector('#domainSelect').value = 'nac';
    document.querySelector('#domainSelect').dispatchEvent(new Event('change'));
    document.querySelector('#scenarioSelect').value = 'rabbit-not-eating';
    document.querySelector('#calmForm').requestSubmit();
  `);
  await delay(100);
  const nacText = await evaluate("document.body.innerText");
  assert(nacText.includes("lapin") && nacText.includes("NAC"), "NAC triage content did not render.");

  console.log("EduCalm smoke test passed.");
}

try {
  await run();
} finally {
  ws?.close();
  browser.kill();
}
