import { useMemo, useState } from 'react';
import { ArrowUpRight, Filter } from 'lucide-react';
import { projects } from '../data/projects';
import { useSite } from '../context/SiteContext';
import { ProjectCard } from '../components/ProjectCard';
import { Reveal } from '../components/Reveal';

export function ProjectsPage() {
  const { t, locale } = useSite();
  const [filter, setFilter] = useState('all');
  const filters = [
    { key: 'all', label: t.projects.all },
    ...(['SaaS', 'Healthcare', 'Web', 'Product', 'AI'] as const).map((category) => ({ key: category, label: category === 'Healthcare' ? (locale === 'fr' ? 'Santé' : 'Healthcare') : category === 'Product' ? (locale === 'fr' ? 'Produit' : 'Product') : category })),
  ];
  const visible = useMemo(() => filter === 'all' ? projects : projects.filter((project) => project.category === filter), [filter]);
  return (
    <main id="main-content" className="inner-page projects-page">
      <section className="page-hero container">
        <p className="eyebrow"><span className="eyebrow-dot"/>{t.projects.kicker}</p>
        <h1 className="page-title">{t.projects.title.split('\n').map((line, index) => <span key={line}>{line}{index === 0 && <br/>}</span>)}</h1>
        <p className="page-lead">{t.projects.lead}</p>
        <div className="page-hero-bottom"><span>08 / PROJECTS & COLLABORATIONS</span><span>SCROLL TO EXPLORE ↓</span></div>
      </section>
      <section className="container projects-directory">
        <div className="filter-bar"><span className="filter-label"><Filter size={14}/>{locale === 'fr' ? 'FILTRER' : 'FILTER'}</span><div className="filter-options">{filters.map((item) => <button key={item.key} className={filter === item.key ? 'filter-chip active' : 'filter-chip'} onClick={() => setFilter(item.key)}>{item.label}<span>{item.key === 'all' ? projects.length : projects.filter((project) => project.category === item.key).length}</span></button>)}</div></div>
        {visible.length ? <div className="project-grid project-grid--directory">{visible.map((project, index) => <ProjectCard project={project} index={index} key={project.slug}/>)}</div> : <div className="empty-state">{t.common.noResults}</div>}
        <Reveal><div className="projects-note"><span>✳</span><p>{t.projects.note}</p></div></Reveal>
      </section>
      <section className="page-bottom-cta container"><div><p className="eyebrow">{locale === 'fr' ? 'VOUS AVEZ UN PROJET ?' : 'HAVE A PROJECT?'}</p><h2>{locale === 'fr' ? 'Construisons quelque chose d’utile.' : 'Let’s build something useful.'}</h2></div><a href="mailto:vfranck364@gmail.com" className="button button-primary">{t.nav.contact}<ArrowUpRight size={17}/></a></section>
    </main>
  );
}
