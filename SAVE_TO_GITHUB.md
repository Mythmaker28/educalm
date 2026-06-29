# Sauvegarder EduCalm sur GitHub

Le workspace actuel n'est pas encore un depot Git. `git` et `gh` ne sont pas dans le PATH PowerShell, mais Codex fournit un Git utilisable ici:

```powershell
$git = "C:\Users\tommy\.cache\codex-runtimes\codex-primary-runtime\dependencies\native\git\cmd\git.exe"
```

## 1. Creer un depot GitHub vide

Dans GitHub:

1. New repository
2. Nom: `educalm`
3. Public ou Private
4. Ne coche pas README, .gitignore, licence
5. Cree le depot
6. Copie l'URL HTTPS, par exemple:

```text
https://github.com/TON_COMPTE/educalm.git
```

## 2. Initialiser et pousser depuis PowerShell

Remplace `TON_COMPTE` par ton identifiant GitHub.

```powershell
cd "C:\Users\tommy\.paperclip\instances\default\workspaces\febc6414-5a62-44ae-a99e-26cd12fcd83d\educalm-mvp"

$git = "C:\Users\tommy\.cache\codex-runtimes\codex-primary-runtime\dependencies\native\git\cmd\git.exe"

& $git init
& $git config user.name "Tommy Lepesteur"
& $git config user.email "tommy@example.com"
& $git add index.html styles.css app-enhanced.js DEPLOY.md README.md netlify.toml vercel.json qa-smoke-cdp.mjs SAVE_TO_GITHUB.md
& $git commit -m "Initial EduCalm prototype"
& $git branch -M main
& $git remote add origin "https://github.com/TON_COMPTE/educalm.git"
& $git push -u origin main
```

Si GitHub demande un mot de passe, il faut utiliser un token GitHub, pas ton mot de passe normal.

## 3. Alternative immediate sans GitHub

Creer une archive locale:

```powershell
Compress-Archive -Path "C:\Users\tommy\.paperclip\instances\default\workspaces\febc6414-5a62-44ae-a99e-26cd12fcd83d\educalm-mvp" -DestinationPath "C:\tmp\educalm-mvp.zip" -Force
```

Le fichier sera ici:

```text
C:\tmp\educalm-mvp.zip
```

## 4. Publier sans Git

Pour tester vite:

1. Va sur Netlify Drop.
2. Glisse le dossier `educalm-mvp`.
3. Recupere l'URL publique.
4. Ajoute Stripe Payment Link dans le bouton de paiement quand tu veux tester un vrai achat.
