# EduCalm Chien - MVP mobile-first

MVP statique sans backend, sans compte et sans API IA. Il valide l'expérience avant de construire une application lourde.

## Ce qui est inclus

- Mode `Je vais exploser` avec protocole 30 secondes.
- Générateur structuré PATTE pour 8 situations chien.
- Garde-fous prioritaires: morsure, douleur, enfant impliqué, adulte hors contrôle.
- Bibliothèque de situations.
- Historique local supprimable.
- Test d'intention prix: plan 7 jours à 4,90 EUR, enregistré en local.
- Export/copie du plan et de l'historique.

## Lancer

Ouvrir directement:

```text
educalm-mvp/index.html
```

Ou servir le dossier localement:

```powershell
python -m http.server 4173 -d educalm-mvp
```

Puis ouvrir `http://localhost:4173`.

## Stratégie produit implémentée

Segment de départ: chien uniquement, sous marque EduCalm.

Pourquoi: risque légal plus faible que les enfants, problème concret, acquisition possible sans réseau, et cohérence avec le cadre PATTE du brief source.

Le MVP évite d'être un wrapper ChatGPT: la valeur vient de cas pré-écrits, structure fixe, garde-fous, interface d'urgence et plan 7 jours.

## Prochaine étape logique

Si les signaux locaux ou terrain montrent de l'intérêt:

1. Brancher Stripe Payment Links pour tester le vrai paiement à 4,90 EUR.
2. Ajouter collecte email côté backend simple.
3. Ajouter IA uniquement en reformulation contrainte, jamais en chat libre.
4. Ajouter 10 à 15 situations chien avant chats/enfants.
