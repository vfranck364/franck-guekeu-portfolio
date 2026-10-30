import { ArrowUpRight, GraduationCap, Lightbulb, MapPin, Languages, Compass, Sparkles } from 'lucide-react';
import { useSite } from '../context/SiteContext';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';

export function AboutPage() {
  const { t, locale } = useSite();
  const about = t.about;
  const icons = [<MapPin size={16}/>, <Languages size={16}/>, <Compass size={16}/>, <Sparkles size={16}/>];
  return (
    <main id="main-content" className="inner-page about-page">
      <section className="page-hero container"><p className="eyebrow"><span className="eyebrow-dot"/>{about.kicker}</p><h1 className="page-title">{about.title.split('\n').map((line, index) => <span key={line}>{line}{index === 0 && <br/>}</span>)}</h1><p className="page-lead">{about.lead}</p><div className="page-hero-bottom"><span>FRANCK GUEKEU / ABOUT</span><span>YAOUNDÉ, CAMEROON</span></div></section>
      <section className="container about-main-grid"><div className="about-monogram-panel"><div className="about-portrait-frame"><img src="/images/profile/franck-hair.webp" alt="Portrait de Franck GUEKEU dans un univers visuel HAIR" onLoad={(event) => { const fallback = event.currentTarget.nextElementSibling as HTMLElement | null; if (fallback) fallback.style.display = 'none'; }} onError={(event) => { event.currentTarget.style.display = 'none'; }} /><div className="about-portrait-fallback"><span>FG</span><small>FRANCK GUEKEU</small></div><i>✳</i></div><div className="about-monogram-caption"><span>INDEPENDENT LEARNING</span><span>·</span><span>CONTINUOUS BUILDING</span></div><div className="about-panel-coordinate">3°52' N / 11°31' E</div></div><div className="about-story"><Reveal><p className="eyebrow">{about.storyTitle}</p><p className="about-large-copy">{about.story}</p></Reveal><Reveal delay={0.1}><div className="about-mindset"><Lightbulb size={21}/><div><h3>{about.mindsetTitle}</h3><p>{about.mindset}</p></div></div></Reveal></div></section>
      <section className="container about-facts">{about.facts.map((fact, index) => <Reveal key={fact.label} delay={index * 0.06}><div className="about-fact"><span>{icons[index]}</span><small>{fact.label}</small><strong>{fact.value}</strong></div></Reveal>)}</section>
      <section className="education-section section-pad"><div className="container"><SectionHeading eyebrow={locale === 'fr' ? 'FORMATION & APPRENTISSAGE' : 'EDUCATION & LEARNING'} title={about.educationTitle}/><div className="education-list">{about.education.map((item, index) => <Reveal key={item.title} delay={index * 0.08}><article className="education-item"><div className="education-date">{item.date}</div><div className="education-content"><span className="education-icon"><GraduationCap size={19}/></span><div><h3>{item.title}</h3><p>{item.text}</p></div></div><span className="education-number">0{index + 1}</span></article></Reveal>)}</div><div className="education-note"><span>✳</span><p>{about.note}</p></div></div></section>
      <section className="container about-cta"><div><p className="eyebrow">{locale === 'fr' ? 'LA SUITE' : 'WHAT’S NEXT'}</p><h2>{locale === 'fr' ? 'Toujours en train d’apprendre. Toujours prêt à construire.' : 'Always learning. Always ready to build.'}</h2></div><div className="about-cta-actions"><a href="mailto:vfranck364@gmail.com" className="button button-primary">{t.nav.contact}<ArrowUpRight size={16}/></a><a href={`/cv/CV_Franck_Guekeu_${locale === 'fr' ? 'FR' : 'EN'}.pdf`} download className="button button-ghost">{locale === 'fr' ? 'Télécharger mon CV' : 'Download my CV'} <ArrowUpRight size={16}/></a></div></section>
    </main>
  );
}
