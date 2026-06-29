# Publier EduCalm

Le MVP est statique: `index.html`, `styles.css`, `app.js`. Il peut donc etre mis en ligne sans serveur.

## Option la plus rapide: Netlify Drop

1. Ouvrir Netlify Drop.
2. Glisser-deposer le dossier `educalm-mvp`.
3. Recuperer l'URL publique gratuite.
4. Tester le parcours sur mobile.
5. Partager cette URL dans les posts, groupes et messages.

## Option plus propre: Vercel

1. Mettre le dossier `educalm-mvp` dans un repo GitHub.
2. Importer le repo dans Vercel.
3. Choisir `educalm-mvp` comme racine du projet.
4. Laisser la commande de build vide.
5. Recuperer l'URL publique Vercel.

## Vendre le plan 7 jours

Version simple:

1. Creer un produit Stripe: `Plan 7 jours EduCalm Chien`.
2. Prix: `4,90 EUR`, paiement unique.
3. Creer un Stripe Payment Link.
4. Remplacer le bouton de validation par ce lien public.
5. Apres paiement, envoyer le plan par email ou rediriger vers une page de confirmation.

## Version propre apres validation

- Ajouter un formulaire email backend: Tally, Formspree, Supabase ou Airtable.
- Ajouter Stripe Payment Links avant un vrai checkout custom.
- Garder le mode sans compte tant que le volume est faible.
- Brancher une IA seulement pour reformuler, pas pour inventer le protocole.

## Seuil de validation

Ne construis pas plus lourd tant que tu n'as pas au moins:

- 300 visiteurs cibles;
- 50 generations;
- 15 emails;
- 3 paiements ou intentions fortes.

## Pack vendable recommandé

Ne vends pas "une IA". Vends un pack concret:

- Pack Chien calme: rappel, laisse, aboiements, mordillements, protection ressource.
- Pack Chat maison propre: litière, griffades, miaulements nocturnes, cohabitation.
- Pack Enfant crise du soir: crise, écrans, coucher, fratrie, refus de consigne.
- Pack Poids et ration: score corporel, friandises, transition alimentaire, suivi poids.

Prix de départ: 4,90 EUR par pack 7 jours. Si 3 paiements arrivent, créer une version 9,90 EUR avec email de suivi manuel.
## Extensions vendables ajoutees

- Pack Equides securite: colique, poids, morsure/manipulation, embarquement van, chaleur/eau.
- Pack NAC vigilance: lapin qui ne mange plus, rongement dangereux, cochon d'Inde qui maigrit.
- Pack Oiseaux maison: cris, picage, enrichissement et signes d'alerte.
- Pack Basse-cour: poule abattue, eau/chaleur, ponte anormale.

Ces packs doivent etre vendus comme aide au triage et aux routines, pas comme diagnostic veterinaire.