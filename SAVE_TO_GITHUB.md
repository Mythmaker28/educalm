# Sauvegarder EduCalm sur GitHub

Le projet est deja pousse sur GitHub:

```text
https://github.com/Mythmaker28/educalm
```

Branche:

```text
main
```

## Commandes utiles

Depuis PowerShell:

```powershell
cd "C:\Users\tommy\.paperclip\instances\default\workspaces\febc6414-5a62-44ae-a99e-26cd12fcd83d\educalm-mvp"

$git = "C:\Users\tommy\.cache\codex-runtimes\codex-primary-runtime\dependencies\native\git\cmd\git.exe"

& $git status -sb
& $git add index.html styles.css app-enhanced.js README.md DEPLOY.md SAVE_TO_GITHUB.md netlify.toml vercel.json qa-smoke-cdp.mjs .gitignore
& $git commit -m "Update EduCalm"
& $git push
```

## Ce qu'il ne faut pas publier

Le `.gitignore` exclut:

- captures locales `qa-*.png`;
- ancien script `app.js`;
- script de chantier `tools-expand-animals.mjs`;
- logs et fichiers systeme.

## Archive locale

Pour creer une sauvegarde zip:

```powershell
Compress-Archive -Path "C:\Users\tommy\.paperclip\instances\default\workspaces\febc6414-5a62-44ae-a99e-26cd12fcd83d\educalm-mvp" -DestinationPath "C:\tmp\educalm-mvp.zip" -Force
```

Archive deja creee:

```text
C:\tmp\educalm-mvp.zip
```
