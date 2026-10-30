import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Check, ExternalLink, LockKeyhole } from 'lucide-react';
import { projects } from '../data/projects';
import { useSite } from '../context/SiteContext';
import { ProjectVisual } from '../components/ProjectVisual';
import { ProjectCard } from '../components/ProjectCard';
import { Reveal } from '../components/Reveal';

export function ProjectDetailPage() {
  const { slug } = useParams();
  const { t, locale } = useSite();
  const project = projects.find((item) => item.slug === slug);
  if (!project) return <Navigate to="/projects" replace/>;
  const related = projects.filter((item) => item.slug !== project.slug && (item.category === project.category || item.featured)).slice(0, 2);
  const status = project.status === 'live' ? t.common.live : project.status === 'building' ? t.common.building : project.status === 'prototype' ? t.common.prototype : t.common.caseStudy;
  return (
    <main id="main-content" className="inner-page project-detail-page">
      <div className="container detail-back"><Link to="/projects"><ArrowLeft size={15}/>{t.common.back} / {t.nav.projects}</Link><span>PROJECT INDEX / {project.year}</span></div>
      <section className="container detail-hero">
        <div className="detail-heading"><p className="eyebrow"><span className="eyebrow-dot"/>{project.eyebrow}</p><h1>{project.name}</h1><p>{project.summary[locale]}</p><div className="detail-meta"><span className={`status status--${project.status}`}>{status}</span><span>{project.category}</span><span>{project.year}</span></div></div>
        <div className="detail-visual"><ProjectVisual project={project}/></div>
      </section>
      {project.slug === 'wapisend' && <section className="container detail-media-gallery detail-media-gallery--wapisend">
        <div className="detail-media-heading"><p className="eyebrow">{locale === 'fr' ? 'IDENTITÉ & APERÇUS' : 'IDENTITY & PREVIEWS'}</p><h2>{locale === 'fr' ? 'La communication, mise en scène.' : 'Communication, brought to life.'}</h2></div>
        <div className="detail-media-grid detail-media-grid--wapisend"><figure className="media-logo-card"><img src="/images/projects/wapisend-logo.webp" alt="Logo WapiSend"/><figcaption>WapiSend / Brand identity</figcaption></figure><figure><img src="/images/projects/wapisend-launch.webp" alt={locale === 'fr' ? 'Visuel promotionnel WapiSend avec robot et identité verte' : 'WapiSend promotional visual with robot and green identity'}/><figcaption>WapiSend / Campaign visual</figcaption></figure><figure><img src="/images/projects/wapisend-showcase.webp" alt={locale === 'fr' ? 'Présentation visuelle de la plateforme WapiSend et de son tableau de bord' : 'WapiSend platform and dashboard showcase'}/><figcaption>WapiSend / Product showcase</figcaption></figure></div>
      </section>}
      {project.slug === 'chronos' && <section className="container detail-media-gallery"><div className="detail-media-heading"><p className="eyebrow">{locale === 'fr' ? 'IDENTITÉ DU PRODUIT' : 'PRODUCT IDENTITY'}</p><h2>Chronos</h2></div><div className="detail-media-grid detail-media-grid--chronos"><figure className="media-logo-card"><img src="/images/projects/chronos-logo.webp" alt="Logo de l’application Chronos"/><figcaption>Chronos / App icon</figcaption></figure></div></section>}
      {project.slug === 'hair' && <section className="container detail-media-gallery"><div className="detail-media-heading"><p className="eyebrow">{locale === 'fr' ? 'UNIVERS VISUEL HAIR' : 'HAIR VISUAL UNIVERSE'}</p><h2>Home of AI Revolutions</h2></div><div className="detail-media-grid detail-media-grid--hair"><figure><img src="/images/projects/hair-cinematic.webp" alt={locale === 'fr' ? 'Visuel cinématique HAIR dans un univers spatial' : 'HAIR cinematic visual in a space-inspired universe'}/><figcaption>HAIR / Vision & storytelling</figcaption></figure><figure><img src="/images/projects/hair-ai-portrait.webp" alt={locale === 'fr' ? 'Portrait créatif de Franck dans un univers humanité et intelligence artificielle' : 'Creative portrait of Franck in a human and artificial intelligence universe'}/><figcaption>HAIR / Human × AI</figcaption></figure><figure className="media-logo-card"><img src="/images/projects/hair-logo.webp" alt="Logo HAIR - Home of AI Revolutions"/><figcaption>HAIR / Brand identity</figcaption></figure></div></section>}
      <section className="container detail-content-grid">
        <div className="detail-main-column">
          <Reveal><article className="detail-block"><p className="eyebrow">{t.projectDetail.overview}</p><p className="detail-overview">{project.summary[locale]}</p></article></Reveal>
          <Reveal><article className="detail-block"><p className="eyebrow">{t.projectDetail.challenge}</p><p>{project.challenge[locale]}</p></article></Reveal>
          <Reveal><article className="detail-block"><p className="eyebrow">{t.projectDetail.contribution}</p><ul className="contribution-list">{project.contribution[locale].map((item) => <li key={item}><Check size={15}/><span>{item}</span></li>)}</ul></article></Reveal>
          <Reveal><article className="detail-block"><p className="eyebrow">{t.projectDetail.outcome}</p><p>{project.outcome[locale]}</p></article></Reveal>
        </div>
        <aside className="detail-sidebar">
          <div className="sidebar-block"><p className="eyebrow">{t.projectDetail.technologies}</p><div className="tech-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
          <div className="sidebar-block"><p className="eyebrow">{locale === 'fr' ? 'LIENS' : 'LINKS'}</p>{project.links.length ? project.links.map((link) => <a className="detail-external-link" href={link.href} target="_blank" rel="noreferrer" key={link.href}>{link.label}<ExternalLink size={14}/></a>) : <p className="sidebar-muted">{locale === 'fr' ? 'Aucun lien public pour le moment.' : 'No public link yet.'}</p>}</div>
          {project.visibility === 'limited' && <div className="privacy-note"><LockKeyhole size={17}/><div><strong>{t.projectDetail.visibility}</strong><p>{t.projectDetail.visibilityText}</p></div></div>}
          {project.status === 'building' && <div className="privacy-note privacy-note--progress"><span className="progress-pulse"/><div><strong>{locale === 'fr' ? 'Projet en cours' : 'Work in progress'}</strong><p>{locale === 'fr' ? 'Cette fiche évoluera avec le projet.' : 'This page will evolve with the project.'}</p></div></div>}
        </aside>
      </section>
      <section className="container related-section"><div className="related-heading"><p className="eyebrow">{t.projectDetail.related}</p><Link to="/projects" className="text-link">{t.common.allProjects}<ArrowUpRight size={16}/></Link></div><div className="project-grid">{related.map((item, index) => <ProjectCard key={item.slug} project={item} index={index}/>)}</div></section>
    </main>
  );
}
