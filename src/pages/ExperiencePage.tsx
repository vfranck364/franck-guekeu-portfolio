import { ArrowUpRight, BriefcaseBusiness, Code2, Compass } from 'lucide-react';
import { useSite } from '../context/SiteContext';
import { Reveal } from '../components/Reveal';

export function ExperiencePage() {
  const { t, locale } = useSite();
  const icons = [<BriefcaseBusiness size={20}/>, <Code2 size={20}/>];
  return (
    <main id="main-content" className="inner-page experience-page">
      <section className="page-hero container"><p className="eyebrow"><span className="eyebrow-dot"/>{t.experience.kicker}</p><h1 className="page-title">{t.experience.title.split('\n').map((line, index) => <span key={line}>{line}{index === 0 && <br/>}</span>)}</h1><p className="page-lead">{t.experience.lead}</p><div className="page-hero-bottom"><span>WORK / PROJECTS / LEARNING</span><span>PROGRESS OVER TITLES</span></div></section>
      <section className="container experience-list">{t.experience.roles.map((role, index) => <Reveal key={role.company} delay={index * 0.1}><article className="experience-card"><div className="experience-card-index">0{index + 1}</div><div className="experience-card-icon">{icons[index]}</div><div className="experience-card-main"><span className="eyebrow">{role.period}</span><h2>{role.role}</h2><h3>{role.company}</h3><p>{role.text}</p></div><div className="experience-card-status"><span className="status status--case-study">{locale === 'fr' ? 'Expérience' : 'Experience'}</span></div></article></Reveal>)}</section>
      <section className="container working-values"><div><p className="eyebrow"><Compass size={13}/>{t.experience.valuesTitle}</p><h2>{locale === 'fr' ? 'Les principes derrière chaque ligne de code.' : 'The principles behind every line of code.'}</h2></div><div className="values-list">{t.experience.values.map((value, index) => <Reveal key={value} delay={index * 0.05}><div><span>0{index + 1}</span><strong>{value}</strong><ArrowUpRight size={15}/></div></Reveal>)}</div></section>
    </main>
  );
}
