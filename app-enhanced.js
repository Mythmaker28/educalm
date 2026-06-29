const sources = {
  avsab: "AVSAB: privilégier renforcement, désensibilisation et contre-conditionnement; éviter douleur, peur et intimidation.",
  wsava: "WSAVA: évaluer alimentation, poids et score corporel; escalader au vétérinaire si signe médical.",
  aap: "AAP/HealthyChildren: discipline positive, limite claire, réparation; pas de violence ni humiliation.",
  safety: "EduCalm: réponse éducative courte, pas diagnostic médical, vétérinaire ou psychologique.",
  merckHorse: "Merck Veterinary Manual: les signes de colique equine relevent d un avis veterinaire.",
  rspcaRabbit: "RSPCA: lapins et petits herbivores demandent foin, eau et surveillance rapide en cas d arret alimentaire."
};

const scenarios = [
  {
    id: "dog-bark-alone",
    domain: "chien",
    category: "absence",
    method: "PATTE",
    label: "Chien qui aboie seul",
    problem: "Aboiements au départ ou pendant l'absence.",
    tension: "stress d'isolement, ennui, déclencheur sonore, rituel de départ trop chargé",
    now: [
      "Ne punis pas au retour: le chien ne relie pas la punition au moment exact de l'aboiement.",
      "Vérifie sécurité, eau, fenêtre, bruit extérieur et durée réelle de l'absence.",
      "Fais une micro-absence calme de 30 à 60 secondes plutôt qu'un grand départ émotionnel."
    ],
    phrase: "Je pars calmement, je reviens calmement. On ne transforme pas la porte en événement.",
    avoid: [
      "collier anti-aboiement en première intention",
      "crier derrière la porte",
      "retours surexcités qui rendent l'absence plus forte"
    ],
    plan: [
      "Jour 1: filme 10 minutes d'absence pour identifier le déclencheur réel.",
      "Jour 2: crée un rituel neutre de départ de 20 secondes.",
      "Jour 3: fais 5 micro-absences sous le seuil, sans attendre la panique.",
      "Jour 4: ajoute une occupation sûre donnée avant le départ.",
      "Jour 5: augmente la durée seulement si le chien récupère vite.",
      "Jour 6: note durée, aboiements, récupération et contexte.",
      "Jour 7: si panique ou blessure, prends un avis vétérinaire/comportemental."
    ],
    pro: "Panique, destruction d'issues, blessure, salivation massive ou hurlements prolongés: vétérinaire et/ou éducateur qualifié.",
    source: "avsab"
  },
  {
    id: "dog-destroy-alone",
    domain: "chien",
    category: "absence",
    method: "PATTE",
    label: "Chien qui détruit quand il est seul",
    problem: "Objets, portes ou coussins détruits pendant l'absence.",
    tension: "stress, ennui, accès trop large, besoin de mastication, apprentissage incomplet",
    now: [
      "Range ce qui est dangereux, sans dispute au retour.",
      "Réduis l'espace accessible à une zone calme et sûre.",
      "Propose une mastication adaptée avant une absence très courte."
    ],
    phrase: "Je sécurise l'espace. On reprend plus petit, plus court, plus clair.",
    avoid: [
      "mettre le museau dans les dégâts",
      "laisser toute la maison si la zone actuelle échoue",
      "augmenter la durée d'absence par défi"
    ],
    plan: [
      "Jour 1: liste ce qui est détruit et le moment probable.",
      "Jour 2: crée une zone sans objets dangereux ni accès aux issues.",
      "Jour 3: teste une occupation de léchage/mastication sous surveillance.",
      "Jour 4: fais 3 absences très courtes avec retour neutre.",
      "Jour 5: ajoute une dépense calme avant le départ.",
      "Jour 6: compare avec et sans occupation.",
      "Jour 7: demande aide si destruction ou panique persiste."
    ],
    pro: "Destruction d'issues, blessures, avaler des objets ou détresse forte: avis vétérinaire/pro.",
    source: "avsab"
  },
  {
    id: "dog-loose-leash",
    domain: "chien",
    category: "dressage",
    method: "TRAINING",
    label: "Marche en laisse sans tirer",
    problem: "Le chien tracte, zigzague ou accélère dès qu'il sort.",
    tension: "excitation, environnement trop stimulant, marche détendue pas assez renforcée",
    now: [
      "Travaille 5 minutes dans une rue facile, pas au pire endroit.",
      "Dès que la laisse se tend: arrête-toi, attends le relâchement, repars.",
      "Récompense les micro-retours vers toi avant que le chien tire."
    ],
    phrase: "Laisse souple, on avance. Laisse tendue, on attend.",
    avoid: [
      "saccades répétées",
      "crier son nom en boucle",
      "vouloir une balade parfaite tout de suite"
    ],
    plan: [
      "Jour 1: 5 minutes dans un lieu pauvre en distractions.",
      "Jour 2: récompense chaque regard ou retour spontané.",
      "Jour 3: ajoute demi-tour calme avant le point de traction.",
      "Jour 4: travaille à distance des déclencheurs.",
      "Jour 5: introduis un mot simple: doucement.",
      "Jour 6: fais 3 mini-balades plutôt qu'une bataille longue.",
      "Jour 7: augmente légèrement la difficulté si la laisse reste souple."
    ],
    pro: "Si le chien est incontrôlable, réactif ou dangereux, travaille avec un éducateur en méthodes positives.",
    source: "avsab"
  },
  {
    id: "dog-recall",
    domain: "chien",
    category: "dressage",
    method: "TRAINING",
    label: "Rappel fiable",
    problem: "Le chien ignore l'appel, revient tard ou fuit.",
    tension: "environnement plus récompensant que l'humain, rappel peu renforcé, liberté donnée trop tôt",
    now: [
      "Ne poursuis pas le chien sauf danger immédiat.",
      "Appelle une seule fois, accroupis-toi, bouge en arrière pour l'attirer.",
      "S'il revient, récompense même si tu es frustré."
    ],
    phrase: "Quand tu reviens, il se passe quelque chose de bien.",
    avoid: [
      "rappeler dix fois",
      "punir quand il revient enfin",
      "détacher en lieu non sécurisé trop tôt"
    ],
    plan: [
      "Jour 1: reprends en longe dans un lieu facile.",
      "Jour 2: récompense les retours spontanés.",
      "Jour 3: utilise une récompense meilleure que l'environnement.",
      "Jour 4: rappelle seulement quand tu peux aider la réussite.",
      "Jour 5: ajoute une distraction faible.",
      "Jour 6: alterne rappel puis liberté, pour ne pas annoncer la fin du plaisir.",
      "Jour 7: garde la longe tant que le rappel n'est pas fiable."
    ],
    pro: "Poursuite d'humains/animaux, route proche ou danger: sécurise avec longe et demande un accompagnement.",
    source: "avsab"
  },
  {
    id: "dog-jumps-people",
    domain: "chien",
    category: "accueil",
    method: "PATTE",
    label: "Chien qui saute sur les gens",
    problem: "Sauts à l'arrivée, sur invités ou dans la rue.",
    tension: "excitation sociale, attention donnée au saut, alternative absente",
    now: [
      "Préviens la personne: pas de contact tant que les pattes ne sont pas au sol.",
      "Garde la laisse courte mais souple si nécessaire.",
      "Récompense l'instant calme, même très bref."
    ],
    phrase: "Quatre pattes au sol, là tu peux dire bonjour.",
    avoid: [
      "repousser en riant",
      "crier pendant que tout le monde excite le chien",
      "laisser chaque invité renforcer le saut"
    ],
    plan: [
      "Jour 1: règle unique pour tout le foyer.",
      "Jour 2: entraînement avec une personne calme.",
      "Jour 3: récompense debout calme ou assis avant contact.",
      "Jour 4: éloigne puis reviens si le seuil est dépassé.",
      "Jour 5: crée une station d'accueil: tapis ou panier.",
      "Jour 6: teste avec invité plus stimulant.",
      "Jour 7: garde la règle même si le chien est mignon."
    ],
    pro: "Chien qui fait tomber, pince ou vise le visage: sécurise et demande un avis professionnel.",
    source: "avsab"
  },
  {
    id: "dog-puppy-biting",
    domain: "chien",
    category: "chiot",
    method: "TRAINING",
    label: "Chiot qui mordille tout",
    problem: "Mains, chevilles, vêtements ou meubles mordillés.",
    tension: "fatigue, excitation, besoin de mâcher, apprentissage de l'inhibition",
    now: [
      "Stoppe le jeu sans cri.",
      "Donne immédiatement un objet autorisé à mâcher.",
      "Si le chiot repart en boucle, fais une pause calme."
    ],
    phrase: "Les dents, c'est sur ton jouet. Mes mains ne sont pas un jouet.",
    avoid: [
      "jouer avec les mains",
      "exciter davantage pour le fatiguer",
      "punir fort un chiot qui apprend"
    ],
    plan: [
      "Jour 1: prépare 3 objets de mastication autorisés.",
      "Jour 2: même phrase, même redirection à chaque fois.",
      "Jour 3: repère l'horaire de fatigue.",
      "Jour 4: pause calme avant le pic d'excitation.",
      "Jour 5: renforce le jeu sans contact dents-peau.",
      "Jour 6: réduis les jeux de poursuite qui déclenchent.",
      "Jour 7: consulte si morsures crispées, perforantes ou agressives."
    ],
    pro: "Morsure qui perce, raideur, grognement intense ou douleur possible: avis pro.",
    source: "avsab"
  },
  {
    id: "dog-growls",
    domain: "chien",
    category: "sécurité",
    method: "PATTE",
    label: "Chien qui grogne",
    problem: "Grognement quand on approche, touche, prend un objet ou dérange.",
    tension: "peur, douleur, protection de ressource, inconfort ou signal d'éloignement",
    now: [
      "Recule: le grognement est un signal, pas une provocation.",
      "Ne prends pas l'objet de force.",
      "Sépare immédiatement enfant et chien si besoin."
    ],
    phrase: "Je t'ai entendu. Je recule et je sécurise.",
    avoid: [
      "punir le grognement",
      "forcer le contact",
      "mettre visage ou mains près de la gueule"
    ],
    plan: [
      "Jour 1: note contexte exact, distance, objet, personne.",
      "Jour 2: supprime les répétitions à risque.",
      "Jour 3: échange au lieu de prendre de force.",
      "Jour 4: travaille à distance sous le seuil.",
      "Jour 5: apprends 'lâche' contre récompense.",
      "Jour 6: vérifie fatigue, couchage, douleur, ressources.",
      "Jour 7: prends un accompagnement si ça persiste."
    ],
    pro: "Grognement vers enfant, morsure, douleur ou changement soudain: vétérinaire et professionnel.",
    source: "avsab"
  },
  {
    id: "dog-reactive-dogs",
    domain: "chien",
    category: "réactivité",
    method: "PATTE",
    label: "Chien réactif aux autres chiens",
    problem: "Aboie, tire, fixe, grogne ou explose quand il voit un chien.",
    tension: "peur, frustration, distance trop courte, déclencheur dépassant son seuil",
    now: [
      "Augmente la distance avant l'explosion.",
      "Tourne en arc plutôt qu'aller frontalement.",
      "Récompense le regard calme vers toi ou le demi-tour."
    ],
    phrase: "On s'éloigne. Tu n'as pas besoin de gérer ce chien maintenant.",
    avoid: [
      "forcer les salutations",
      "mettre nez à nez en laisse",
      "punir l'explosion sans traiter la distance"
    ],
    plan: [
      "Jour 1: note la distance où le chien voit sans exploser.",
      "Jour 2: travaille 5 minutes sous cette distance.",
      "Jour 3: récompense regarder puis se détourner.",
      "Jour 4: ajoute demi-tour joyeux.",
      "Jour 5: évite les croisements étroits.",
      "Jour 6: baisse la distance très progressivement.",
      "Jour 7: éducateur si force, morsure ou réactivité intense."
    ],
    pro: "Risque morsure, chien incontrôlable ou enfant impliqué: sécurité d'abord, accompagnement professionnel.",
    source: "avsab"
  },
  {
    id: "dog-mat-calm",
    domain: "chien",
    category: "dressage",
    method: "TRAINING",
    label: "Apprendre le calme au tapis",
    problem: "Le chien tourne, sollicite, saute ou ne se pose jamais.",
    tension: "manque d'alternative, renforcement involontaire de l'agitation, fatigue",
    now: [
      "Choisis un tapis précis, pas tout le salon.",
      "Récompense un pas vers le tapis, puis deux, puis le calme dessus.",
      "Arrête avant l'agacement: séance de 2 minutes."
    ],
    phrase: "Tapis. Je récompense le calme, pas l'agitation.",
    avoid: [
      "envoyer au panier comme punition",
      "séance trop longue",
      "récompenser les sollicitations incessantes"
    ],
    plan: [
      "Jour 1: 5 répétitions de montée sur tapis.",
      "Jour 2: récompense 3 secondes de calme.",
      "Jour 3: ajoute une distraction faible.",
      "Jour 4: augmente à 10 secondes.",
      "Jour 5: utilise avant repas ou invités.",
      "Jour 6: récompense aléatoirement le calme spontané.",
      "Jour 7: garde le tapis comme lieu positif."
    ],
    pro: "Agitation soudaine, douleur, halètement inhabituel ou changement brutal: vétérinaire.",
    source: "avsab"
  },
  {
    id: "dog-house-training",
    domain: "chien",
    category: "propreté",
    method: "PATTE",
    label: "Chiot pas encore propre",
    problem: "Accidents pipi/caca dans la maison.",
    tension: "sorties trop espacées, signaux manqués, excitation, apprentissage incomplet",
    now: [
      "Nettoie sans dispute, avec produit adapté si possible.",
      "Sors immédiatement après réveil, jeu, repas et excitation.",
      "Récompense dehors dans les 2 secondes après élimination."
    ],
    phrase: "Je te montre où faire, puis je récompense au bon endroit.",
    avoid: [
      "mettre le nez dedans",
      "punir après coup",
      "attendre trop longtemps entre sorties"
    ],
    plan: [
      "Jour 1: planning sorties toutes 2 heures si possible.",
      "Jour 2: note heures et lieux d'accidents.",
      "Jour 3: récompense dehors immédiatement.",
      "Jour 4: limite l'espace non surveillé.",
      "Jour 5: ajoute un signal de sortie constant.",
      "Jour 6: allonge seulement si succès.",
      "Jour 7: avis vétérinaire si douleur, sang, fréquence anormale."
    ],
    pro: "Douleur, sang, accidents soudains chez chien propre ou soif excessive: vétérinaire.",
    source: "safety"
  },
  {
    id: "cat-urine-outside",
    domain: "chat",
    category: "litière",
    method: "PATTE",
    label: "Chat qui urine hors litière",
    problem: "Urine sur lit, canapé, tapis ou près de la litière.",
    tension: "problème médical possible, litière inadaptée, stress, conflit, bac sale ou mal placé",
    now: [
      "Ne punis pas et ne crie pas: ça augmente le stress et n'identifie pas la cause.",
      "Vérifie si c'est soudain, fréquent, douloureux ou avec sang: vétérinaire.",
      "Ajoute temporairement un bac propre, ouvert, facile d'accès."
    ],
    phrase: "Je ne punis pas le symptôme. Je vérifie santé, litière et stress.",
    avoid: [
      "enfermer le chat dans la litière",
      "nettoyer à l'eau de javel puis laisser l'odeur attirer",
      "supposer vengeance ou méchanceté"
    ],
    plan: [
      "Jour 1: note lieu, heure, type d'urine, douleur visible.",
      "Jour 2: ajoute un bac propre dans une zone calme.",
      "Jour 3: nettoie avec produit enzymatique si disponible.",
      "Jour 4: teste litière non parfumée et bac découvert.",
      "Jour 5: réduis conflits, accès bloqués, bruit ou stress.",
      "Jour 6: compare fréquence avant/après changement.",
      "Jour 7: vétérinaire si persiste ou si changement soudain."
    ],
    pro: "Urine difficile, sang, douleur, chat mâle qui force ou changement brutal: vétérinaire rapidement.",
    source: "safety"
  },
  {
    id: "cat-scratches-furniture",
    domain: "chat",
    category: "griffades",
    method: "PATTE",
    label: "Chat qui griffe les meubles",
    problem: "Canapé, fauteuil, rideaux ou lit griffés régulièrement.",
    tension: "besoin normal de griffer, marquage, étirement, support autorisé absent ou mal placé",
    now: [
      "Place un griffoir stable juste près de la zone griffée.",
      "Rends le meuble moins intéressant temporairement et récompense le griffoir.",
      "Propose vertical et horizontal: les chats ont des préférences."
    ],
    phrase: "Tu as le droit de griffer, mais sur ce support.",
    avoid: [
      "punir après coup",
      "retirer tous les supports de griffade",
      "mettre le griffoir dans un coin que le chat n'utilise jamais"
    ],
    plan: [
      "Jour 1: observe vertical/horizontal et matière préférée.",
      "Jour 2: place le griffoir au point de passage.",
      "Jour 3: récompense ou joue près du griffoir.",
      "Jour 4: protège temporairement le meuble.",
      "Jour 5: ajoute un deuxième support si besoin.",
      "Jour 6: déplace très progressivement si le support est adopté.",
      "Jour 7: coupe des griffes avec apprentissage doux si nécessaire."
    ],
    pro: "Agressivité, douleur aux pattes ou changement brutal de griffade: vétérinaire.",
    source: "safety"
  },
  {
    id: "cat-play-bites",
    domain: "chat",
    category: "jeu",
    method: "PATTE",
    label: "Chat qui mord ou griffe en jeu",
    problem: "Attaque mains, chevilles ou bras pendant les jeux.",
    tension: "jeu prédateur normal redirigé sur humain, manque de jouets à distance, surexcitation",
    now: [
      "Stoppe le mouvement des mains et retire l'attention.",
      "Redirige vers canne à pêche, balle ou jouet à distance.",
      "Fais deux sessions de jeu courtes plutôt qu'une grande excitation."
    ],
    phrase: "Mes mains ne sont pas une proie. Le jeu, c'est sur le jouet.",
    avoid: [
      "jouer avec les mains",
      "punir physiquement",
      "prolonger quand la queue fouette et le chat monte"
    ],
    plan: [
      "Jour 1: retire les jeux avec mains.",
      "Jour 2: 2 sessions de chasse-jouet de 5 minutes.",
      "Jour 3: termine par petite récompense ou repas.",
      "Jour 4: stop immédiat si dents sur peau.",
      "Jour 5: enrichis l'environnement: cachettes, hauteur, jouets.",
      "Jour 6: repère les heures de pic.",
      "Jour 7: avis pro si morsures fortes ou agressivité hors jeu."
    ],
    pro: "Morsure profonde, agressivité soudaine ou douleur possible: vétérinaire.",
    source: "safety"
  },
  {
    id: "cat-night-meows",
    domain: "chat",
    category: "nuit",
    method: "PATTE",
    label: "Chat qui miaule la nuit",
    problem: "Miaulements nocturnes, réveils, grattage de porte.",
    tension: "routine renforcée, ennui, faim anticipée, stress, douleur possible chez senior",
    now: [
      "Ne récompense pas le miaulement par jeu ou repas immédiat si santé OK.",
      "Planifie jeu actif puis repas avant ta nuit.",
      "Vérifie âge, douleur, soif, appétit, désorientation si changement récent."
    ],
    phrase: "Je réponds à tes besoins avant la nuit, pas au chantage à 3h.",
    avoid: [
      "nourrir à chaque réveil",
      "crier derrière la porte",
      "ignorer un changement brutal chez chat âgé"
    ],
    plan: [
      "Jour 1: note heure, durée, déclencheur.",
      "Jour 2: jeu de chasse 10 minutes avant repas du soir.",
      "Jour 3: enrichissement nocturne calme.",
      "Jour 4: repas programmé si besoin, pas à la demande.",
      "Jour 5: garde la même réponse toute la nuit.",
      "Jour 6: compare intensité.",
      "Jour 7: vétérinaire si changement soudain, senior ou signes physiques."
    ],
    pro: "Miaulements soudains, perte de poids, soif, douleur, désorientation: vétérinaire.",
    source: "safety"
  },
  {
    id: "cat-hiding-stress",
    domain: "chat",
    category: "stress",
    method: "PATTE",
    label: "Chat caché ou stressé",
    problem: "Le chat se cache, évite le contact ou sursaute.",
    tension: "peur, changement d'environnement, conflit, douleur, manque de refuge",
    now: [
      "Ne force pas le contact et ne le sors pas de force.",
      "Crée une pièce refuge: eau, nourriture, litière, cachette.",
      "Assieds-toi à distance, laisse le chat choisir l'approche."
    ],
    phrase: "Je te laisse une sortie et une cachette. Je ne force pas.",
    avoid: [
      "bloquer la cachette",
      "inviter tout le monde à le caresser",
      "ignorer une douleur ou une baisse d'appétit"
    ],
    plan: [
      "Jour 1: zone refuge calme.",
      "Jour 2: routine nourriture à heure stable.",
      "Jour 3: présence calme sans contact forcé.",
      "Jour 4: jeu à distance si le chat accepte.",
      "Jour 5: ajoute hauteur/cachette.",
      "Jour 6: observe appétit, litière, toilette.",
      "Jour 7: vétérinaire si ne mange pas ou changement brutal."
    ],
    pro: "Chat qui ne mange pas, se cache soudainement ou semble douloureux: vétérinaire.",
    source: "safety"
  },
  {
    id: "cat-cohabitation",
    domain: "chat",
    category: "cohabitation",
    method: "PATTE",
    label: "Cohabitation difficile entre chats",
    problem: "Poursuites, blocages, feulements, accès litière ou nourriture contrôlés.",
    tension: "territoire, ressources insuffisantes, présentation trop rapide, stress",
    now: [
      "Sépare temporairement si poursuite ou blocage.",
      "Multiplie ressources: bacs, eau, nourriture, couchages, hauteurs.",
      "Réintroduis par odeurs et distance, pas face-à-face forcé."
    ],
    phrase: "On ralentit. Chacun a son espace et ses ressources.",
    avoid: [
      "les laisser régler seuls si harcèlement",
      "un seul bac pour plusieurs chats",
      "forcer le contact nez à nez"
    ],
    plan: [
      "Jour 1: séparation calme si tension forte.",
      "Jour 2: échange d'odeurs avec tissu.",
      "Jour 3: repas à distance de chaque côté d'une porte.",
      "Jour 4: courte vue contrôlée sous seuil.",
      "Jour 5: multiplie ressources sur plusieurs zones.",
      "Jour 6: augmente le temps seulement si calme.",
      "Jour 7: avis pro si poursuites ou blessures."
    ],
    pro: "Blessure, morsure, chat bloqué loin de litière/nourriture: vétérinaire/comportementaliste.",
    source: "safety"
  },
  {
    id: "child-hits-sibling",
    domain: "enfant",
    category: "agressivité",
    method: "CADRE",
    label: "Enfant qui frappe son frère ou sa sœur",
    problem: "Coup, gifle, poussée ou objet lancé pendant un conflit.",
    tension: "émotion débordante, jalousie, conflit de ressource, compétence sociale immature",
    now: [
      "Sépare et vérifie que personne n'est blessé.",
      "Parle court: stop, limite, émotion nommée.",
      "Occupe-toi d'abord de l'enfant touché, pas du spectacle."
    ],
    phrase: "Stop. Je ne te laisse pas frapper. Tu peux être en colère, pas faire mal.",
    avoid: [
      "humilier devant la fratrie",
      "frapper pour apprendre à ne pas frapper",
      "négocier pendant que les coups continuent"
    ],
    plan: [
      "Jour 1: règle simple: on peut dire stop, pas taper.",
      "Jour 2: répète une phrase unique.",
      "Jour 3: crée une zone pause sans humiliation.",
      "Jour 4: entraîne une demande alternative: aide-moi, à moi, stop.",
      "Jour 5: réparation: vérifier, excuse, geste concret.",
      "Jour 6: repère déclencheur: fatigue, partage, écran.",
      "Jour 7: consulte si violence intense, fréquente ou danger."
    ],
    pro: "Blessure, peur forte, violence répétée ou adulte proche de craquer: aide professionnelle.",
    source: "aap"
  },
  {
    id: "child-tantrum",
    domain: "enfant",
    category: "crise",
    method: "CADRE",
    label: "Crise de colère",
    problem: "Cris, pleurs, opposition, corps au sol, perte de contrôle.",
    tension: "fatigue, frustration, transition, besoin non satisfait, limite difficile",
    now: [
      "Assure la sécurité: objets dangereux, route, escalier.",
      "Baisse le volume, dis moins de mots.",
      "Tiens la limite sans ajouter une punition à chaud."
    ],
    phrase: "Je vois que c'est très dur. La réponse reste non. Je reste là, je ne crie pas.",
    avoid: [
      "long sermon pendant la crise",
      "céder uniquement pour arrêter le bruit",
      "menaces impossibles à tenir"
    ],
    plan: [
      "Jour 1: note l'heure et le déclencheur.",
      "Jour 2: annonce les transitions 5 minutes avant.",
      "Jour 3: propose deux choix acceptables.",
      "Jour 4: phrase courte et identique.",
      "Jour 5: réparation après retour au calme.",
      "Jour 6: ajuste sommeil/faim/écran si déclencheur.",
      "Jour 7: aide pro si crises dangereuses ou très fréquentes."
    ],
    pro: "Automutilation, violence sévère, danger ou détresse parentale: professionnel adapté.",
    source: "aap"
  },
  {
    id: "child-refuses-instruction",
    domain: "enfant",
    category: "consigne",
    method: "CADRE",
    label: "Enfant qui refuse une consigne",
    problem: "Ignore, répond non, traîne ou provoque quand une demande est faite.",
    tension: "consigne floue, trop de mots, transition, besoin d'autonomie",
    now: [
      "Approche-toi, contact visuel si possible, consigne en une phrase.",
      "Donne un choix limité si les deux options te conviennent.",
      "Applique une conséquence logique courte, pas une menace."
    ],
    phrase: "Tu peux mettre tes chaussures seul ou je t'aide. Dans les deux cas, on part.",
    avoid: [
      "répéter 15 fois depuis une autre pièce",
      "changer la règle au milieu",
      "promettre une punition disproportionnée"
    ],
    plan: [
      "Jour 1: une consigne à la fois.",
      "Jour 2: formule positive: marche, plutôt que ne cours pas.",
      "Jour 3: choix limité.",
      "Jour 4: minuteur visuel.",
      "Jour 5: conséquence logique liée à la consigne.",
      "Jour 6: félicite l'exécution rapide.",
      "Jour 7: simplifie la routine si blocage répété."
    ],
    pro: "Refus massif avec souffrance, école, sommeil ou anxiété importante: avis professionnel.",
    source: "aap"
  },
  {
    id: "child-insults",
    domain: "enfant",
    category: "respect",
    method: "CADRE",
    label: "Enfant qui insulte",
    problem: "Insultes, mots blessants, provocation verbale.",
    tension: "colère, imitation, recherche d'effet, manque de mots pour exprimer",
    now: [
      "Ne réponds pas par une insulte ou humiliation.",
      "Nomme la limite et propose une phrase de remplacement.",
      "Reviens sur réparation après retour au calme."
    ],
    phrase: "Tu peux être furieux. Tu ne peux pas m'insulter. Dis: je suis très en colère.",
    avoid: [
      "se lancer dans un duel verbal",
      "rire si la règle compte vraiment",
      "étiqueter l'enfant comme méchant"
    ],
    plan: [
      "Jour 1: liste 3 phrases de remplacement.",
      "Jour 2: même limite à chaque insulte.",
      "Jour 3: ignore la provocation secondaire, traite le fond.",
      "Jour 4: réparation verbale après calme.",
      "Jour 5: repère modèles: vidéos, adultes, pairs.",
      "Jour 6: valorise une colère exprimée correctement.",
      "Jour 7: consulte si menaces graves ou violence associée."
    ],
    pro: "Menaces crédibles, harcèlement, violence ou détresse: adulte référent/professionnel.",
    source: "aap"
  },
  {
    id: "child-lies",
    domain: "enfant",
    category: "responsabilité",
    method: "CADRE",
    label: "Enfant qui ment",
    problem: "Nie un fait évident, cache une erreur, invente une version.",
    tension: "peur de la punition, honte, évitement, compétence morale en construction",
    now: [
      "Ne transforme pas l'aveu en piège.",
      "Sépare vérité, réparation et conséquence.",
      "Réduis l'intérêt de mentir en rendant l'aveu plus sûr que le mensonge."
    ],
    phrase: "Je préfère une vérité difficile à un mensonge. Maintenant on répare.",
    avoid: [
      "interrogatoire humiliant",
      "punition énorme après aveu",
      "dire tu es menteur"
    ],
    plan: [
      "Jour 1: formule: vérité puis réparation.",
      "Jour 2: remercie l'aveu avant la conséquence.",
      "Jour 3: conséquence liée au problème.",
      "Jour 4: donne une chance de corriger.",
      "Jour 5: explique l'impact sur la confiance.",
      "Jour 6: remarque les petites honnêtetés.",
      "Jour 7: aide pro si mensonges dangereux ou répétés avec souffrance."
    ],
    pro: "Mensonge lié à danger, violence, abus, vol important ou détresse: demander aide.",
    source: "aap"
  },
  {
    id: "child-bedtime",
    domain: "enfant",
    category: "sommeil",
    method: "CADRE",
    label: "Enfant qui refuse de dormir",
    problem: "Sort du lit, négocie, pleure, demande encore une chose.",
    tension: "routine floue, séparation, fatigue excessive, écran, peur",
    now: [
      "Garde une routine courte et identique.",
      "Réponds à un besoin réel une fois, puis limite claire.",
      "Raccompagne sans relancer une discussion."
    ],
    phrase: "Je t'ai entendu. La routine est finie. Je te raccompagne au lit.",
    avoid: [
      "nouvelle négociation à chaque sortie",
      "écran juste avant dormir",
      "menaces qui rendent le coucher anxieux"
    ],
    plan: [
      "Jour 1: routine 20 minutes, même ordre.",
      "Jour 2: choix limité: pyjama bleu ou vert.",
      "Jour 3: une dernière demande prévue.",
      "Jour 4: raccompagnement neutre.",
      "Jour 5: valorise le premier coucher réussi.",
      "Jour 6: ajuste heure si fatigue excessive.",
      "Jour 7: avis si anxiété ou troubles sévères."
    ],
    pro: "Terreurs, ronflements importants, anxiété forte ou épuisement familial: professionnel.",
    source: "aap"
  },
  {
    id: "child-screen-transition",
    domain: "enfant",
    category: "écrans",
    method: "CADRE",
    label: "Crise quand l'écran s'arrête",
    problem: "Colère, négociation ou agressivité à la fin d'un dessin animé/jeu.",
    tension: "transition brutale, récompense forte, règle variable, fatigue",
    now: [
      "Annonce la fin avant, puis tiens la limite.",
      "Donne une action de sortie: poser, brancher, choisir activité suivante.",
      "Ne rajoute pas 5 minutes si la crise devient la stratégie gagnante."
    ],
    phrase: "L'écran s'arrête. Tu peux être déçu. Maintenant tu poses et tu choisis livre ou douche.",
    avoid: [
      "menacer puis céder",
      "arracher en criant si ce n'est pas dangereux",
      "utiliser l'écran comme seule sortie de crise"
    ],
    plan: [
      "Jour 1: règle écrite ou visuelle avant l'écran.",
      "Jour 2: minuteur visible.",
      "Jour 3: choix d'après-écran préparé.",
      "Jour 4: même conséquence si refus.",
      "Jour 5: félicite arrêt correct.",
      "Jour 6: réduis usage si crises trop fortes.",
      "Jour 7: ajuste horaires et fatigue."
    ],
    pro: "Violence sévère, sommeil détruit, isolement ou conflits majeurs: aide pro.",
    source: "aap"
  },
  {
    id: "child-school-departure",
    domain: "enfant",
    category: "routine",
    method: "CADRE",
    label: "Crise avant départ école",
    problem: "Refus de s'habiller, pleurs, lenteur, opposition au moment de partir.",
    tension: "transition, anxiété, fatigue, routine trop dense, consignes multiples",
    now: [
      "Réduis les mots: une étape maintenant.",
      "Choisis une conséquence naturelle courte, pas un conflit total.",
      "Préserve le départ: l'objectif est sortir sans escalade."
    ],
    phrase: "Je t'aide à partir. Tu peux râler, mais on avance étape par étape.",
    avoid: [
      "débat sur toute la matinée",
      "humilier devant l'école",
      "ajouter 5 consignes à la fois"
    ],
    plan: [
      "Jour 1: préparer vêtements/sac la veille.",
      "Jour 2: routine visuelle de 4 étapes.",
      "Jour 3: minuteur pour chaque étape.",
      "Jour 4: choix limité sur un détail.",
      "Jour 5: renforcer le premier geste coopératif.",
      "Jour 6: avancer l'heure de sommeil si fatigue.",
      "Jour 7: parler à l'école si anxiété répétée."
    ],
    pro: "Peur intense de l'école, plaintes physiques répétées, harcèlement possible: adulte référent/pro.",
    source: "aap"
  },
  {
    id: "dog-overweight",
    domain: "nutrition",
    category: "poids chien",
    method: "NUTRI",
    label: "Chien en surpoids",
    problem: "Silhouette qui s'arrondit, côtes difficiles à sentir, fatigue à l'effort.",
    tension: "ration surestimée, friandises, restes, baisse d'activité, facteur médical possible",
    now: [
      "Ne mets pas le chien au régime brutal sans avis si obésité, maladie ou senior.",
      "Note pendant 3 jours tout ce qui entre dans sa gueule: repas, restes, friandises.",
      "Évalue simplement: côtes palpables sans appuyer fort, taille visible vue de dessus."
    ],
    phrase: "On mesure d'abord. On ajuste ensuite, pas au hasard.",
    avoid: [
      "couper la ration de moitié brutalement",
      "oublier les friandises dans le total",
      "changer d'aliment chaque semaine"
    ],
    plan: [
      "Jour 1: poids actuel + photos dessus/profil.",
      "Jour 2: journal alimentaire complet.",
      "Jour 3: remplace une partie des friandises par ration prélevée.",
      "Jour 4: ajoute 5 à 10 minutes d'activité douce si possible.",
      "Jour 5: vérifie la quantité recommandée sur le sac, sans la prendre comme vérité absolue.",
      "Jour 6: fixe une pesée hebdomadaire.",
      "Jour 7: vétérinaire pour objectif de poids si surpoids marqué."
    ],
    pro: "Obésité, essoufflement, douleur, maladie, perte ou prise de poids rapide: vétérinaire.",
    source: "wsava"
  },
  {
    id: "cat-overweight",
    domain: "nutrition",
    category: "poids chat",
    method: "NUTRI",
    label: "Chat en surpoids",
    problem: "Chat qui grossit, ventre pendulaire, difficulté à sentir les côtes.",
    tension: "ration libre trop riche, faible activité, friandises, ennui, facteur médical possible",
    now: [
      "Ne fais pas jeûner un chat: réduction brutale dangereuse.",
      "Pèse ou estime tout ce qui est donné pendant 3 jours.",
      "Fractionne repas et ajoute jeu court avant nourriture."
    ],
    phrase: "Je ne te prive pas brutalement. Je mesure, je fractionne, je fais bouger.",
    avoid: [
      "jeûne ou restriction extrême",
      "croquettes à volonté sans mesure si prise de poids",
      "perdre du poids sans suivi"
    ],
    plan: [
      "Jour 1: poids + photo dessus/profil.",
      "Jour 2: journal repas/friandises.",
      "Jour 3: retire les extras non mesurés.",
      "Jour 4: 2 jeux de chasse de 5 minutes.",
      "Jour 5: cache une partie de la ration dans un puzzle simple.",
      "Jour 6: pesée hebdomadaire.",
      "Jour 7: vétérinaire pour plan si surpoids net."
    ],
    pro: "Chat qui ne mange pas, maigrit vite, boit plus ou change brutalement: vétérinaire.",
    source: "wsava"
  },
  {
    id: "training-treats-calories",
    domain: "nutrition",
    category: "friandises",
    method: "NUTRI",
    label: "Friandises de dressage sans faire grossir",
    problem: "On récompense beaucoup, puis le poids augmente.",
    tension: "récompenses non comptées, morceaux trop gros, entraînement fréquent",
    now: [
      "Utilise de très petits morceaux: odeur et timing comptent plus que taille.",
      "Prélève une partie de la ration quotidienne pour l'entraînement.",
      "Alterne nourriture, jeu, accès à dehors ou caresse si cela motive vraiment l'animal."
    ],
    phrase: "Je récompense souvent, mais je compte ce que je donne.",
    avoid: [
      "grosses friandises à chaque répétition",
      "fromage/charcuterie en routine",
      "penser que dressage positif veut dire suralimenter"
    ],
    plan: [
      "Jour 1: coupe les récompenses en mini-morceaux.",
      "Jour 2: mets la ration d'entraînement à part.",
      "Jour 3: teste 3 récompenses non alimentaires.",
      "Jour 4: récompense plus les bons choix difficiles.",
      "Jour 5: commence à espacer sur comportements acquis.",
      "Jour 6: surveille selles et poids.",
      "Jour 7: ajuste avec vétérinaire si régime spécial."
    ],
    pro: "Animal malade, allergique, obèse ou sous régime vétérinaire: demande avis avant friandises.",
    source: "wsava"
  },
  {
    id: "food-transition",
    domain: "nutrition",
    category: "alimentation",
    method: "NUTRI",
    label: "Transition alimentaire chien/chat",
    problem: "Changer d'aliment sans diarrhée, refus ou vomissement.",
    tension: "changement trop rapide, sensibilité digestive, aliment inadapté",
    now: [
      "Si l'animal est malade, ne change pas au hasard: avis vétérinaire.",
      "Mélange ancien et nouvel aliment progressivement.",
      "Observe selles, appétit, vomissements, démangeaisons."
    ],
    phrase: "On change progressivement et on observe, pas tout d'un coup.",
    avoid: [
      "changer 100% du repas du jour au lendemain",
      "multiplier les marques à chaque selle molle",
      "ignorer vomissements répétés ou abattement"
    ],
    plan: [
      "Jour 1: 75% ancien, 25% nouveau.",
      "Jour 2: même ratio si selles sensibles.",
      "Jour 3: 50/50 si tout va bien.",
      "Jour 4: stabilise si trouble digestif.",
      "Jour 5: 25% ancien, 75% nouveau.",
      "Jour 6: 100% nouveau si OK.",
      "Jour 7: note appétit, selles, peau, énergie."
    ],
    pro: "Vomissements répétés, sang, abattement, chiot/chaton fragile ou maladie: vétérinaire.",
    source: "wsava"
  },
  {
    id: "pet-not-eating",
    domain: "nutrition",
    category: "alerte",
    method: "NUTRI",
    label: "Chien ou chat qui ne mange plus",
    problem: "Refus de nourriture, appétit très bas ou tri soudain.",
    tension: "douleur, maladie, stress, aliment avarié, changement trop rapide",
    now: [
      "Vérifie eau, comportement général, vomissements, diarrhée, douleur, respiration.",
      "Ne force pas un aliment inadapté ou dangereux.",
      "Chat qui ne mange pas: ne laisse pas traîner sans avis si ça dure."
    ],
    phrase: "Un refus soudain n'est pas un caprice à punir. Je vérifie la santé.",
    avoid: [
      "attendre plusieurs jours chez un chat abattu",
      "donner médicaments humains",
      "forcer à manger sans savoir pourquoi"
    ],
    plan: [
      "Aujourd'hui: note durée du refus et autres signes.",
      "Aujourd'hui: propose eau et nourriture habituelle fraîche.",
      "Aujourd'hui: appelle vétérinaire si chat, jeune animal, senior ou signe associé.",
      "Demain: pas d'amélioration = avis vétérinaire.",
      "Ensuite: transition uniquement si santé OK."
    ],
    pro: "Refus + abattement, vomissements, douleur, chat qui ne mange pas, perte de poids: vétérinaire.",
    source: "wsava"
  },
  {
    id: "cat-hydration",
    domain: "nutrition",
    category: "hydratation chat",
    method: "NUTRI",
    label: "Chat qui boit peu",
    problem: "Peu d'eau visible, urine concentrée, inquiétude sur hydratation.",
    tension: "préférence d'eau, gamelle mal placée, alimentation sèche, stress, maladie possible",
    now: [
      "Ne force pas à boire, rends l'eau plus accessible.",
      "Ajoute plusieurs points d'eau loin de la litière et de la nourriture.",
      "Surveille si boit beaucoup plus ou urine plus: vétérinaire."
    ],
    phrase: "Je rends l'eau facile et attirante, je surveille les changements.",
    avoid: [
      "une seule gamelle près de la litière",
      "ignorer soif excessive",
      "changer tout sans observer"
    ],
    plan: [
      "Jour 1: ajoute 2 points d'eau.",
      "Jour 2: teste bol large ou fontaine si disponible.",
      "Jour 3: nettoie les gamelles.",
      "Jour 4: propose un peu d'humide si adapté.",
      "Jour 5: observe litière et fréquence d'urine.",
      "Jour 6: garde ce qui fonctionne.",
      "Jour 7: vétérinaire si changement de soif/urine."
    ],
    pro: "Soif excessive, urines anormales, sang, douleur ou abattement: vétérinaire.",
    source: "wsava"
  },
  {
    id: "child-dog-safety",
    domain: "foyer",
    category: "enfant + chien",
    method: "SECURITE",
    label: "Enfant trop brusque avec le chien",
    problem: "L'enfant serre, poursuit, monte sur le chien ou dérange son couchage.",
    tension: "manque de règle, excitation, signaux canins non lus, risque morsure",
    now: [
      "Sépare sans gronder le chien.",
      "Explique une règle observable: on caresse avec une main, on laisse partir.",
      "Interdis accès au couchage, gamelle, jouet de mastication."
    ],
    phrase: "On ne poursuit pas le chien. S'il part, on le laisse partir.",
    avoid: [
      "laisser enfant et chien gérer seuls",
      "punir le grognement du chien",
      "forcer câlins ou photos"
    ],
    plan: [
      "Jour 1: règles visibles: pas gamelle, pas couchage, pas poursuite.",
      "Jour 2: apprends caresse 3 secondes puis pause.",
      "Jour 3: zone chien interdite à l'enfant.",
      "Jour 4: récompense l'enfant qui laisse le chien tranquille.",
      "Jour 5: apprends signaux: chien qui part, se fige, lèche, détourne.",
      "Jour 6: interactions courtes supervisées.",
      "Jour 7: pro si grognement, morsure ou peur."
    ],
    pro: "Grognement vers enfant, morsure, chien acculé ou adulte dépassé: séparation et professionnel.",
    source: "avsab"
  },
  {
    id: "pet-vacation-routine",
    domain: "foyer",
    category: "vacances",
    method: "PATTE",
    label: "Animal difficile en vacances ou chez des proches",
    problem: "Aboie, détruit, urine, se cache ou s'excite dans un nouvel endroit.",
    tension: "perte de repères, odeurs, bruit, règles incohérentes, fatigue",
    now: [
      "Réduis l'espace au lieu de demander une adaptation totale.",
      "Installe coin refuge avec couchage, eau, gamelle, jouet connu.",
      "Garde la même règle clé que chez toi."
    ],
    phrase: "Nouveau lieu, petites règles. On sécurise d'abord.",
    avoid: [
      "laisser accès à toute la maison dès l'arrivée",
      "changer toutes les routines en même temps",
      "forcer interactions avec enfants/animaux locaux"
    ],
    plan: [
      "Jour 1: arrivée calme, zone refuge.",
      "Jour 2: routine repas/sorties stable.",
      "Jour 3: exploration courte supervisée.",
      "Jour 4: enrichissement calme.",
      "Jour 5: prévention avant invités/bruit.",
      "Jour 6: note déclencheurs locaux.",
      "Jour 7: adapte ou rentre si stress dangereux."
    ],
    pro: "Morsure, fuite, refus de manger, douleur, panique ou enfant impliqué: professionnel/vétérinaire.",
    source: "safety"
  },
  {
    id: "dog-fear-outside",
    domain: "chien",
    category: "peur",
    method: "PATTE",
    label: "Chien qui a peur dehors",
    problem: "Blocage, fuite, tremblements ou refus d'avancer dehors.",
    tension: "surcharge sensorielle, mauvaise association, pÃ©riode sensible ou douleur possible",
    now: ["Ne tire pas pour le faire avancer.", "Augmente la distance avec ce qui fait peur.", "RÃ©compense un regard calme ou un micro-pas volontaire."],
    phrase: "On s'Ã©loigne. Tu n'as pas besoin d'affronter Ã§a maintenant.",
    avoid: ["forcer l'immersion", "rassurer en paniquant", "ignorer une douleur ou chute rÃ©cente"],
    plan: ["Jour 1: trajet trÃ¨s facile de 5 minutes.", "Jour 2: arrÃªt avant panique.", "Jour 3: associer son/lieu faible Ã  rÃ©compense.", "Jour 4: rentrer avant saturation.", "Jour 5: augmenter de quelques mÃ¨tres.", "Jour 6: noter dÃ©clencheurs prÃ©cis.", "Jour 7: avis pro si peur intense."],
    pro: "Peur soudaine, douleur, chute, dÃ©sorientation ou panique incontrÃ´lable: vÃ©tÃ©rinaire.",
    source: "avsab"
  },
  {
    id: "dog-steals-food",
    domain: "chien",
    category: "maison",
    method: "TRAINING",
    label: "Chien qui vole la nourriture",
    problem: "Vole sur table, plan de travail, poubelle ou mains.",
    tension: "opportunitÃ© trop facile, comportement auto-rÃ©compensÃ©, faim ou excitation",
    now: ["Retire l'accÃ¨s avant de travailler l'Ã©ducation.", "Ã‰change calmement si le chien a dÃ©jÃ  pris.", "RÃ©compense rester au tapis pendant prÃ©paration repas."],
    phrase: "La nourriture humaine n'est pas disponible. Tapis, puis rÃ©compense.",
    avoid: ["courir derriÃ¨re avec cris", "arracher de la gueule si risque morsure", "laisser tester la table encore et encore"],
    plan: ["Jour 1: zÃ©ro nourriture accessible.", "Jour 2: tapis pendant 2 minutes de cuisine.", "Jour 3: rÃ©compense recul de la table.", "Jour 4: travaille 'laisse' avec objet peu tentant.", "Jour 5: augmente tentation trÃ¨s progressivement.", "Jour 6: poubelle sÃ©curisÃ©e.", "Jour 7: vÃ©tÃ©rinaire si faim anormale."],
    pro: "Objet dangereux avalÃ©, chocolat, raisin, mÃ©dicament ou agressivitÃ©: vÃ©tÃ©rinaire/urgence.",
    source: "avsab"
  },
  {
    id: "dog-resource-guarding",
    domain: "chien",
    category: "sÃ©curitÃ©",
    method: "PATTE",
    label: "Chien qui protÃ¨ge gamelle ou jouet",
    problem: "Se fige, grogne ou menace quand on approche d'une ressource.",
    tension: "peur de perdre, historique de retrait forcÃ©, ressource trop prÃ©cieuse",
    now: ["Ne reprends pas de force.", "Ã‰loigne enfants et invitÃ©s.", "Ã‰change contre mieux uniquement si sÃ©curitÃ©."],
    phrase: "Je ne te vole pas. On Ã©change et on garde la distance.",
    avoid: ["mettre la main dans la gamelle pour tester", "punir le grognement", "laisser un enfant approcher"],
    plan: ["Jour 1: manger tranquille sans passage.", "Jour 2: apprendre Ã©change Ã  distance.", "Jour 3: lancer une friandise en passant loin.", "Jour 4: rÃ©duire distance seulement si dÃ©tente.", "Jour 5: objets de valeur hors accÃ¨s libre.", "Jour 6: rÃ¨gle famille: on ne prend pas.", "Jour 7: pro si grognement/morsure."],
    pro: "Protection vers enfant, morsure ou fixation intense: professionnel qualifiÃ©.",
    source: "avsab"
  },
  {
    id: "cat-sudden-aggression",
    domain: "chat",
    category: "sÃ©curitÃ©",
    method: "PATTE",
    label: "Chat agressif soudainement",
    problem: "Griffe, mord, feule ou attaque alors que ce n'Ã©tait pas habituel.",
    tension: "douleur possible, peur, conflit, manipulation trop longue, stress",
    now: ["ArrÃªte le contact et laisse une sortie.", "Ne poursuis pas le chat.", "Note douleur, boiterie, appÃ©tit, litiÃ¨re et changement rÃ©cent."],
    phrase: "Je recule. Un changement soudain se vÃ©rifie avant de corriger.",
    avoid: ["punir physiquement", "bloquer dans un coin", "supposer vengeance"],
    plan: ["Jour 1: sÃ©curiser et observer signes physiques.", "Jour 2: rÃ©duire manipulations.", "Jour 3: zones de retrait accessibles.", "Jour 4: interactions courtes Ã  l'initiative du chat.", "Jour 5: enrichissement calme.", "Jour 6: noter frÃ©quence.", "Jour 7: vÃ©tÃ©rinaire si soudain ou persistant."],
    pro: "AgressivitÃ© brutale, douleur, morsure profonde ou baisse d'Ã©tat: vÃ©tÃ©rinaire.",
    source: "safety"
  },
  {
    id: "cat-carrier-vet",
    domain: "chat",
    category: "transport",
    method: "TRAINING",
    label: "Chat impossible Ã  mettre en caisse",
    problem: "Fuit, griffe ou panique dÃ¨s que la caisse apparaÃ®t.",
    tension: "caisse associÃ©e uniquement au vÃ©tÃ©rinaire, contrainte brutale, absence d'habituation",
    now: ["Laisse la caisse ouverte dans la piÃ¨ce.", "Mets couverture/odeur connue dedans.", "RÃ©compense entrÃ©e volontaire, sans fermer au dÃ©but."],
    phrase: "La caisse devient un meuble normal, pas un piÃ¨ge.",
    avoid: ["sortir la caisse seulement le jour J", "pousser de force tÃªte la premiÃ¨re", "fermer trop tÃ´t"],
    plan: ["Jour 1: caisse ouverte + plaid.", "Jour 2: friandise prÃ¨s de l'entrÃ©e.", "Jour 3: friandise au fond.", "Jour 4: fermer 1 seconde puis ouvrir.", "Jour 5: porter 5 secondes.", "Jour 6: mini-trajet maison.", "Jour 7: continuer hors urgence."],
    pro: "Transport urgent, blessure ou chat trÃ¨s agressif: vÃ©tÃ©rinaire pour protocole adaptÃ©.",
    source: "safety"
  },
  {
    id: "child-breaks-object",
    domain: "enfant",
    category: "rÃ©paration",
    method: "CADRE",
    label: "Enfant qui casse un objet",
    problem: "Objet cassÃ© par colÃ¨re, jeu trop brusque ou nÃ©gligence.",
    tension: "impulsivitÃ©, frustration, manque de rÃ¨gle, consÃ©quence abstraite",
    now: ["SÃ©curise les morceaux ou objets dangereux.", "Nomme le fait sans insulte.", "Demande une rÃ©paration proportionnÃ©e aprÃ¨s retour au calme."],
    phrase: "L'objet est cassÃ©. On sÃ©curise, puis tu participes Ã  rÃ©parer.",
    avoid: ["dire tu es destructeur", "exiger une excuse pendant la crise", "punition sans lien avec le dÃ©gÃ¢t"],
    plan: ["Jour 1: rÃ©paration concrÃ¨te: ranger, aider, remplacer si possible.", "Jour 2: rÃ¨gle sur l'objet.", "Jour 3: alternative quand colÃ¨re monte.", "Jour 4: consÃ©quence logique courte.", "Jour 5: valorise demande d'aide avant casse.", "Jour 6: Ã©loigne objets fragiles aux moments Ã  risque.", "Jour 7: aide pro si casse volontaire rÃ©pÃ©tÃ©e."],
    pro: "Danger, violence, menace ou destruction rÃ©pÃ©tÃ©e avec souffrance: professionnel.",
    source: "aap"
  },
  {
    id: "child-sibling-conflict",
    domain: "enfant",
    category: "fratrie",
    method: "CADRE",
    label: "Conflit de fratrie qui dÃ©gÃ©nÃ¨re",
    problem: "Dispute rÃ©pÃ©tÃ©e, cris, accusations, rivalitÃ© ou escalade physique.",
    tension: "ressource rare, fatigue, besoin d'attention, rÃ¨gle de partage floue",
    now: ["SÃ©pare si Ã§a monte physiquement.", "Ã‰coute 20 secondes chacun, sans tribunal long.", "Pose une rÃ¨gle ou retire temporairement la ressource."],
    phrase: "Je vous Ã©coute chacun. Si Ã§a crie ou tape, l'objet fait pause.",
    avoid: ["chercher le coupable pendant 20 minutes", "comparer les enfants", "laisser le plus fort gagner"],
    plan: ["Jour 1: rÃ¨gle partage/temps visible.", "Jour 2: minuteur de tour.", "Jour 3: rÃ©paration si parole/coup blessant.", "Jour 4: temps individuel court avec chaque enfant.", "Jour 5: fÃ©liciter rÃ©solution sans adulte.", "Jour 6: retirer l'objet si conflit systÃ©matique.", "Jour 7: aide si violence ou peur."],
    pro: "Blessure, peur d'un enfant, harcÃ¨lement familial ou violence rÃ©pÃ©tÃ©e: aide professionnelle.",
    source: "aap"
  },
  {
    id: "food-label-ration",
    domain: "nutrition",
    category: "ration",
    method: "NUTRI",
    label: "Lire ration et Ã©tiquette sans se perdre",
    problem: "Doute sur quantitÃ©, aliment, friandises et prise de poids.",
    tension: "recommandations gÃ©nÃ©rales, activitÃ© rÃ©elle diffÃ©rente, extras non comptÃ©s",
    now: ["Lis la ration comme point de dÃ©part, pas vÃ©ritÃ© absolue.", "Mesure avec balance ou verre repÃ©rÃ©.", "Compte friandises, restes et mastication alimentaire."],
    phrase: "La ration se mesure, puis s'ajuste au corps et au poids.",
    avoid: ["changer tous les 3 jours", "confondre gobelet et grammes", "oublier les extras"],
    plan: ["Jour 1: noter aliment exact et grammes.", "Jour 2: noter tous extras.", "Jour 3: photo profil/dessus.", "Jour 4: vÃ©rifier selles/Ã©nergie.", "Jour 5: pesÃ©e si possible.", "Jour 6: ajustement lÃ©ger seulement.", "Jour 7: vÃ©tÃ©rinaire si doute poids/santÃ©."],
    pro: "Maladie, croissance, gestation, senior, rÃ©gime vÃ©tÃ©rinaire ou obÃ©sitÃ©: plan avec vÃ©tÃ©rinaire.",
    source: "wsava"
  },
  {
    id: "pet-begs-food",
    domain: "nutrition",
    category: "repas",
    method: "NUTRI",
    label: "Animal qui rÃ©clame Ã  table",
    problem: "Chien ou chat quÃ©mande, miaule, gratte ou vole pendant les repas.",
    tension: "comportement rÃ©compensÃ©, routine de restes, ennui, ration mal distribuÃ©e",
    now: ["DÃ©cide une rÃ¨gle familiale unique.", "Donne une occupation autorisÃ©e avant le repas humain.", "Ignore la demande si santÃ© et ration OK, rÃ©compense le calme Ã  distance."],
    phrase: "La table ne paie pas. Ton activitÃ© est lÃ -bas.",
    avoid: ["un membre de la famille qui donne parfois", "crier puis donner", "compenser par restes gras/salÃ©s"],
    plan: ["Jour 1: rÃ¨gle zÃ©ro table.", "Jour 2: tapis ou zone repas animal.", "Jour 3: occupation calme pendant repas.", "Jour 4: rÃ©compense silence/distance.", "Jour 5: toute la famille mÃªme rÃ¨gle.", "Jour 6: rÃ©duire progressivement l'aide.", "Jour 7: vÃ©rifier ration si vraie faim."],
    pro: "Faim anormale, perte de poids, soif ou changement brutal: vÃ©tÃ©rinaire.",
    source: "wsava"
  }
,
  {
    id: "horse-colic-alert",
    domain: "equides",
    category: "urgence digestive",
    method: "TRIAGE",
    label: "Cheval avec signes de colique",
    problem: "Cheval qui se regarde les flancs, gratte, se couche/se roule, transpire ou ne mange plus.",
    tension: "douleur abdominale possible, urgence veterinaire, risque d'aggravation rapide",
    now: ["Appelle un veterinaire equin si signes de colique, douleur ou abattement.", "Retire l'aliment concentre en attendant l'avis, garde eau disponible si le veterinaire ne dit pas autrement.", "Empeche les roulades dangereuses seulement si tu peux le faire sans te mettre en danger."],
    phrase: "Je ne traite pas une colique avec une astuce: j'appelle le veterinaire.",
    avoid: ["donner medicament humain", "faire marcher des heures sans avis", "attendre que ca passe si douleur visible"],
    plan: ["Maintenant: appeler veterinaire et decrire signes/duree/temperature si connue.", "Maintenant: preparer acces, licol, lumiere, historique alimentation.", "En attendant: surveiller sans se mettre en danger.", "Apres avis: suivre protocole veterinaire, pas un plan EduCalm."],
    pro: "Colique suspectee, douleur, cheval couche/roule, absence de crottins ou abattement: veterinaire equin.",
    source: "merckHorse"
  },
  {
    id: "horse-weight-body-condition",
    domain: "equides",
    category: "poids",
    method: "NUTRI",
    label: "Cheval trop maigre ou trop gros",
    problem: "Cotes tres visibles ou impossibles a sentir, encolure grasse, perte ou prise d'etat.",
    tension: "ration inadaptee, dents, parasites, douleur, manque ou exces de fourrage, maladie possible",
    now: ["Photographie profil, arriere et encolure pour suivre l'etat.", "Ne change pas brutalement concentres ou restriction sans avis.", "Verifie fourrage, dents, vermifugation raisonnee et activite avec un pro."],
    phrase: "On suit l'etat corporel, pas seulement le poids estime.",
    avoid: ["regime brutal", "suralimenter un cheval maigre sans chercher la cause", "ignorer dents ou parasites"],
    plan: ["Jour 1: photos + estimation etat corporel.", "Jour 2: lister fourrage, concentres, acces herbe.", "Jour 3: verifier dents/vaccins/parasitisme avec pro si doute.", "Jour 4: ajuster progressivement, jamais tout d'un coup.", "Jour 5: pesee ruban meme heure chaque semaine.", "Jour 6: adapter activite selon etat.", "Jour 7: veterinaire si variation rapide."],
    pro: "Amaigrissement rapide, fourbure suspectee, obesite marquee, vieux cheval ou maladie: veterinaire/nutrition equine.",
    source: "merckHorse"
  },
  {
    id: "horse-bites-handling",
    domain: "equides",
    category: "manipulation",
    method: "SECURITE",
    label: "Cheval qui mord ou menace a pied",
    problem: "Oreilles couchees, tete qui part vers l'humain, morsure au pansage, a la nourriture ou au sanglage.",
    tension: "douleur, defense apprise, peur, frustration alimentaire, limites de securite floues",
    now: ["Mets-toi hors de portee sans frapper.", "Cherche douleur ou contexte precis: sanglage, dos, dents, nourriture.", "Travaille derriere une barriere ou avec encadrement si risque."],
    phrase: "Je garde ma distance. Je ne transforme pas la manipulation en combat.",
    avoid: ["punition violente", "mettre un enfant au contact", "continuer une manipulation qui declenche douleur ou defense"],
    plan: ["Jour 1: noter moment exact de la menace.", "Jour 2: supprimer declencheur evitable.", "Jour 3: verifier materiel, sanglage, douleur.", "Jour 4: renforcer calme a distance.", "Jour 5: reprendre manipulation par etapes tres courtes.", "Jour 6: ne pas nourrir a la main si ca excite.", "Jour 7: pro equin si menace persiste."],
    pro: "Morsure, ruade, douleur, cheval entier ou manipulation dangereuse: professionnel equin/veterinaire.",
    source: "safety"
  },
  {
    id: "horse-trailer-loading",
    domain: "equides",
    category: "transport",
    method: "TRAINING",
    label: "Cheval qui refuse de monter en van",
    problem: "Bloque, recule, se cabre, charge ou panique devant le van.",
    tension: "peur, mauvaise experience, pression trop forte, sol/van inconfortable, manque d'etapes",
    now: ["Ne te place pas dans l'axe de recul ou d'ecrasement.", "Travaille l'approche du van avant de demander de monter.", "Recompense calme, regard, pas vers le pont, puis pause."],
    phrase: "On approche par etapes. La securite passe avant le depart.",
    avoid: ["forcer avec plusieurs personnes derriere", "cordes/pieges dangereux", "seance interminable qui finit en panique"],
    plan: ["Jour 1: verifier van, sol, lumiere, stabilite.", "Jour 2: marcher calmement pres du van.", "Jour 3: poser anterieurs sur pont puis redescendre.", "Jour 4: entrer un pas puis sortir avant panique.", "Jour 5: augmenter seulement si decontraction.", "Jour 6: fermer partiellement sans enfermer brutalement.", "Jour 7: faire appel pro si urgence transport."],
    pro: "Cheval qui se cabre, tombe, panique ou transport urgent medical: professionnel/veterinaire.",
    source: "safety"
  },
  {
    id: "horse-heat-water",
    domain: "equides",
    category: "chaleur",
    method: "TRIAGE",
    label: "Cheval en forte chaleur",
    problem: "Chaleur, transpiration, fatigue, eau insuffisante ou recuperation lente.",
    tension: "deshydratation, coup de chaleur, effort inadapte, acces eau/ombre insuffisant",
    now: ["Arrete l'effort et mets a l'ombre/ventilation.", "Propose eau propre, sans forcer a boire.", "Refroidis progressivement et appelle veterinaire si abattement ou recuperation anormale."],
    phrase: "On refroidit, on hydrate, on surveille. Pas d'effort heroique.",
    avoid: ["continuer le travail", "laisser sans eau", "ignorer cheval abattu ou temperature anormale"],
    plan: ["Aujourd'hui: eau, ombre, horaires frais.", "Aujourd'hui: surveiller attitude, respiration, recuperation.", "Demain: adapter travail a meteo.", "Semaine: verifier abreuvoir, sel/mineraux avec pro si besoin."],
    pro: "Abattement, temperature elevee, respiration anormale, collapsus ou absence de recuperation: veterinaire.",
    source: "safety"
  },
  {
    id: "rabbit-not-eating",
    domain: "nac",
    category: "urgence alimentation",
    method: "TRIAGE",
    label: "Lapin qui ne mange plus",
    problem: "Lapin qui refuse foin/granules, fait peu de crottes, reste prostre.",
    tension: "stase digestive possible, douleur dentaire, stress ou maladie; situation urgente chez le lapin",
    now: ["Appelle un veterinaire NAC rapidement si le lapin ne mange pas.", "Surveille crottes, posture, douleur, ventre, hydratation.", "Garde foin/eau accessibles, sans forcer de traitement maison risque."],
    phrase: "Chez le lapin, ne pas manger n'est pas un caprice: j'appelle un veterinaire NAC.",
    avoid: ["attendre plusieurs jours", "donner medicaments humains", "changer toute l'alimentation d'un coup"],
    plan: ["Maintenant: appel veterinaire NAC.", "Maintenant: noter derniere prise alimentaire et dernieres crottes.", "En attendant: calme, chaleur confortable, foin/eau.", "Apres avis: suivre protocole veterinaire."],
    pro: "Lapin qui ne mange pas, peu/pas de crottes, douleur, ventre gonfle ou prostration: veterinaire NAC rapidement.",
    source: "rspcaRabbit"
  },
  {
    id: "rabbit-chews-furniture",
    domain: "nac",
    category: "enrichissement",
    method: "PATTE",
    label: "Lapin qui ronge meubles ou cables",
    problem: "Ronge plinthes, meubles, tissus ou cables electriques.",
    tension: "besoin normal de ronger, ennui, manque de foin/enrichissement, acces dangereux",
    now: ["Protege immediatement les cables: risque vital.", "Propose foin a volonte et supports autorises a ronger.", "Reduis l'acces libre aux zones dangereuses."],
    phrase: "Tu dois ronger, mais pas les cables ni les meubles dangereux.",
    avoid: ["punir sans alternative", "laisser cables accessibles", "reduire le foin"],
    plan: ["Jour 1: securiser cables/plinthes.", "Jour 2: foin abondant + supports surs.", "Jour 3: zone d'exploration protegee.", "Jour 4: enrichissement alimentaire dans foin.", "Jour 5: redirection calme a chaque tentative.", "Jour 6: observer moments d'ennui.", "Jour 7: verifier dents si rongement/frustration anormale."],
    pro: "Ingestion de cable/plastique, brulure, salivation, arret alimentaire ou dents suspectes: veterinaire NAC.",
    source: "rspcaRabbit"
  },
  {
    id: "guinea-pig-weight-loss",
    domain: "nac",
    category: "poids",
    method: "NUTRI",
    label: "Cochon d'Inde qui maigrit",
    problem: "Perte de poids, tri alimentaire, poils ternes, moins d'activite.",
    tension: "douleur dentaire, alimentation inadaptee, maladie, stress social",
    now: ["Pese avec une balance precise et note le poids.", "Verifie acces au foin, eau et vitamine C adaptee.", "Contacte un veterinaire NAC si perte de poids ou baisse d'appetit."],
    phrase: "Un petit animal maigrit vite: je mesure et je fais verifier.",
    avoid: ["attendre longtemps", "changer tout l'aliment d'un coup", "ignorer dents ou baisse de crottes"],
    plan: ["Jour 1: poids et journal alimentaire.", "Jour 2: verifier foin/eau/vitamine C.", "Jour 3: observer crottes et dents apparentes.", "Jour 4: limiter stress et competition nourriture.", "Jour 5: pesee meme heure.", "Jour 6: enrichissement calme.", "Jour 7: veterinaire si perte confirmee."],
    pro: "Perte de poids, arret alimentaire, douleur, salivation ou dents suspectes: veterinaire NAC.",
    source: "safety"
  },
  {
    id: "parrot-screams",
    domain: "oiseaux",
    category: "cris",
    method: "PATTE",
    label: "Perroquet ou perruche qui crie beaucoup",
    problem: "Cris repetes, appels forts, agitation quand l'humain part ou revient.",
    tension: "appel social, ennui, renforcement par attention, sommeil ou environnement inadapte",
    now: ["Ne recompense pas le cri par une grande reaction.", "Recompense les sons acceptables et les moments calmes.", "Verifie sommeil, lumiere, enrichissement, interactions et sante."],
    phrase: "Je reponds au calme, pas au cri qui monte.",
    avoid: ["crier plus fort", "isoler brutalement", "ignorer un changement soudain ou signe de maladie"],
    plan: ["Jour 1: noter heures et declencheurs.", "Jour 2: renforcer un son plus doux.", "Jour 3: prevoir jeux de recherche alimentaire.", "Jour 4: routine sommeil stable.", "Jour 5: quitter/revenir sans scene.", "Jour 6: interactions courtes avant les pics.", "Jour 7: veterinaire aviaire si changement soudain."],
    pro: "Changement brutal, plumes gonflees, baisse appetit, respiration ou chute: veterinaire aviaire.",
    source: "safety"
  },
  {
    id: "bird-feather-plucking",
    domain: "oiseaux",
    category: "plumes",
    method: "TRIAGE",
    label: "Oiseau qui s'arrache les plumes",
    problem: "Plumes abimees, zones nues, picage ou toilettage excessif.",
    tension: "cause medicale possible, douleur, parasites, stress, ennui, environnement inadapte",
    now: ["Ne mets pas de produit maison sur la peau.", "Note localisation, duree, changements recents et alimentation.", "Prends un avis veterinaire aviaire: il faut exclure une cause medicale."],
    phrase: "Le picage n'est pas juste une mauvaise habitude: je verifie la sante.",
    avoid: ["punir", "coller une solution sans diagnostic", "attendre si plaie ou saignement"],
    plan: ["Aujourd'hui: photos et observation.", "Aujourd'hui: verifier sommeil, bain, enrichissement, stress.", "Sous peu: rendez-vous veterinaire aviaire.", "Ensuite: enrichissement progressif apres exclusion medicale."],
    pro: "Plaie, sang, abattement, perte de poids ou picage persistant: veterinaire aviaire.",
    source: "safety"
  },
  {
    id: "chicken-not-laying-or-weak",
    domain: "autres",
    category: "basse-cour",
    method: "TRIAGE",
    label: "Poule abattue ou ponte anormale",
    problem: "Poule isolee, crete pale, ne mange pas, ponte arretee ou posture inhabituelle.",
    tension: "maladie, parasites, chaleur, probleme de ponte, alimentation ou stress du groupe",
    now: ["Isole au calme si harcelement ou faiblesse.", "Verifie eau, chaleur, respiration, posture, fientes, acces nourriture.", "Contacte un veterinaire si abattement, douleur, ponte bloquee suspecte ou respiration anormale."],
    phrase: "Une poule abattue se surveille vite, pas dans trois jours.",
    avoid: ["laisser se faire piquer par le groupe", "donner medicaments au hasard", "ignorer chaleur ou absence d'eau"],
    plan: ["Aujourd'hui: eau fraiche, ombre, calme.", "Aujourd'hui: observer fientes/respiration/posture.", "Aujourd'hui: isoler si faiblesse.", "Demain: veterinaire si pas d'amelioration nette.", "Semaine: revoir alimentation, parasites, abri."],
    pro: "Abattement, respiration, douleur, ventre gonfle, ponte bloquee suspecte ou mortalite: veterinaire.",
    source: "safety"
  }
];

const domainLabels = {
  all: "Tout",
  chien: "Chien",
  chat: "Chat",
  enfant: "Enfants",
  nutrition: "Nutrition",
  foyer: "Foyer",
  equides: "Equidés",
  nac: "NAC",
  oiseaux: "Oiseaux",
  autres: "Autres"
};

const storageKeys = {
  plans: "educalm.plans",
  metrics: "educalm.metrics",
  intents: "educalm.intents"
};

const state = {
  currentPlan: null,
  panicTimer: null,
  panicRemaining: 30,
  libraryDomain: "all"
};

const calmForm = document.querySelector("#calmForm");
const scenarioSelect = document.querySelector("#scenarioSelect");
const contextSelect = document.querySelector("#contextSelect");
const profileSelect = document.querySelector("#profileSelect");
const intensityRange = document.querySelector("#intensityRange");
const intensityValue = document.querySelector("#intensityValue");
const detailsInput = document.querySelector("#detailsInput");
const resultPanel = document.querySelector("#resultPanel");
const libraryGrid = document.querySelector("#libraryGrid");
const savedGrid = document.querySelector("#savedGrid");
const librarySearch = document.querySelector("#librarySearch");
const emailInput = document.querySelector("#emailInput");
const intentMessage = document.querySelector("#intentMessage");

let domainSelect;

function injectEnhancedStyles() {
  const style = document.createElement("style");
  style.textContent = `
    .domain-filter-bar { display: flex; gap: 8px; flex-wrap: wrap; margin: 10px 0 14px; }
    .filter-pill { min-height: 34px; border: 1px solid var(--line); border-radius: 999px; padding: 0 11px; background: #fff; color: var(--muted); font-weight: 850; }
    .filter-pill.is-active { color: #fff; background: var(--teal); border-color: var(--teal); }
    .source-line { margin-top: 8px; color: var(--muted); font-size: 0.82rem; line-height: 1.4; }
    .method-note { display: inline-flex; width: max-content; max-width: 100%; padding: 5px 8px; border-radius: 999px; background: #eef5fb; color: #244f7f; font-size: 0.76rem; font-weight: 900; }
    .situation-card { display: grid; gap: 10px; }
    .situation-card h3 { margin-bottom: 0; }
    .scenario-count { color: var(--muted); font-weight: 800; }
    .field-block.domain-field { order: -2; }
    .field-block.scenario-field { order: -1; }
    .result-section.is-safety { background: #fff8e8; }
    @media (max-width: 520px) { .domain-filter-bar { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); } .filter-pill { border-radius: 8px; } }
  `;
  document.head.append(style);
}

function enhanceCopy() {
  document.title = "EduCalm - app calme et cadre";
  const h1 = document.querySelector(".topbar h1");
  if (h1) h1.textContent = "EduCalm";
  const meta = document.querySelector("meta[name='description']");
  if (meta) {
    meta.content = "EduCalm aide a reprendre le cadre face aux situations difficiles avec enfants, chiens, chats, equides et autres animaux.";
  }
  const heroProof = document.querySelector(".hero-proof");
  if (heroProof) {
    heroProof.innerHTML = `
      <span>${scenarios.length} fiches concretes</span>
      <span>Enfants et animaux</span>
      <span>Garde-fous visibles</span>
    `;
  }
  const libraryTitle = document.querySelector("#panel-library .section-heading h2");
  if (libraryTitle) libraryTitle.textContent = "Situations et guides prets a tester";
  const libraryEyebrow = document.querySelector("#panel-library .eyebrow");
  if (libraryEyebrow) libraryEyebrow.textContent = "Bibliotheque structuree";
  const priceTitle = document.querySelector(".price-card h2");
  if (priceTitle) priceTitle.textContent = "Pack calme 7 jours a 4,90 EUR";
}

function enhanceForm() {
  scenarioSelect.closest(".field-block")?.classList.add("scenario-field");

  const field = document.createElement("div");
  field.className = "field-block domain-field";
  field.innerHTML = `
    <label for="domainSelect">Univers</label>
    <select id="domainSelect" name="domain">
      ${Object.entries(domainLabels)
        .map(([value, label]) => `<option value="${value}">${label}</option>`)
        .join("")}
    </select>
  `;
  scenarioSelect.closest(".field-block").before(field);
  domainSelect = document.querySelector("#domainSelect");
  domainSelect.addEventListener("change", updateScenarioOptions);

  contextSelect.innerHTML = `
    <option value="maintenant">Ça se passe maintenant</option>
    <option value="repete">Ça se répète depuis plusieurs jours</option>
    <option value="maison">À la maison</option>
    <option value="sortie">En sortie / déplacement</option>
    <option value="nuit">Le soir ou la nuit</option>
    <option value="repas">Autour des repas</option>
    <option value="cohabitation">Avec famille, invités ou autres animaux</option>
  `;
  profileSelect.previousElementSibling.textContent = "Profil";
  profileSelect.innerHTML = `
    <option value="adulte-responsable">Adulte responsable</option>
    <option value="cheval-poney">Cheval / poney</option>
    <option value="lapin-rongeur">Lapin / rongeur</option>
    <option value="oiseau">Oiseau</option>
    <option value="basse-cour">Basse-cour</option>
    <option value="chien-adulte">Chien adulte</option>
    <option value="chiot">Chiot</option>
    <option value="chat-adulte">Chat adulte</option>
    <option value="chaton">Chaton</option>
    <option value="enfant-2-5">Enfant 2-5 ans</option>
    <option value="enfant-6-10">Enfant 6-10 ans</option>
    <option value="preadolescent">Préado</option>
  `;

  const riskBlock = document.querySelector(".risk-block");
  riskBlock.innerHTML = `
    <legend>Signaux à traiter en priorité</legend>
    <label><input type="checkbox" name="risk" value="danger" /> Danger immédiat ou personne blessée</label>
    <label><input type="checkbox" name="risk" value="bite" /> Morsure, griffure profonde ou risque de morsure</label>
    <label><input type="checkbox" name="risk" value="pain" /> Douleur possible, symptôme ou changement soudain</label>
    <label><input type="checkbox" name="risk" value="child-pet" /> Enfant et animal dans la même situation à risque</label>
    <label><input type="checkbox" name="risk" value="distress" /> Je sens que je peux perdre le contrôle</label>
    <label><input type="checkbox" name="risk" value="nutrition-alert" /> Refus de manger, perte de poids, vomissements ou soif anormale</label>
    <label><input type="checkbox" name="risk" value="large-animal-alert" /> Grand animal: colique, boiterie, chute, fuite ou chaleur forte</label>
    <label><input type="checkbox" name="risk" value="small-pet-alert" /> NAC/oiseau: ne mange plus, prostré, respiration ou chute</label>
  `;
}

function readJson(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
}

function writeJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getMetrics() {
  return readJson(storageKeys.metrics, { plans: 0, intents: 0 });
}

function setMetrics(metrics) {
  writeJson(storageKeys.metrics, metrics);
  renderMetrics();
}

function getSavedPlans() {
  return readJson(storageKeys.plans, []);
}

function getRisks() {
  return Array.from(document.querySelectorAll("input[name='risk']:checked")).map((item) => item.value);
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function listItems(items) {
  return `<ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
}

function filteredScenarios(domain = domainSelect?.value ?? "all") {
  if (domain === "all") return scenarios;
  return scenarios.filter((scenario) => scenario.domain === domain);
}

function updateScenarioOptions() {
  const previous = scenarioSelect.value;
  const items = filteredScenarios();
  scenarioSelect.innerHTML = items
    .map(
      (scenario) =>
        `<option value="${scenario.id}">${domainLabels[scenario.domain]} - ${escapeHtml(scenario.label)}</option>`
    )
    .join("");
  if (items.some((scenario) => scenario.id === previous)) {
    scenarioSelect.value = previous;
  }
}

function hardRiskKind(risks) {
  if (risks.includes("danger") || risks.includes("distress")) return "danger";
  if (risks.includes("bite") || risks.includes("child-pet")) return "bite";
  if (risks.includes("pain") || risks.includes("nutrition-alert") || risks.includes("large-animal-alert") || risks.includes("small-pet-alert")) return "medical";
  return null;
}

function buildSafetyPlan(scenario, context, profile, intensity, details, risks, kind) {
  const childDomain = scenario.domain === "enfant";
  const nutritionDomain = scenario.domain === "nutrition";
  const animalDomain = ["chien", "chat", "foyer", "equides", "nac", "oiseaux", "autres"].includes(scenario.domain);

  const now = childDomain
    ? [
        "Mets l'enfant et les autres personnes en sécurité.",
        "Ne cherche pas une leçon complète à chaud: phrases courtes, baisse de stimulation.",
        "Si blessure, danger ou peur de perdre le contrôle: appelle une aide réelle maintenant."
      ]
    : nutritionDomain
      ? [
          "Arrête les changements alimentaires improvisés.",
          "Note durée, appétit, eau, vomissements, selles, énergie et poids si disponible.",
          "Si refus de manger, douleur, perte de poids ou symptôme soudain: vétérinaire."
        ]
      : [
          "Mets de la distance entre l'animal et toute personne exposée.",
          "Ne punis pas le signal d'alerte et ne force pas le contact.",
          "Si douleur, morsure, changement soudain ou enfant impliqué: vétérinaire/professionnel."
        ];

  return {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    title: "Priorité sécurité",
    scenarioId: scenario.id,
    domain: scenario.domain,
    method: "GARDE-FOU",
    alert: true,
    summary: `Signal prioritaire détecté (${kind}). La réponse éducative passe après la sécurité.`,
    now,
    phrase: childDomain
      ? "Stop. Je sécurise d'abord. On reparlera quand tout le monde sera calme."
      : animalDomain
        ? "Stop. Je sécurise d'abord. Je ne teste pas, je n'aggrave pas."
        : "Stop. Je vérifie la santé avant de chercher une solution alimentaire.",
    avoid: [
      "minimiser un danger immédiat",
      "punir un signal de douleur, peur ou détresse",
      "chercher un diagnostic dans EduCalm"
    ],
    plan: [
      "Maintenant: sécuriser et empêcher la répétition.",
      "Dans l'heure: noter faits concrets, durée, déclencheur et signes associés.",
      "Aujourd'hui: contacter le professionnel adapté si le signal est soudain, dangereux ou médical.",
      "Ensuite: revenir à un plan éducatif seulement quand le risque est contrôlé."
    ],
    pro: "EduCalm ne remplace pas médecin, vétérinaire, psychologue, éducateur ou urgence.",
    source: "safety",
    meta: { context, profile, intensity, details, risks }
  };
}

function buildPlan({ scenario, context, profile, intensity, details, risks }) {
  const riskKind = hardRiskKind(risks);
  if (riskKind) {
    return buildSafetyPlan(scenario, context, profile, intensity, details, risks, riskKind);
  }

  const intensityText =
    intensity >= 5
      ? "Tu es proche de craquer: réduis stimulation, mots et durée de scène."
      : intensity >= 4
        ? "Priorité: raccourcir la scène et éviter l'escalade."
        : "La situation est travaillable avec une règle simple et répétée.";

  return {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    title: scenario.label,
    scenarioId: scenario.id,
    domain: scenario.domain,
    method: scenario.method,
    alert: false,
    summary: `${scenario.problem} Tension probable: ${scenario.tension}. ${intensityText}`,
    now: scenario.now,
    phrase: scenario.phrase,
    avoid: scenario.avoid,
    plan: scenario.plan,
    pro: scenario.pro,
    source: scenario.source,
    meta: { context, profile, intensity, details, risks }
  };
}

function planToText(plan) {
  return [
    `EduCalm - ${plan.title}`,
    `Univers: ${domainLabels[plan.domain] ?? plan.domain} / Méthode: ${plan.method}`,
    "",
    `Résumé: ${plan.summary}`,
    "",
    "Maintenant:",
    ...plan.now.map((item) => `- ${item}`),
    "",
    `Phrase: ${plan.phrase}`,
    "",
    "À éviter:",
    ...plan.avoid.map((item) => `- ${item}`),
    "",
    "Plan:",
    ...plan.plan.map((item) => `- ${item}`),
    "",
    `Escalade pro: ${plan.pro}`,
    `Source interne: ${sources[plan.source] ?? sources.safety}`
  ].join("\n");
}

function renderPlan(plan) {
  state.currentPlan = plan;
  resultPanel.innerHTML = `
    <div class="result-header ${plan.alert ? "is-alert" : ""}">
      <p class="eyebrow">${plan.alert ? "Garde-fou activé" : "Réponse structurée"}</p>
      <h3>${escapeHtml(plan.title)}</h3>
      <p>${escapeHtml(plan.summary)}</p>
      <div class="badge-row">
        <span class="badge">${escapeHtml(domainLabels[plan.domain] ?? plan.domain)}</span>
        <span class="badge">${escapeHtml(plan.method)}</span>
        <span class="badge">${escapeHtml(plan.meta.profile)}</span>
        <span class="badge ${plan.meta.intensity >= 4 ? "alert" : ""}">intensité ${plan.meta.intensity}/5</span>
      </div>
    </div>
    <section class="result-section">
      <h4>Quoi faire maintenant</h4>
      ${listItems(plan.now)}
    </section>
    <section class="result-section">
      <h4>Phrase exacte</h4>
      <div class="phrase-box">${escapeHtml(plan.phrase)}</div>
    </section>
    <section class="result-section">
      <h4>À éviter</h4>
      ${listItems(plan.avoid)}
    </section>
    <section class="result-section">
      <h4>Plan concret</h4>
      ${listItems(plan.plan)}
    </section>
    <section class="result-section is-safety">
      <h4>Quand escalader</h4>
      <p>${escapeHtml(plan.pro)}</p>
      <p class="source-line">${escapeHtml(sources[plan.source] ?? sources.safety)}</p>
    </section>
    <div class="result-actions">
      <button class="submit-button" type="button" data-action="save-plan">Sauvegarder</button>
      <button class="secondary-button" type="button" data-action="copy-plan">Copier</button>
    </div>
  `;
}

function ensureLibraryFilters() {
  if (document.querySelector(".domain-filter-bar")) return;
  const bar = document.createElement("div");
  bar.className = "domain-filter-bar";
  bar.innerHTML = Object.entries(domainLabels)
    .map(
      ([value, label]) =>
        `<button class="filter-pill ${value === "all" ? "is-active" : ""}" type="button" data-library-domain="${value}">${label}</button>`
    )
    .join("");
  libraryGrid.before(bar);
  bar.addEventListener("click", (event) => {
    const button = event.target.closest("[data-library-domain]");
    if (!button) return;
    state.libraryDomain = button.dataset.libraryDomain;
    bar.querySelectorAll(".filter-pill").forEach((item) => {
      item.classList.toggle("is-active", item === button);
    });
    renderLibrary(librarySearch.value);
  });
}

function renderLibrary(filter = "") {
  ensureLibraryFilters();
  const query = filter.trim().toLowerCase();
  const items = scenarios.filter((scenario) => {
    const domainMatch = state.libraryDomain === "all" || scenario.domain === state.libraryDomain;
    const text = `${scenario.label} ${scenario.problem} ${scenario.tension} ${scenario.category} ${scenario.method}`.toLowerCase();
    return domainMatch && text.includes(query);
  });

  libraryGrid.innerHTML = `
    <p class="scenario-count">${items.length} fiche${items.length > 1 ? "s" : ""} affichée${items.length > 1 ? "s" : ""}</p>
    ${items
      .map(
        (scenario) => `
          <article class="situation-card">
            <span class="method-note">${escapeHtml(scenario.method)} · ${escapeHtml(domainLabels[scenario.domain])}</span>
            <h3>${escapeHtml(scenario.label)}</h3>
            <p>${escapeHtml(scenario.problem)}</p>
            <div class="badge-row">
              <span class="badge">${escapeHtml(scenario.category)}</span>
              <span class="badge">plan concret</span>
            </div>
            <p class="source-line">${escapeHtml(sources[scenario.source] ?? sources.safety)}</p>
            <div class="card-actions">
              <button class="small-button" type="button" data-load-scenario="${scenario.id}">Utiliser</button>
            </div>
          </article>
        `
      )
      .join("")}
  `;
}

function renderSaved() {
  const plans = getSavedPlans();
  if (!plans.length) {
    savedGrid.innerHTML = `
      <article class="saved-card">
        <h3>Aucune situation sauvegardée</h3>
        <p>Génère une réponse puis sauvegarde-la pour simuler la mémoire produit.</p>
      </article>
    `;
    renderMetrics();
    return;
  }

  savedGrid.innerHTML = plans
    .map(
      (plan) => `
        <article class="saved-card">
          <h3>${escapeHtml(plan.title)}</h3>
          <p>${new Date(plan.createdAt).toLocaleString("fr-FR")} - ${escapeHtml(plan.method)} - intensité ${plan.meta.intensity}/5</p>
          <div class="card-actions">
            <button class="small-button" type="button" data-open-plan="${plan.id}">Ouvrir</button>
            <button class="small-button" type="button" data-delete-plan="${plan.id}">Supprimer</button>
          </div>
        </article>
      `
    )
    .join("");
  renderMetrics();
}

function renderMetrics() {
  const metrics = getMetrics();
  const saved = getSavedPlans();
  const intents = readJson(storageKeys.intents, []);
  document.querySelector("#metricPlans").textContent = metrics.plans ?? 0;
  document.querySelector("#metricIntents").textContent = intents.length || metrics.intents || 0;
  document.querySelector("#metricSaved").textContent = saved.length;
}

function saveCurrentPlan() {
  if (!state.currentPlan) return;
  const plans = getSavedPlans();
  const next = [state.currentPlan, ...plans.filter((plan) => plan.id !== state.currentPlan.id)].slice(0, 40);
  writeJson(storageKeys.plans, next);
  renderSaved();
}

async function copyText(text, successMessage = "Copié.") {
  try {
    await navigator.clipboard.writeText(text);
    return successMessage;
  } catch {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.append(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    return successMessage;
  }
}

function selectTab(tabName) {
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.classList.toggle("is-active", tab.dataset.tab === tabName);
  });
  document.querySelectorAll(".tab-panel").forEach((panel) => {
    panel.classList.toggle("is-active", panel.id === `panel-${tabName}`);
  });
}

function triggerPanicMode() {
  clearInterval(state.panicTimer);
  state.panicRemaining = 30;
  const domain = domainSelect?.value === "all" ? "foyer" : domainSelect?.value || "foyer";
  const plan = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    title: "Mode urgence 30 secondes",
    scenarioId: "panic",
    domain,
    method: "URGENCE",
    alert: false,
    summary: "Objectif: éviter une réaction disproportionnée avant de traiter le comportement.",
    now: [
      "Éloigne-toi d'un pas si la sécurité le permet.",
      "Baisse le volume et donne une seule consigne courte.",
      "Attends 30 secondes avant de chercher une leçon, une punition ou une explication."
    ],
    phrase: "Stop. Je fais une pause. Je reprends quand je peux être calme.",
    avoid: [
      "crier plusieurs consignes",
      "attraper sous colère",
      "punir pour soulager ta tension"
    ],
    plan: [
      "Après 30 secondes: choisis la fiche exacte.",
      "Ce soir: note le déclencheur et ce qui a aidé à redescendre.",
      "Demain: prépare l'environnement avant le moment difficile."
    ],
    pro: "Si tu as peur de faire mal ou de perdre le contrôle, éloigne-toi et appelle une personne réelle.",
    source: "safety",
    meta: {
      context: "urgence",
      profile: profileSelect.value,
      intensity: 5,
      details: "",
      risks: []
    }
  };
  renderPlan(plan);

  const header = resultPanel.querySelector(".result-header p");
  state.panicTimer = setInterval(() => {
    state.panicRemaining -= 1;
    if (state.panicRemaining <= 0) {
      clearInterval(state.panicTimer);
      header.textContent = "Pause terminée";
      return;
    }
    header.textContent = `Respire encore ${state.panicRemaining}s`;
  }, 1000);
}

function initialize() {
  injectEnhancedStyles();
  enhanceCopy();
  enhanceForm();
  updateScenarioOptions();
  renderLibrary();
  renderSaved();
  renderMetrics();
}

calmForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const scenario = scenarios.find((item) => item.id === scenarioSelect.value) ?? filteredScenarios()[0] ?? scenarios[0];
  const plan = buildPlan({
    scenario,
    context: contextSelect.value,
    profile: profileSelect.value,
    intensity: Number(intensityRange.value),
    details: detailsInput.value.trim(),
    risks: getRisks()
  });
  const metrics = getMetrics();
  setMetrics({ ...metrics, plans: (metrics.plans ?? 0) + 1 });
  renderPlan(plan);
});

document.querySelector("#resetFormButton").addEventListener("click", () => {
  calmForm.reset();
  updateScenarioOptions();
  intensityValue.textContent = "3";
  resultPanel.innerHTML = `
    <div class="empty-state">
      <h3>Ta réponse apparaîtra ici.</h3>
      <p>Le format reste court, mais les fiches sont maintenant plus spécialisées.</p>
    </div>
  `;
  state.currentPlan = null;
});

document.querySelector("#panicButton").addEventListener("click", () => {
  selectTab("tool");
  triggerPanicMode();
});

document.querySelector("#repeatButton").addEventListener("click", () => {
  selectTab("tool");
  scenarioSelect.focus();
});

intensityRange.addEventListener("input", () => {
  intensityValue.textContent = intensityRange.value;
});


document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => selectTab(tab.dataset.tab));
});

resultPanel.addEventListener("click", async (event) => {
  const action = event.target.dataset.action;
  if (!action) return;

  if (action === "save-plan") {
    saveCurrentPlan();
    event.target.textContent = "Sauvegardé";
  }

  if (action === "copy-plan" && state.currentPlan) {
    event.target.textContent = await copyText(planToText(state.currentPlan));
  }
});

libraryGrid.addEventListener("click", (event) => {
  const scenarioId = event.target.dataset.loadScenario;
  if (!scenarioId) return;
  const scenario = scenarios.find((item) => item.id === scenarioId);
  if (!scenario) return;
  domainSelect.value = scenario.domain;
  updateScenarioOptions();
  scenarioSelect.value = scenarioId;
  selectTab("tool");
  scenarioSelect.focus();
});

librarySearch.addEventListener("input", () => renderLibrary(librarySearch.value));

savedGrid.addEventListener("click", (event) => {
  const openId = event.target.dataset.openPlan;
  const deleteId = event.target.dataset.deletePlan;
  const plans = getSavedPlans();

  if (openId) {
    const plan = plans.find((item) => item.id === openId);
    if (plan) {
      selectTab("tool");
      renderPlan(plan);
    }
  }

  if (deleteId) {
    writeJson(
      storageKeys.plans,
      plans.filter((plan) => plan.id !== deleteId)
    );
    renderSaved();
  }
});

document.querySelector("#exportButton").addEventListener("click", async () => {
  const plans = getSavedPlans();
  const text = plans.length ? plans.map(planToText).join("\n\n---\n\n") : "Aucun historique EduCalm.";
  const message = await copyText(text, "Historique copié.");
  document.querySelector("#exportButton").textContent = message;
});

document.querySelector("#intentButton").addEventListener("click", () => {
  const intents = readJson(storageKeys.intents, []);
  intents.push({
    id: crypto.randomUUID(),
    email: emailInput.value.trim(),
    offer: "pack-calme-7-jours-4-90",
    createdAt: new Date().toISOString()
  });
  writeJson(storageKeys.intents, intents);
  const metrics = getMetrics();
  setMetrics({ ...metrics, intents: intents.length });
  intentMessage.textContent = "Signal enregistré localement. Sur site public, ce clic doit aller vers Stripe Payment Link.";
  emailInput.value = "";
});

document.querySelector("#clearDataButton").addEventListener("click", () => {
  if (!confirm("Effacer l'historique et les signaux locaux EduCalm ?")) return;
  Object.values(storageKeys).forEach((key) => localStorage.removeItem(key));
  renderSaved();
  renderMetrics();
  intentMessage.textContent = "Données locales effacées.";
});

document.querySelectorAll("[data-jump-tab]").forEach((button) => {
  button.addEventListener("click", () => selectTab(button.dataset.jumpTab));
});

initialize();

