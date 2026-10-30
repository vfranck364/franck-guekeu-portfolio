# Franck GUEKEU — Portfolio 1.2.3

Portfolio professionnel bilingue (français / anglais), construit avec React, TypeScript, Vite, GSAP/ScrollTrigger et Motion.

## Installation

Prérequis : Node.js 20.19+ (Node.js 22 recommandé) et npm 10+.

```bash
npm install
npm run dev
```

Vite démarre sur `http://localhost:5173`.

## Vérification et production

```bash
npm run typecheck
npm run build
npm run preview
```

Le build de production est généré dans `dist/`.

## Architecture

```text
src/
  components/       # navigation, footer, cartes, transition, champ d’étoiles
  context/          # langue et thème
  data/             # projets et contenus FR/EN
  hooks/            # intégration GSAP/ScrollTrigger
  pages/            # pages secondaires, détails et téléchargements CV
  sections/home/    # landing page et six scènes cinématiques
  styles/           # styles globaux, composants et pages
public/
  cv/               # CV général français et anglais
  images/           # portraits, logos et créations des projets
```

## Expérience visuelle

- Les six scènes de la landing page sont épinglées pendant leur séquence d’animation.
- Le défilement vertical pilote la progression des timelines GSAP ; le retour en arrière inverse les animations.
- La scène « projets sélectionnés » fait défiler horizontalement les projets au moyen du scroll vertical.
- Un champ d’étoiles de différentes profondeurs réagit au pointeur, au toucher et au défilement.
- Les mouvements sont réduits lorsque `prefers-reduced-motion` est activé.
- Les pages internes utilisent également des transitions et animations au scroll.

## Projets et médias

- Les visuels fournis pour Chronos, WapiSend et HAIR sont rangés dans leurs dossiers respectifs et présentés dans leurs fiches.
- Le portrait HAIR Human × AI est utilisé dans la navigation, la page À propos et le pied de page ; le portrait professionnel est conservé dans la scène d’ouverture.
- WapiSend et Chronos sont mis en avant avant HAIR et TEDSAI Complex.
- Les fiches COA sont présentées comme des collaborations avec l’équipe, à un niveau général, et placées après les projets principaux.
- EcoPark a été retiré à la demande de Franck.
- Chronos est présenté comme un projet en développement.

## CV téléchargeables

La page `/cv`, la page À propos et la scène d’accueil donnent accès aux deux CV généraux :

- `public/cv/CV_Franck_Guekeu_FR.pdf`
- `public/cv/CV_Franck_Guekeu_EN.pdf`

Le parcours indique les études de physique à l’Université de Yaoundé I jusqu’au niveau Licence II, interrompues. Aucun diplôme informatique n’est revendiqué. Les compétences informatiques sont présentées comme acquises par apprentissage autodidacte et pratique de projets.

## Confidentialité et exactitude

La fiche COA reste volontairement générale. Ne publier aucune capture, donnée, information médicale, clé, secret ou information interne sans autorisation. Le dépôt COA précédemment observé doit faire l’objet d’une vérification de sécurité indépendante avant toute mise en avant.

Les descriptions de projets n’inventent pas de métriques commerciales ou d’utilisateurs. Les technologies listées correspondent à celles rencontrées ou utilisées sur les projets ; elles ne constituent pas des certifications.

## Déploiement

- Build command : `npm run build`
- Output directory : `dist`
- Framework : Vite
- Netlify : le fichier `public/_redirects` fournit le fallback SPA vers `index.html`.

Le formulaire de contact ouvre le client email du visiteur avec un message prérempli ; aucune donnée n’est enregistrée. La langue et le thème sont mémorisés dans `localStorage`.


## Version 1.2.1 — stabilité des animations et thème clair

- Les scènes de la landing page utilisent désormais le mode de pinning natif de ScrollTrigger et un scrub directement lié au scroll.
- Les animations Motion/Reveal imbriquées ont été retirées des éléments déjà pilotés par GSAP afin d'éviter les doubles transformations.
- Les effets de flou coûteux ont été remplacés par des transitions de position et d'opacité.
- Le rafraîchissement des mesures ScrollTrigger est différé jusqu'au chargement des polices et n'est exécuté qu'une fois.
- Le rendu du fond étoilé est limité à 30 images/seconde et son coût graphique est réduit, particulièrement sur mobile.
- Le thème clair bénéficie d'une palette plus contrastée et de corrections ciblées sur l'accueil, les boutons, les cartes CV et les éléments de contenu.


## Version 1.2.2 — coordonnées téléphoniques

- Les trois numéros de téléphone sont affichés dans la page Contact et dans le pied de page.
- Chaque numéro possède un lien `tel:` pour lancer un appel depuis un téléphone compatible.
- Le lien WhatsApp est réservé au numéro confirmé comme WhatsApp : `+237 683 12 16 54`.
- Un accès rapide à l’appel est disponible dans l’en-tête sur grand écran et dans le menu mobile.


## Version 1.2.3 — correction du typage des contacts

- Le type `PhoneContact` définit explicitement `whatsapp` comme propriété facultative.
- La page Contact peut accéder au lien WhatsApp sans erreur TypeScript pour les numéros qui ne disposent que d'un lien d'appel.
- Le lien WhatsApp reste limité au numéro confirmé.
