# Brief pour les futures instances Claude / Cowork

Document à lire AVANT toute intervention sur ce repo. Il consigne le contexte, les décisions déjà prises, les préférences de l'utilisateur et les pièges à éviter. Si tu es une instance Claude ouvrant ce projet, ce fichier est ta source de vérité.

---

## Qui est l'utilisateur

Guillaume Pakula, président de Projet Celsius (cabinet de conseil climat/carbone à Paris). TDAH + HPI diagnostiqués à 30 ans, profil ENTP. Implications opérationnelles pour toi :

- Pensée arborescente très rapide, raisonnement par analogie, exigence haute sur la qualité des idées. Le contenu générique ou tiède est le déclencheur de désengagement n°1.
- Briefs oraux non linéaires, avec bifurcations et retours en arrière. Ton job : structurer silencieusement le désordre. Ne JAMAIS lui demander de reformuler ou de te livrer un brief propre.
- Il préfère être bousculé que flatté. Challenge-le quand c'est pertinent. Propose des contre-arguments. Sois force de proposition, pas exécutant.
- Standard minimum = livrable facturable à un client exigeant. Si tu ne signerais pas le résultat devant un comex, retravaille avant d'envoyer.
- Ton chaleureux, taquin, intellectuellement dense. Français de préférence.
- Préférence typographique : **jamais de tirets cadratins**. Utiliser des tirets simples `-` ou rien.
- Quand la demande est en phase brainstorming, NE PAS partir en exécution. Rester dans l'exploration narrative / conceptuelle, proposer plusieurs angles, attendre qu'il tranche. Quand il dit "fais une V1 titanesque", là tu produis.

---

## Le contexte du cours

Cours **"Mesurer l'empreinte carbone de la communication"** donné par Guillaume à l'École Supérieure de Publicité (ESP), pour des M2 RSE & Communication responsable (~20 étudiantes, en alternance, mix annonceurs / agences).

12h au total réparties en 3 séances de 4h :

- **Séance 1 (30 avril 2026)** : "Compter le carbone" - vocabulaire, ordres de grandeur, scopes, jeu Carboniq, mini-TP cartographier une agence. **Déjà donnée.**
- **Séance 2 (21 mai 2026)** : "Calculer le bilan carbone" - **objet de ce repo.**
- **Séance 3 (28 mai 2026)** : "Piloter la transition" - lire un BC, démonter le greenwashing, AdGreen / Scope3, cadre juridique (Climat-Résilience, Green Claims), atelier plan de transition.

Public à profil non-ingénieur. Guillaume est habitué à enseigner à des ingés (ESPCI, IP Paris, Centrale Méditerranée), donc le défi pédagogique de la S2 était d'adapter la mécanique calculatoire à des M2 comm SANS dégrader la portée pédagogique.

---

## Le concept retenu pour la Séance 2

Après brainstorming (5+ allers-retours), on a tranché ce dispositif :

**Les étudiantes inventent leur propre marque de mode/beauté/lifestyle.** Elles renseignent 6 choix stratégiques (catégorie, prix, ambition, lieu show, taille, stratégie media) plus une couche narrative libre (nom, tagline, mission). Un calculateur Google Sheet (ou ici l'artefact HTML) prend leurs choix et génère un dossier de production cohérent avec leur positionnement. Elles calculent alors le bilan carbone de la "saison 1" (12 mois) sur 6 postes :

1. Énergie et scénographie du show
2. Transport des invités
3. Fabrication de la collection
4. Production de la campagne publicitaire
5. Diffusion media
6. Fin de vie de la collection

3 chasses méthodo dans le tableur (2 distances + 1 FE matière) pour ne pas qu'elles soient passives. Puis elles construisent 3 leviers de réduction + un message à porter en direction, et pitchent 3 minutes par équipe.

---

## Les arbitrages déjà tranchés (ne pas y revenir sans raison)

- **Périmètre temporel : Saison 1 (12 mois)**. Pas BC du défilé seul, pas BC marque 5 ans.
- **Pas d'évaluation formelle**. C'est un TP, pas un examen. Pas de notation chiffrée à mettre en place.
- **Pas de cartes événement / rebondissements en cours de TP**. Pas le temps de complexifier, ça reste un dispositif simple.
- **Granularité tableur : 15-20 lignes**. Avec FE pré-remplis, quantités à entrer par les étudiantes.
- **Ton sincère avec second degré ponctuel** (pas pur ironique style France Bolloré).
- **Guillaume joue le rôle de "Projet Celsius"** dans la narration (la lettre d'ouverture est signée de lui).
- **Pas de cas centré sur "agence de comm" abstraite**. Le persona "Tonton Émile Communication" du draft initial est mort, remplacé par les marques que les étudiantes inventent.

---

## Les sources et la méthode carbone

- **Facteurs d'émission** : ADEME Base Empreinte 2024 en priorité, AdGreen et Carbon'Clap pour la production audiovisuelle, BL Évolution + SRI pour la pub digitale, adOOHcc pour l'OOH.
- **Cadre** : Bilan Carbone ABC + GHG Protocol.
- **Simplifications assumées** documentées dans `documentation-FE-matrice.md` (pas de RF avion, pas de scope 3 induit, etc.).
- Le but n'est pas l'exhaustivité, c'est l'acquisition de la mécanique de raisonnement par des M2 comm.

---

## Ce qui peut venir ensuite (chantiers ouverts)

- **Itération V1.1 de l'artefact** : Guillaume va tester sur 2-3 combinaisons de marques, possibles ajustements sur les ordres de grandeur ou la sémantique du dossier de production.
- **Phase 2 (dossier de prod) plus théâtralisée** ? Idée mise en option : ajouter des mails fictifs de production, extraits de devis pour augmenter la sensation "agence". À discuter selon le retour de Guillaume.
- **Export PDF par équipe** : actuellement la phase 4 n'a pas de bouton export. Hypothèse de polish ultérieur.
- **Préparation Séance 3** : pour piloter la transition, démonter le greenwashing, présenter AdGreen / Scope3 / Impact+ / AdNetZero / EcoProd, cadre juridique. La biblio est dans la page Notion `Sources empreinte pub digitale (J2 + J3)`.
- **Devoir entre S2 et S3** déjà cadré : les étudiantes doivent transposer la démarche sur un objet de leur alternance (campagne, événement, projet client), 3 leviers concrets, à débriefer en ouverture de S3.

---

## Pour repartir efficacement avec Guillaume

Si tu n'as pas le contexte oral d'une session de travail :

1. **Lire ce fichier en entier avant tout** (tu es ici).
2. Lire l'artefact `bilan-carbone-marque-S2.html` (UI + logique de génération + calcul).
3. Lire les `notes-animation-S2.md` (déroulé minuté du cours, points de vigilance pédagogiques).
4. Lire la `documentation-FE-matrice.md` (anti-sèche méthodo : FE sourcés + matrice de génération input marque → activité).
5. Si besoin, exécuter `test-calculs.js` (Node) pour re-tester les ordres de grandeur sur 4 marques témoins (luxe niche / mid EU paid / mass global / parfum premium).
6. La page Notion parent du cours est consultable via le MCP Notion : chercher "École Supérieure de Publicité (ESP)".

**Et surtout : ne pas redémarrer un brainstorming sur ce qui a déjà été tranché.** Les arbitrages au-dessus sont stables. Si Guillaume veut revenir dessus, c'est lui qui le dit.

---

*Brief consigné par Claude (Cowork) - mai 2026 - itéré avec Guillaume en session live.*
