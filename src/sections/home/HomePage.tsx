import { useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown, ArrowRight, ArrowUpRight, Braces, Cpu, Layers3, Workflow } from 'lucide-react';
import { useSite } from '../../context/SiteContext';
import { featuredProjects } from '../../data/projects';
import { useGsapScroll } from '../../hooks/useGsapScroll';
import { ProjectCard } from '../../components/ProjectCard';
import { SectionHeading } from '../../components/SectionHeading';
import { TechStamp } from '../../components/ProjectVisual';

gsap.registerPlugin(ScrollTrigger);

export function HomePage() {
  const { t, locale } = useSite();
  const root = useRef<HTMLElement>(null);
  useGsapScroll(root, (element) => {
    const media = gsap.matchMedia();
    media.add('(prefers-reduced-motion: no-preference)', () => {
      const isMobile = window.matchMedia('(max-width: 759px)').matches;
      const duration = (factor = 1.28) => Math.round(window.innerHeight * factor);
      const makeScene = (selector: string, factor = 1.28) => {
        const scene = element.querySelector<HTMLElement>(selector);
        if (!scene) return null;
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: scene, start: 'top top', end: () => `+=${duration(isMobile ? Math.max(.82, factor * .78) : factor)}`,
            scrub: true, pin: scene, pinSpacing: true, anticipatePin: 1, invalidateOnRefresh: true, fastScrollEnd: false,
          },
        });
        return { scene, timeline };
      };

      // 01 — Hero: the opening title and orbit become the first cinematic transition.
      const hero = makeScene('.hero-stage', 1.22);
      if (hero) {
        const title = hero.scene.querySelector('.hero-title');
        const orb = hero.scene.querySelector('.hero-orb-wrap');
        const note = hero.scene.querySelector('.hero-bottom');
        const kicker = hero.scene.querySelector('.hero-kicker');
        if (title) hero.timeline.to(title, { yPercent: -34, scale: .76, xPercent: -5, opacity: .16, duration: 1.18, ease: 'none' }, 0);
        if (orb) hero.timeline.to(orb, { scale: 1.34, xPercent: 17, yPercent: 12, rotate: 28, opacity: .48, duration: 1.18, ease: 'none' }, 0);
        if (note) hero.timeline.to(note, { opacity: 0, y: 28, duration: 1.18, ease: 'none' }, 0);
        if (kicker) hero.timeline.to(kicker, { opacity: 0, y: -28, duration: 1.18, ease: 'none' }, 0);
      }

      // 02 — Approach: a multi-layer reveal, not a one-shot entrance.
      const approach = makeScene('.manifesto-section', 1.18);
      if (approach) {
        const orbit = approach.scene.querySelector('.manifesto-orbit');
        const leftLabel = approach.scene.querySelector('.manifesto-left .eyebrow');
        const title = approach.scene.querySelector('.manifesto-title');
        const copy = approach.scene.querySelector('.manifesto-copy');
        const rows = approach.scene.querySelectorAll('.focus-item');
        if (leftLabel) approach.timeline.fromTo(leftLabel, { x: -90, opacity: 0 }, { x: 0, opacity: 1, duration: .92, ease: 'none' }, 0);
        if (orbit) approach.timeline.fromTo(orbit, { x: -180, y: 90, scale: .55, rotate: -75, opacity: 0 }, { x: 0, y: 0, scale: 1, rotate: 0, opacity: 1, duration: 1.06, ease: 'none' }, .04);
        if (title) approach.timeline.fromTo(title, { x: 150, y: 36, opacity: 0 }, { x: 0, y: 0, opacity: 1, duration: 1.08, ease: 'none' }, .1);
        if (copy) approach.timeline.fromTo(copy, { x: 120, opacity: 0 }, { x: 0, opacity: 1, duration: 1.0, ease: 'none' }, .28);
        if (rows.length) approach.timeline.fromTo(rows, { x: 210, rotateY: 18, opacity: 0 }, { x: 0, rotateY: 0, opacity: 1, duration: 1.08, stagger: .13, ease: 'none' }, .4);
      }

      // 03 — Selected work: vertical scroll drives a horizontal product filmstrip.
      const works = makeScene('.works-section', 1.55);
      if (works) {
        const heading = works.scene.querySelector('.section-heading');
        const rail = works.scene.querySelector<HTMLElement>('.project-grid--home');
        const cards = works.scene.querySelectorAll('.project-grid--home .project-card');
        const progress = works.scene.querySelector<HTMLElement>('.works-progress span');
        if (heading) works.timeline.fromTo(heading, { y: 64, opacity: 0 }, { y: 0, opacity: 1, duration: .86, ease: 'none' }, 0);
        if (cards.length) works.timeline.fromTo(cards, { y: 90, x: (index) => index % 2 ? 54 : -54, scale: .9, opacity: 0 }, { y: 0, x: 0, scale: 1, opacity: 1, duration: 1.0, stagger: .1, ease: 'none' }, .08);
        if (rail) {
          const distance = () => Math.max(0, rail.scrollWidth - (rail.parentElement?.clientWidth || window.innerWidth) + 24);
          works.timeline.to(rail, { x: () => -distance(), duration: 1.14, ease: 'none' }, .36);
          if (progress) works.timeline.fromTo(progress, { scaleX: 0, transformOrigin: 'left center' }, { scaleX: 1, duration: 1.14, ease: 'none' }, .36);
        }
      }

      // 04 — Expertise: rows arrive from alternating sides and settle into a system map.
      const expertise = makeScene('.expertise-section', 1.28);
      if (expertise) {
        const heading = expertise.scene.querySelector('.section-heading');
        const rows = expertise.scene.querySelectorAll('.expertise-row');
        if (heading) expertise.timeline.fromTo(heading, { x: -150, opacity: 0 }, { x: 0, opacity: 1, duration: .92, ease: 'none' }, 0);
        if (rows.length) expertise.timeline.fromTo(rows, { x: (index) => index % 2 ? 150 : -150, y: 34, opacity: 0, rotate: (index) => index % 2 ? 2 : -2 }, { x: 0, y: 0, opacity: 1, rotate: 0, duration: 1.02, stagger: .16, ease: 'none' }, .12);
        expertise.timeline.fromTo(expertise.scene.querySelectorAll('.expertise-icon'), { rotate: -65, scale: .5 }, { rotate: 0, scale: 1, duration: .92, stagger: .15, ease: 'none' }, .16);
      }

      // 05 — Journey: a timeline travelling laterally through the screen.
      const journey = makeScene('.journey-section', 1.28);
      if (journey) {
        const intro = journey.scene.querySelector('.journey-intro');
        const items = journey.scene.querySelectorAll('.journey-item');
        if (intro) journey.timeline.fromTo(intro, { x: -145, opacity: 0, rotateY: -12 }, { x: 0, opacity: 1, rotateY: 0, duration: 1.05, ease: 'none' }, 0);
        if (items.length) journey.timeline.fromTo(items, { x: (index) => index % 2 ? 175 : -175, y: 70, opacity: 0, scale: .88 }, { x: 0, y: 0, opacity: 1, scale: 1, duration: 1.08, stagger: .2, ease: 'none' }, .14);
      }

      // 06 — Closing scene: the CTA and orbital artwork converge before the page releases.
      const closing = makeScene('.home-contact', 1.16);
      if (closing) {
        const eyebrow = closing.scene.querySelector('.eyebrow');
        const title = closing.scene.querySelector('h2');
        const bottom = closing.scene.querySelector('.home-contact-bottom');
        const art = closing.scene.querySelector('.contact-grid-art');
        if (eyebrow) closing.timeline.fromTo(eyebrow, { x: -110, opacity: 0 }, { x: 0, opacity: 1, duration: 1.0, ease: 'none' }, 0);
        if (title) closing.timeline.fromTo(title, { x: -180, y: 52, opacity: 0 }, { x: 0, y: 0, opacity: 1, duration: 1.08, ease: 'none' }, .08);
        if (bottom) closing.timeline.fromTo(bottom, { x: 140, opacity: 0 }, { x: 0, opacity: 1, duration: 1.0, ease: 'none' }, .36);
        if (art) closing.timeline.fromTo(art, { x: 220, scale: .48, rotate: -65, opacity: 0 }, { x: 0, scale: 1, rotate: 0, opacity: 1, duration: 1.08, ease: 'none' }, .12);
      }
      let refreshFrame = 0;
      let disposed = false;
      const fontsReady = document.fonts?.ready ?? Promise.resolve();
      Promise.resolve(fontsReady).then(() => {
        if (!disposed) refreshFrame = requestAnimationFrame(() => ScrollTrigger.refresh());
      });
      return () => { disposed = true; cancelAnimationFrame(refreshFrame); };
    });
    return () => media.revert();
  }, []);

  return (
    <main id="main-content" ref={root} className="home-page">
      <section className="hero-stage cinematic-scene" id="top" data-scene="hero">
        <div className="hero-grid" />
        <div className="hero-glow hero-glow--one"/><div className="hero-glow hero-glow--two"/>
        <div className="hero-orb-wrap"><div className="hero-orb"><div className="orb-ring orb-ring--one"/><div className="orb-ring orb-ring--two"/><div className="orb-ring orb-ring--three"/><div className="orb-core"><img src="/images/profile/franck.webp" alt="Portrait de Franck GUEKEU"/><span className="sr-only">FG</span></div><div className="orb-point orb-point--one"/><div className="orb-point orb-point--two"/></div><span className="orb-label orb-label--top">IDEAS / CODE / IMPACT</span><span className="orb-label orb-label--bottom">AI · SOFTWARE · SYSTEMS</span></div>
        <div className="hero-content container">
          <p className="eyebrow hero-kicker"><span className="eyebrow-dot"/>{t.home.kicker}</p>
          <h1 className="hero-title"><span>{t.home.titleA}</span> <span className="hero-outline">{t.home.titleB}</span><br/><span>{t.home.titleC}</span><br/><span className="hero-last-line">{t.home.titleD}<i>✳</i></span></h1>
          <div className="hero-bottom"><p>{t.home.intro}</p><div className="hero-actions"><Link to="/projects" className="button button-primary">{t.home.ctaProjects}<ArrowUpRight size={17}/></Link><Link to="/contact" className="button button-ghost">{t.home.ctaContact}<ArrowRight size={16}/></Link><Link to="/cv" className="button button-cv">{t.nav.cv}<ArrowUpRight size={16}/></Link></div></div>
        </div>
        <div className="hero-side-note">YAOUNDÉ, CM <span>·</span> {locale === 'fr' ? 'OUVERT AUX OPPORTUNITÉS' : 'OPEN TO OPPORTUNITIES'}</div>
        <div className="hero-scroll"><span>{t.home.scrollLabel}</span><i><ArrowDown size={15}/></i></div>
        <div className="hero-index">01 <span>/</span> 06</div>
      </section>

      <section className="manifesto-section section-pad cinematic-scene" data-scene="approach">
        <div className="container manifesto-grid">
          <div className="manifesto-left"><p className="eyebrow"><span className="eyebrow-dot"/>{t.home.manifestoLabel}</p><div className="manifesto-orbit" data-parallax><span>FG</span><i/><b/><small>BUILD WITH INTENTION</small></div></div>
          <div className="manifesto-right"><h2 className="manifesto-title">{t.home.manifestoTitle}</h2><p className="manifesto-copy">{t.home.manifestoText}</p><div className="focus-list">{t.home.focus.map((item, index) => <div className="focus-item" key={item}><span>0{index + 1}</span><strong>{item}</strong><ArrowUpRight size={16}/></div>)}</div></div>
        </div>
      </section>

      <section className="works-section section-pad cinematic-scene" data-scene="works">
        <div className="container"><SectionHeading eyebrow={t.home.worksLabel} title={t.home.worksTitle} text={t.home.worksText}/>
          <div className="works-rail-viewport"><div className="project-grid project-grid--home">{featuredProjects.slice(0, 4).map((project, index) => <ProjectCard project={project} index={index} key={project.slug}/>)}</div></div>
          <div className="works-progress"><span/></div><div className="section-footer-link"><Link to="/projects" className="text-link">{t.common.allProjects}<ArrowUpRight size={17}/></Link><span className="mono-note">08 PROJECTS / AND COUNTING</span></div>
        </div>
      </section>

      <section className="expertise-section section-pad cinematic-scene" data-scene="expertise">
        <div className="container expertise-home-grid"><div><SectionHeading eyebrow={t.home.expertiseLabel} title={t.home.expertiseTitle}/><Link to="/expertise" className="text-link expertise-more">{t.nav.expertise}<ArrowUpRight size={17}/></Link></div>
          <div className="expertise-list">{t.home.expertise.map((item, index) => {
            const icons = [<Braces size={20}/>, <Cpu size={20}/>, <Workflow size={20}/>, <Layers3 size={20}/>];
            return <article className="expertise-row" key={item.title}><span className="expertise-icon">{icons[index]}</span><div><h3>{item.title}</h3><p>{item.text}</p></div><span className="expertise-number">0{index + 1}</span></article>;
          })}</div>
          <div className="home-ticker"><TechStamp/></div>
        </div>
      </section>

      <section className="journey-section section-pad cinematic-scene" data-scene="journey">
        <div className="container journey-grid"><div className="journey-intro"><SectionHeading eyebrow={t.home.journeyLabel} title={t.home.journeyTitle} text={t.home.journeyText}/><Link to="/about" className="text-link">{t.nav.about}<ArrowUpRight size={17}/></Link></div><div className="journey-timeline">{t.home.journeySteps.map((step) => <article className="journey-item" key={step.year}><span className="journey-dot"/><span className="journey-year">{step.year}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></article>)}</div></div>
      </section>

      <section className="home-contact section-pad cinematic-scene" data-scene="contact"><div className="container home-contact-inner"><div className="contact-grid-art"><span/><span/><span/></div><p className="eyebrow"><span className="eyebrow-dot"/>{t.home.contactLabel}</p><h2>{t.home.contactTitle}</h2><div className="home-contact-bottom"><p>{t.home.contactText}</p><Link to="/contact" className="round-cta"><span>{t.home.contactCta}</span><ArrowUpRight size={23}/></Link></div></div></section>
    </main>
  );
}
