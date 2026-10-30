import { ArrowUpRight, LockKeyhole } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Project } from '../data/projects';
import { ProjectVisual } from './ProjectVisual';
import { useSite } from '../context/SiteContext';

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  const { locale, t } = useSite();
  const status = project.status === 'live' ? t.common.live : project.status === 'building' ? t.common.building : project.status === 'prototype' ? t.common.prototype : t.common.caseStudy;
  return (
    <Link to={`/projects/${project.slug}`} className={`project-card ${index % 3 === 1 ? 'project-card--offset' : ''}`}>
      <div className="project-card-visual"><ProjectVisual project={project} compact/><span className="project-card-arrow"><ArrowUpRight size={19}/></span></div>
      <div className="project-card-meta"><span>{project.category} <i>·</i> {project.year}</span><span className={`status status--${project.status}`}>{project.status === 'case-study' && <LockKeyhole size={10} />}{status}</span></div>
      <div className="project-card-title-row"><h3>{project.name}</h3><span className="project-card-index">0{index + 1}</span></div>
      <p>{project.summary[locale]}</p>
      <div className="project-card-tags">{project.tags.slice(0, 4).map((tag) => <span key={tag}>{tag}</span>)}</div>
    </Link>
  );
}
