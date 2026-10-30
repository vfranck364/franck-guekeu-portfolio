import { useState, type FormEvent } from 'react';
import { ArrowUpRight, Check, Copy, Github, Linkedin, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react';
import { useSite } from '../context/SiteContext';
import { Reveal } from '../components/Reveal';
import { phoneContacts } from '../data/contact';

export function ContactPage() {
  const { t, locale } = useSite();
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const copyEmail = async () => {
    try { await navigator.clipboard.writeText('vfranck364@gmail.com'); setCopied(true); window.setTimeout(() => setCopied(false), 1800); }
    catch { window.location.href = 'mailto:vfranck364@gmail.com'; }
  };
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(form.subject || (locale === 'fr' ? 'Prise de contact via le portfolio' : 'Portfolio contact'));
    const body = encodeURIComponent(`${locale === 'fr' ? 'Nom' : 'Name'}: ${form.name}\n${locale === 'fr' ? 'Email' : 'Email'}: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:vfranck364@gmail.com?subject=${subject}&body=${body}`;
  };
  const update = (key: keyof typeof form, value: string) => setForm((current) => ({ ...current, [key]: value }));
  return (
    <main id="main-content" className="inner-page contact-page">
      <section className="page-hero container"><p className="eyebrow"><span className="eyebrow-dot"/>{t.contact.kicker}</p><h1 className="page-title">{t.contact.title.split('\n').map((line, index) => <span key={line}>{line}{index === 0 && <br/>}</span>)}</h1><p className="page-lead">{t.contact.lead}</p><div className="page-hero-bottom"><span>HELLO@FRANCKGUEKEU.DEV</span><span>REPLIES FROM YAOUNDÉ, CM</span></div></section>
      <section className="container contact-layout">
        <div className="contact-details"><Reveal><p className="eyebrow">{t.contact.emailLabel}</p><div className="email-display"><a href="mailto:vfranck364@gmail.com">vfranck364@gmail.com</a><button className="icon-button" onClick={copyEmail} aria-label="Copy email">{copied ? <Check size={16}/> : <Copy size={16}/>}</button></div><p className="copy-status">{copied ? t.contact.copied : locale === 'fr' ? 'Disponible pour échanger.' : 'Available for a conversation.'}</p></Reveal>
          <Reveal delay={0.08}><div className="contact-detail-block"><MapPin size={17}/><div><small>{t.contact.locationLabel}</small><strong>{t.contact.location}</strong></div></div></Reveal>
          <Reveal delay={0.1}><div className="contact-phones" id="phone-numbers"><p className="eyebrow">{locale === 'fr' ? 'TÉLÉPHONE' : 'PHONE'}</p><div className="contact-phone-list">{phoneContacts.map((contact, index) => <div className="contact-phone-row" key={contact.tel}><a className="contact-phone-number" href={contact.tel} aria-label={`${locale === 'fr' ? 'Appeler le' : 'Call'} ${contact.display}`}><Phone size={15}/><span>{contact.display}</span></a>{index === 0 && contact.whatsapp && <a className="contact-whatsapp-link" href={contact.whatsapp} target="_blank" rel="noreferrer" aria-label={locale === 'fr' ? 'Contacter sur WhatsApp' : 'Contact on WhatsApp'}><MessageCircle size={14}/><span>WhatsApp</span><ArrowUpRight size={13}/></a>}</div>)}</div><p className="contact-phone-note">{locale === 'fr' ? 'Appel téléphonique disponible sur les trois lignes.' : 'Phone calls are available on all three numbers.'}</p></div></Reveal>
          <Reveal delay={0.12}><div className="contact-socials"><p className="eyebrow">{t.contact.socialTitle}</p><a href="https://github.com/vfranck364" target="_blank" rel="noreferrer"><Github size={17}/>GitHub<ArrowUpRight size={15}/></a><a href="https://linkedin.com/in/franck-guekeu-94b4b2373" target="_blank" rel="noreferrer"><Linkedin size={17}/>LinkedIn<ArrowUpRight size={15}/></a><a href="mailto:vfranck364@gmail.com"><Mail size={17}/>Email<ArrowUpRight size={15}/></a></div></Reveal>
        </div>
        <Reveal className="contact-form-wrap" delay={0.1}><form className="contact-form" onSubmit={submit}><p className="eyebrow">{t.contact.formTitle}</p><label>{t.contact.name}<input type="text" value={form.name} onChange={(event) => update('name', event.target.value)} placeholder={t.contact.namePlaceholder} required/></label><label>{t.contact.email}<input type="email" value={form.email} onChange={(event) => update('email', event.target.value)} placeholder={t.contact.emailPlaceholder} required/></label><label>{t.contact.subject}<input type="text" value={form.subject} onChange={(event) => update('subject', event.target.value)} placeholder={t.contact.subjectPlaceholder}/></label><label>{t.contact.message}<textarea value={form.message} onChange={(event) => update('message', event.target.value)} placeholder={t.contact.messagePlaceholder} rows={5} required/></label><button type="submit" className="button button-primary form-submit">{t.contact.send}<Send size={16}/></button><p className="form-note">{t.contact.formNote}</p></form></Reveal>
      </section>
      <section className="container contact-bottom-note"><span>✳</span><p>{locale === 'fr' ? 'Une bonne collaboration commence souvent par une conversation simple.' : 'A great collaboration often starts with a simple conversation.'}</p></section>
    </main>
  );
}
