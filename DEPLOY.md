# Publier EduCalm

Le MVP est statique: `index.html`, `styles.css`, `app-enhanced.js`. Il peut etre mis en ligne sans serveur.

Le code est deja pousse ici:

```text
https://github.com/Mythmaker28/educalm
```

## Option recommandee: Netlify depuis GitHub

1. Ouvre Netlify dans ton navigateur.
2. Choisis `Add new site`.
3. Choisis `Import an existing project`.
4. Connecte GitHub si Netlify le demande.
5. Choisis le repo `Mythmaker28/educalm`.
6. Laisse la commande de build vide.
7. Laisse le dossier de publication sur `.`.
8. Netlify detectera `netlify.toml`.
9. Lance `Deploy`.
10. Teste l'URL publique sur mobile.

Cette option est la meilleure pour vendre: chaque push GitHub peut redeployer le site.

## Option rapide: Netlify Drop

1. Va sur Netlify Drop.
2. Glisse-depose le dossier local `educalm-mvp`.
3. Recupere l'URL publique gratuite.
4. Teste le parcours sur mobile.
5. Partage cette URL dans tes messages et posts.

Limite: ce n'est pas relie au repo GitHub. Pour mettre a jour, il faut redeposer le dossier.

## Option Vercel

1. Importe le repo `Mythmaker28/educalm` dans Vercel.
2. Laisse la commande de build vide.
3. Laisse le dossier racine sur `.`.
4. Deploie.

## Brancher un vrai paiement

Version simple:

1. Cree un produit Stripe: `Plan 7 jours EduCalm`.
2. Prix: `4,90 EUR`, paiement unique.
3. Cree un Stripe Payment Link.
4. Remplace le bouton de validation par ce lien public.
5. Apres paiement, redirige vers une page de confirmation ou envoie le plan par email.

Ne construis pas un checkout custom avant d'avoir des signaux de paiement.

## Seuil de validation

Ne construis pas plus lourd tant que tu n'as pas au moins:

- 300 visiteurs cibles;
- 50 generations;
- 15 emails;
- 3 paiements ou intentions fortes.

## Message de vente test

```text
J'ai construit une mini-app pour les moments ou tu sens que tu vas exploser avec ton chien, ton chat, ton enfant ou un autre animal.
Tu choisis la situation, tu coches les risques, et tu recuperes quoi faire maintenant, quoi dire, quoi eviter et quand consulter.
Je teste un pack 7 jours a 4,90 EUR. Tu veux l'essayer ?
```
