import { ArrowUpRight, Bot, CalendarDays, Code2, Layers3, MessageCircle, Send, Sparkles, Workflow } from 'lucide-react';
import type { CSSProperties } from 'react';
import type { Project } from '../data/projects';

export function ProjectVisual({ project, compact = false }: { project: Project; compact?: boolean }) {
  return (
    <div className={`project-visual project-visual--${project.visual} ${compact ? 'project-visual--compact' : ''}`} style={{ '--project-accent': project.accent } as CSSProperties} aria-hidden="true">
      <div className="visual-grain" />
      {project.visual === 'wapisend' && <div className="visual-app visual-app--wa">
        <div className="visual-app-top"><span className="mini-brand"><img className="mini-brand-image" src="/images/projects/wapisend-logo.webp" alt=""/> wapisend</span><span className="mini-dots">•••</span></div>
        <div className="wa-layout"><div className="wa-sidebar"><i /><i /><i /><i /></div><div className="wa-main"><div className="wa-heading"><span>Campaign overview</span><b>↗</b></div><div className="wa-stat-row"><div><small>Messages sent</small><strong>24.8k</strong><em>+18.4%</em></div><div><small>Delivery rate</small><strong>98.6%</strong><em>+4.2%</em></div></div><div className="wa-chart"><div className="chart-grid"/><svg viewBox="0 0 360 100" preserveAspectRatio="none"><path d="M0 77 C30 66 42 72 65 54 S102 64 128 43 S161 57 190 31 S226 43 250 25 S288 34 312 17 S337 25 360 6" fill="none" stroke="var(--project-accent)" strokeWidth="3" strokeLinecap="round"/><path d="M0 77 C30 66 42 72 65 54 S102 64 128 43 S161 57 190 31 S226 43 250 25 S288 34 312 17 S337 25 360 6 L360 100 L0 100Z" fill="var(--project-accent)" opacity=".10"/></svg></div></div></div>
      </div>}
      {project.visual === 'coa' && <div className="visual-app visual-app--coa"><div className="coa-top"><span className="coa-symbol">✳</span><span>COA / platform</span><span className="coa-chip">CARE ECOSYSTEM</span></div><div className="coa-body"><div className="coa-sidebar"><b>Workspace</b><i/><i/><i/><i/></div><div className="coa-content"><small>OVERVIEW</small><strong>Connected care,<br/>one platform.</strong><div className="coa-cards"><div><span>01</span><b>Patient</b></div><div><span>02</span><b>Staff</b></div><div><span>03</span><b>Provider</b></div></div></div></div></div>}
      {project.visual === 'tedsai' && <div className="visual-site visual-site--tedsai"><div className="site-nav"><b>TEDSAI<span>.</span></b><span>INNOVATION · SERVICES · PEOPLE</span><i>↗</i></div><div className="site-copy"><small>WELCOME TO THE ECOSYSTEM</small><strong>Ideas into<br/><em>impact.</em></strong><div className="site-line"/><span>Technology · Hospitality · Experiences</span></div><div className="site-orb"/></div>}
      {project.visual === 'hair' && <div className="visual-site visual-site--hair"><div className="hair-orbit hair-orbit--one"/><div className="hair-orbit hair-orbit--two"/><div className="hair-core"><Sparkles size={30}/></div><img className="hair-brand-logo" src="/images/projects/hair-logo.webp" alt=""/><small>HOME OF AI REVOLUTIONS</small><strong>Human ideas.<br/>Intelligent futures.</strong></div>}
      {project.visual === 'chronos' && <div className="visual-app visual-app--chrono"><div className="chrono-top"><span className="chrono-brand"><img src="/images/projects/chronos-logo.webp" alt=""/> chronos / week</span><span>☼ 24°</span></div><div className="chrono-title">Your week,<br/><em>in rhythm.</em></div><div className="chrono-week">{['M','T','W','T','F','S','S'].map((d, i) => <span key={i} className={i === 2 ? 'active' : ''}>{d}<b>{12 + i}</b></span>)}</div><div className="chrono-events"><i/><i/><i/></div></div>}
      <div className="visual-index">{project.slug === 'wapisend' ? '01' : project.slug === 'coa-platform' ? '02' : project.slug === 'tedsai-website' ? '03' : '✳'}</div>
      {!compact && <div className="visual-corner"><ArrowUpRight size={17}/></div>}
    </div>
  );
}

export function TechStamp() {
  return <div className="tech-stamp"><span><Code2 size={13}/> DIGITAL CRAFT</span><span><Workflow size={13}/> AUTOMATION</span><span><Bot size={13}/> AI-READY</span><span><Layers3 size={13}/> FULL-STACK</span><span><CalendarDays size={13}/> PRODUCT THINKING</span><span><MessageCircle size={13}/> HUMAN-CENTERED</span><span><Send size={13}/> BUILD & SHIP</span></div>;
}
