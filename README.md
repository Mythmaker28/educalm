# EduCalm - MVP mobile-first

Prototype statique, sans backend, sans compte et sans API IA. Il sert a valider si des personnes veulent vraiment utiliser et payer un outil de reprise de calme avant de construire une application lourde.

Repository public:

```text
https://github.com/Mythmaker28/educalm
```

## Ce qui est inclus

- Mode `Je vais exploser` avec protocole court en moins de 30 secondes.
- Generateur structure PATTE pour chiens, chats, enfants, nutrition, foyer, equides, NAC, oiseaux et autres animaux.
- Garde-fous: danger immediat, morsure, douleur, enfant implique, adulte hors controle, signes veterinaire urgents.
- Bibliotheque de situations.
- Historique local supprimable.
- Test d'intention prix: plan 7 jours a 4,90 EUR, enregistre en local.
- Export/copie du plan et de l'historique.

## Lancer en local

Ouvrir directement:

```text
educalm-mvp/index.html
```

Ou servir le dossier:

```powershell
python -m http.server 4173 -d educalm-mvp
```

Puis ouvrir:

```text
http://localhost:4173
```

## Fichiers utiles

- `index.html`: interface.
- `styles.css`: design mobile-first.
- `app-enhanced.js`: logique produit et base de situations.
- `netlify.toml`: config de deploiement Netlify.
- `vercel.json`: config Vercel.
- `qa-smoke-cdp.mjs`: smoke test navigateur.

## Positionnement

EduCalm ne vend pas "une IA". EduCalm vend une reponse structuree, rapide et prudente quand quelqu'un sent qu'il va perdre le controle face a une situation familiale ou animale.

Promesse simple:

```text
Reprendre le cadre en moins de 30 secondes, sans crier, sans improviser, sans ignorer les vrais signaux d'alerte.
```

## Vente de depart

Prix de depart recommande: 4,90 EUR en paiement unique pour un pack 7 jours.

Packs testables:

- Chien calme: rappel, laisse, aboiements, mordillements, protection ressource.
- Chat maison propre: litiere, griffades, miaulements nocturnes, cohabitation.
- Enfant crise du soir: crise, ecrans, coucher, fratrie, refus de consigne.
- Equides securite: colique, poids, morsure/manipulation, embarquement van, chaleur/eau.
- NAC vigilance: lapin qui ne mange plus, rongement dangereux, cochon d'Inde qui maigrit.
- Oiseaux maison: cris, picage, enrichissement et signes d'alerte.

## A ne pas promettre

- Pas de diagnostic medical, veterinaire ou psychologique.
- Pas de remplacement d'un professionnel.
- Pas de chat libre qui invente des protocoles.
- Pas de conseil coercitif ou punitif.

La valeur doit venir de cas structures, sources, garde-fous et plans actionnables.
