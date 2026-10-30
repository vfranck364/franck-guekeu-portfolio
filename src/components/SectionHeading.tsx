import { Reveal } from './Reveal';

export function SectionHeading({ eyebrow, title, text, light = false }: { eyebrow: string; title: string; text?: string; light?: boolean }) {
  return (
    <div className={`section-heading ${light ? 'section-heading--light' : ''}`}>
      <Reveal><p className="eyebrow"><span className="eyebrow-dot" />{eyebrow}</p></Reveal>
      <Reveal delay={0.08}><h2 className="section-title">{title.split('\n').map((line, index) => <span key={`${line}-${index}`}>{line}{index < title.split('\n').length - 1 && <br />}</span>)}</h2></Reveal>
      {text && <Reveal delay={0.14}><p className="section-lead">{text}</p></Reveal>}
    </div>
  );
}
