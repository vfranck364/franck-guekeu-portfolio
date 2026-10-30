export type Locale = 'fr' | 'en';
export type ProjectCategory = 'SaaS' | 'Healthcare' | 'Web' | 'Product' | 'AI';

export interface Project {
  slug: string;
  name: string;
  eyebrow: string;
  category: ProjectCategory;
  year: string;
  status: 'live' | 'building' | 'prototype' | 'case-study';
  featured: boolean;
  accent: string;
  tags: string[];
  summary: Record<Locale, string>;
  challenge: Record<Locale, string>;
  contribution: Record<Locale, string[]>;
  outcome: Record<Locale, string>;
  links: { label: string; href: string; external?: boolean }[];
  visibility: 'public' | 'limited';
  visual: 'wapisend' | 'coa' | 'tedsai' | 'chronos' | 'hair';
}

export const projects: Project[] = [
  {
    slug: 'wapisend', name: 'WapiSend', eyebrow: 'MESSAGING · AUTOMATION · AI', category: 'SaaS', year: '2026', status: 'live', featured: true,
    accent: '#21d66b', tags: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Redis', 'BullMQ', 'Socket.IO', 'Baileys', 'RAG'],
    summary: {
      fr: 'Une plateforme SaaS de marketing WhatsApp pensée pour orchestrer les campagnes, automatiser les échanges et rapprocher les entreprises de leurs audiences.',
      en: 'A WhatsApp marketing SaaS platform designed to orchestrate campaigns, automate conversations and bring businesses closer to their audiences.',
    },
    challenge: {
      fr: 'Construire une expérience centralisée pour gérer les campagnes de communication, les conversations et des automatisations assistées par IA, tout en tenant compte des traitements asynchrones et du temps réel.',
      en: 'Build a centralized experience for managing communication campaigns, conversations and AI-assisted automation while accounting for asynchronous processing and real-time updates.',
    },
    contribution: {
      fr: ['Conception et évolution d’une plateforme SaaS multi-utilisateur.', 'Travail sur les campagnes programmées et les traitements en arrière-plan avec Redis et BullMQ.', 'Intégration de WhatsApp via Baileys et de fonctionnalités temps réel avec Socket.IO.', 'Exploration et intégration de fonctionnalités de chatbot IA et de RAG.', 'Participation à la fiabilisation du backend et à l’amélioration des performances.'],
      en: ['Designed and evolved a multi-user SaaS platform.', 'Worked on scheduled campaigns and background jobs with Redis and BullMQ.', 'Integrated WhatsApp through Baileys and real-time features with Socket.IO.', 'Explored and integrated AI chatbot and RAG capabilities.', 'Contributed to backend reliability and performance improvements.'],
    },
    outcome: {
      fr: 'Le projet rassemble des problématiques produit, backend, temps réel, automatisation et IA dans une seule application. La disponibilité et les métriques commerciales devront être confirmées avant publication de chiffres.',
      en: 'The project brings product, backend, real-time, automation and AI challenges into one application. Availability and commercial metrics should be verified before publishing numbers.',
    },
    links: [{ label: 'Ouvrir WapiSend', href: 'https://wapisend.vercel.app', external: true }], visibility: 'public', visual: 'wapisend',
  },
  {
    slug: 'coa-platform', name: 'COA Platform', eyebrow: 'DIGITAL HEALTH · PLATFORM', category: 'Healthcare', year: '2026', status: 'case-study', featured: false,
    accent: '#9a7be8', tags: ['React', 'Vue', 'Node.js', 'Express', 'Prisma', 'PostgreSQL', 'JWT', 'RBAC', 'Testing'],
    summary: {
      fr: 'Une plateforme numérique structurée autour de plusieurs expériences dédiées aux patients, aux équipes et aux professionnels de santé.',
      en: 'A digital platform built around dedicated experiences for patients, staff and healthcare providers.',
    },
    challenge: {
      fr: 'Contribuer à un environnement logiciel multi-applications où la cohérence des données, les droits d’accès, la fiabilité et la sécurité sont essentiels.',
      en: 'Contribute to a multi-application software environment where data consistency, access control, reliability and security are essential.',
    },
    contribution: {
      fr: ['Participation à des travaux de développement et de remédiation technique.', 'Contribution à la sécurisation des accès et au contrôle des rôles.', 'Travail sur la qualité logicielle, les tests et la fiabilité de modules.', 'Collaboration autour d’un écosystème composé de plusieurs applications.'],
      en: ['Contributed to development and technical remediation work.', 'Worked on access security and role-based permissions.', 'Contributed to software quality, testing and module reliability.', 'Collaborated on an ecosystem composed of multiple applications.'],
    },
    outcome: {
      fr: 'Cette étude de cas reste volontairement générale. Les détails d’architecture, captures, données et éléments internes ne seront publiés qu’après validation des autorisations.',
      en: 'This case study is intentionally high-level. Architecture details, screenshots, data and internal information will only be published after authorization is confirmed.',
    },
    links: [{ label: 'Site officiel COA', href: 'https://coa-platform.com', external: true }, { label: 'Présentation patients', href: 'https://coa-platform.com/fr/patients/', external: true }, { label: 'Présentation professionnels', href: 'https://coa-platform.com/fr/providers/', external: true }], visibility: 'limited', visual: 'coa',
  },
  {
    slug: 'coa-patient-app', name: 'COA · Patient App', eyebrow: 'PATIENT EXPERIENCE', category: 'Healthcare', year: '2026', status: 'case-study', featured: false,
    accent: '#9a7be8', tags: ['Product UI', 'Web Application', 'Healthcare'],
    summary: { fr: 'L’expérience numérique destinée aux patients au sein de l’écosystème COA.', en: 'The patient-facing digital experience within the COA ecosystem.' },
    challenge: { fr: 'Présenter une expérience claire et accessible dans un contexte où la confiance, la confidentialité et la simplicité sont essentielles.', en: 'Present a clear and accessible experience in a context where trust, privacy and simplicity are essential.' },
    contribution: { fr: ['Collaboration avec l’équipe COA sur l’écosystème applicatif.', 'Contribution technique à préciser selon les éléments publiables.'], en: ['Collaborated with the COA team across its application ecosystem.', 'Technical contributions to be specified based on publishable information.'] },
    outcome: { fr: 'Les détails fonctionnels et les captures restent à valider avant une présentation publique approfondie.', en: 'Functional details and screenshots remain subject to approval before a more detailed public presentation.' },
    links: [{ label: 'Présentation officielle', href: 'https://coa-platform.com/fr/patients/', external: true }], visibility: 'limited', visual: 'coa',
  },
  {
    slug: 'coa-staff-dashboard', name: 'COA · Staff Dashboard', eyebrow: 'OPERATIONS · STAFF', category: 'Healthcare', year: '2026', status: 'case-study', featured: false,
    accent: '#9a7be8', tags: ['Dashboard', 'RBAC', 'Quality Engineering'],
    summary: { fr: 'Un espace de travail destiné aux équipes et aux opérations de la plateforme COA.', en: 'A workspace designed for teams and operations across the COA platform.' },
    challenge: { fr: 'Contribuer à un environnement de travail fiable, organisé et adapté à des responsabilités différentes.', en: 'Contribute to a reliable, organized workspace adapted to different responsibilities.' },
    contribution: { fr: ['Collaboration avec l’équipe sur des travaux de sécurité et de qualité.', 'Amélioration de modules selon les priorités de développement.'], en: ['Collaborated with the team on security and quality work.', 'Improved modules according to development priorities.'] },
    outcome: { fr: 'Les captures et fonctionnalités détaillées seront ajoutées après vérification des autorisations.', en: 'Screenshots and detailed features will be added after authorization is confirmed.' },
    links: [{ label: 'Site officiel COA', href: 'https://coa-platform.com', external: true }], visibility: 'limited', visual: 'coa',
  },
  {
    slug: 'coa-provider-dashboard', name: 'COA · Provider Dashboard', eyebrow: 'PROFESSIONAL WORKSPACE', category: 'Healthcare', year: '2026', status: 'case-study', featured: false,
    accent: '#9a7be8', tags: ['Dashboard', 'Access Control', 'Web Application'],
    summary: { fr: 'Un espace numérique destiné aux professionnels de santé dans l’écosystème COA.', en: 'A digital workspace for healthcare providers within the COA ecosystem.' },
    challenge: { fr: 'Soutenir des parcours professionnels avec une attention particulière portée aux accès et à la cohérence applicative.', en: 'Support professional workflows with particular attention to access control and application consistency.' },
    contribution: { fr: ['Collaboration avec l’équipe sur des travaux transversaux de la plateforme.', 'Contribution technique à détailler uniquement avec les éléments autorisés.'], en: ['Collaborated with the team on cross-platform work.', 'Technical contributions will be detailed only with approved information.'] },
    outcome: { fr: 'Cette fiche est un repère de portfolio et ne divulgue aucun contenu clinique ou interne.', en: 'This page is a portfolio reference and does not disclose clinical or internal content.' },
    links: [{ label: 'Présentation officielle', href: 'https://coa-platform.com/fr/providers/', external: true }], visibility: 'limited', visual: 'coa',
  },
  {
    slug: 'tedsai-website', name: 'TEDSAI Complex', eyebrow: 'CORPORATE WEBSITE', category: 'Web', year: '2026', status: 'live', featured: true,
    accent: '#e9bd82', tags: ['HTML', 'CSS', 'JavaScript', 'Web Design', 'GitHub'],
    summary: { fr: 'Un site web de présentation pour un écosystème d’activités et de services.', en: 'A corporate website presenting an ecosystem of activities and services.' },
    challenge: { fr: 'Traduire une identité et plusieurs activités en une présence web claire, cohérente et accessible.', en: 'Translate an identity and several activities into a clear, coherent and accessible web presence.' },
    contribution: { fr: ['Participation à la réalisation et à l’évolution du site.', 'Travail sur la structure des pages, les contenus et les ressources web.', 'Contribution à la présence numérique de TEDSAI Complex.'], en: ['Contributed to building and evolving the website.', 'Worked on page structure, content and web assets.', 'Contributed to TEDSAI Complex’s digital presence.'] },
    outcome: { fr: 'Le site est accessible publiquement. Les résultats de trafic ou de conversion ne sont pas documentés ici.', en: 'The website is publicly accessible. Traffic or conversion results are not documented here.' },
    links: [{ label: 'Visiter le site', href: 'https://www.tedsai-complex.com', external: true }, { label: 'Code source', href: 'https://github.com/vfranck364/TEDSAI-website', external: true }], visibility: 'public', visual: 'tedsai',
  },
  {
    slug: 'hair', name: 'HAIR', eyebrow: 'HOME OF AI REVOLUTIONS', category: 'AI', year: '2026', status: 'live', featured: true,
    accent: '#c2a2ff', tags: ['AI', 'Automation', 'Digital Solutions'],
    summary: { fr: 'Une initiative tournée vers les solutions d’intelligence artificielle et l’automatisation.', en: 'An initiative focused on artificial intelligence solutions and automation.' },
    challenge: { fr: 'Explorer comment rendre les technologies IA et les automatisations utiles dans des contextes métiers concrets.', en: 'Explore how AI technologies and automation can be useful in practical business contexts.' },
    contribution: { fr: ['Initiative autour des services et usages de l’IA.', 'Réflexion sur les solutions numériques et l’automatisation.'], en: ['An initiative around AI services and use cases.', 'Exploration of digital solutions and automation.'] },
    outcome: { fr: 'Le site est disponible. Le périmètre exact de tes contributions et l’offre actuelle restent à documenter.', en: 'The website is available. Your exact contributions and the current offering remain to be documented.' },
    links: [{ label: 'Visiter HAIR', href: 'https://hair-fr.netlify.app', external: true }], visibility: 'public', visual: 'hair',
  },
  {
    slug: 'chronos', name: 'Chronos', eyebrow: 'PERSONAL PRODUCT · OFFLINE FIRST', category: 'Product', year: '2026', status: 'building', featured: true,
    accent: '#a987ff', tags: ['HTML', 'CSS', 'JavaScript', 'IndexedDB', 'Offline-first', 'UX'],
    summary: { fr: 'Une application personnelle de planification conçue pour organiser le temps avec souplesse, y compris hors connexion.', en: 'A personal planning application designed to organize time flexibly, including while offline.' },
    challenge: { fr: 'Créer un outil mobile-first personnalisable, sans compte obligatoire, avec persistance locale et gestion avancée des activités.', en: 'Create a customizable, mobile-first tool with no mandatory account, local persistence and advanced activity management.' },
    contribution: { fr: ['Conception du produit et de ses interactions.', 'Réflexion sur le stockage local avec IndexedDB.', 'Travail sur la planification, les récurrences et les notifications.', 'Approche offline-first et expérience mobile.'], en: ['Designed the product and its interactions.', 'Explored local persistence with IndexedDB.', 'Worked on planning, recurrence and notifications.', 'Focused on an offline-first and mobile experience.'] },
    outcome: { fr: 'Projet en développement. Il ne sera pas présenté comme une application finalisée tant que les tests et la publication ne seront pas terminés.', en: 'Work in progress. It will not be presented as a finished application until testing and release are complete.' },
    links: [], visibility: 'public', visual: 'chronos',
  },

];

const projectOrder = ['wapisend', 'chronos', 'hair', 'tedsai-website', 'coa-platform', 'coa-patient-app', 'coa-staff-dashboard', 'coa-provider-dashboard'];
projects.sort((a, b) => projectOrder.indexOf(a.slug) - projectOrder.indexOf(b.slug));
export const featuredProjects = ['wapisend', 'chronos', 'hair', 'tedsai-website'].map((slug) => projects.find((project) => project.slug === slug)).filter((project): project is Project => Boolean(project));
