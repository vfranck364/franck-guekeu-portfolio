import { ArrowUpRight, Braces, Cpu, Database, GitBranch, Layers3 } from 'lucide-react';
import { useSite } from '../context/SiteContext';
import { Reveal } from '../components/Reveal';

const groupIcons = [<Braces size={20}/>, <Database size={20}/>, <Cpu size={20}/>, <GitBranch size={20}/>];
const groupNumbers = ['01', '02', '03', '04'];
export function ExpertisePage() {
  const { t, locale } = useSite();
  return (
    <main id="main-content" className="inner-page expertise-page">
      <section className="page-hero container"><p className="eyebrow"><span className="eyebrow-dot"/>{t.expertise.kicker}</p><h1 className="page-title">{t.expertise.title.split('\n').map((line, index) => <span key={line}>{line}{index === 0 && <br/>}</span>)}</h1><p className="page-lead">{t.expertise.lead}</p><div className="page-hero-bottom"><span>STACK / TOOLING / PRACTICE</span><span>EVOLVING SKILLSET</span></div></section>
      <section className="container skills-directory">{t.expertise.groups.map((group, index) => <Reveal key={group.name} delay={index * 0.06}><article className="skill-group"><div className="skill-group-heading"><span className="skill-group-icon">{groupIcons[index]}</span><div><small>{groupNumbers[index]} / 04</small><h2>{group.name}</h2><p>{group.description}</p></div><span className="skill-group-arrow"><ArrowUpRight size={18}/></span></div><div className="skill-list">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div></article></Reveal>)}</section>
      <section className="container expertise-disclaimer"><span>✳</span><p>{t.expertise.disclaimer}</p></section>
      <section className="container stack-note"><div className="stack-note-art"><div><Layers3 size={36}/></div><span>LEARN → BUILD → REFINE</span></div><div><p className="eyebrow">{locale === 'fr' ? 'UNE APPROCHE PRATIQUE' : 'A PRACTICAL APPROACH'}</p><h2>{locale === 'fr' ? 'Les outils sont des moyens. La valeur est dans ce qu’on en fait.' : 'Tools are means. The value is in what we build with them.'}</h2><p>{locale === 'fr' ? 'Je continue à apprendre, à tester et à approfondir mes compétences au fil des produits et des défis rencontrés.' : 'I keep learning, testing and deepening my skills through products and the challenges I encounter.'}</p></div></section>
    </main>
  );
}
