import { Download, FileText, ArrowUpRight } from 'lucide-react';
import { useSite } from '../context/SiteContext';
import { Reveal } from '../components/Reveal';

export function CVPage() {
  const { locale } = useSite();
  const fr = locale === 'fr';
  return <main id="main-content" className="inner-page cv-page">
    <section className="page-hero container"><p className="eyebrow"><span className="eyebrow-dot"/>{fr ? 'DOCUMENT PROFESSIONNEL' : 'PROFESSIONAL DOCUMENT'}</p><h1 className="page-title">{fr ? <>Mon parcours,<br/><span>en un document.</span></> : <>My experience,<br/><span>in one document.</span></>}</h1><p className="page-lead">{fr ? 'Téléchargez mon CV général en français ou en anglais. Il présente mon parcours, mes compétences techniques et une sélection de projets.' : 'Download my general CV in French or English. It summarizes my background, technical skills and selected projects.'}</p><div className="page-hero-bottom"><span>FRANCK GUEKEU / CV</span><span>PDF · 1 PAGE · 2026</span></div></section>
    <section className="container cv-download-grid">
      <Reveal><article className="cv-download-card"><div className="cv-file-icon"><FileText size={30}/><span>FR</span></div><p className="eyebrow">VERSION FRANÇAISE</p><h2>CV — Français</h2><p>{fr ? 'Profil Full-Stack, IA et automatisation, expériences et projets sélectionnés.' : 'Full-Stack, AI and automation profile, experience and selected projects.'}</p><a className="button button-primary" href="/cv/CV_Franck_Guekeu_FR.pdf" download><Download size={16}/>{fr ? 'Télécharger le PDF' : 'Download PDF'}</a></article></Reveal>
      <Reveal delay={0.12}><article className="cv-download-card"><div className="cv-file-icon"><FileText size={30}/><span>EN</span></div><p className="eyebrow">ENGLISH VERSION</p><h2>CV — English</h2><p>{fr ? 'Version anglaise destinée aux candidatures internationales et aux collaborations à distance.' : 'English version for international applications and remote collaborations.'}</p><a className="button button-ghost" href="/cv/CV_Franck_Guekeu_EN.pdf" download><Download size={16}/>{fr ? 'Télécharger le PDF' : 'Download PDF'}</a></article></Reveal>
    </section>
    <section className="container cv-note"><p className="eyebrow">{fr ? 'TRANSPARENCE' : 'TRANSPARENCY'}</p><p>{fr ? 'Le parcours universitaire en physique est indiqué comme interrompu au niveau Licence II. Aucune Licence en informatique n’est revendiquée. Les compétences sont présentées comme acquises par apprentissage autodidacte et pratique de projets.' : 'Physics studies are stated as discontinued at second-year undergraduate level. No computer science degree is claimed. Technical skills are described as self-directed learning and hands-on project experience.'}</p><a className="text-link" href="mailto:vfranck364@gmail.com">{fr ? 'Me contacter au sujet de mon parcours' : 'Contact me about my background'} <ArrowUpRight size={16}/></a></section>
  </main>;
}
