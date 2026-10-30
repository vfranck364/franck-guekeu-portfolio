import { ArrowUpRight, MessageCircle, MoveUpRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSite } from '../context/SiteContext';
import { phoneContacts } from '../data/contact';

export function Footer() {
  const { t, locale } = useSite();
  return (
    <footer className="site-footer">
      <div className="footer-top container">
        <div className="footer-brand-block"><Link to="/" className="brand"><span className="brand-avatar brand-avatar--footer"><img src="/images/profile/franck-avatar.webp" alt="" /></span><span className="brand-name">FRANCK GUEKEU<small>DEVELOPER / BUILDER</small></span></Link><p>{t.footer.line}</p></div>
        <div className="footer-links"><span className="eyebrow">{locale === 'fr' ? 'EXPLORER' : 'EXPLORE'}</span><Link to="/projects">{t.nav.projects}</Link><Link to="/about">{t.nav.about}</Link><Link to="/expertise">{t.nav.expertise}</Link><Link to="/contact">{t.nav.contact}</Link><Link to="/cv">{t.nav.cv}</Link></div>
        <div className="footer-links"><span className="eyebrow">{locale === 'fr' ? 'RESTONS CONNECTÉS' : 'CONNECT'}</span><a href="https://github.com/vfranck364" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={13}/></a><a href="https://linkedin.com/in/franck-guekeu-94b4b2373" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={13}/></a><a href="mailto:vfranck364@gmail.com">Email <ArrowUpRight size={13}/></a></div>
        <div className="footer-links footer-phone-links"><span className="eyebrow">{locale === 'fr' ? 'TÉLÉPHONE' : 'PHONE'}</span>{phoneContacts.map((contact) => <a href={contact.tel} key={contact.tel}><Phone size={12}/>{contact.display}</a>)}{phoneContacts[0].whatsapp && <a className="footer-whatsapp" href={phoneContacts[0].whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={12}/>WhatsApp</a>}</div>
        <a className="footer-back-top" href="#top" onClick={(event) => { event.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}><MoveUpRight size={20}/><span>{t.footer.top}</span></a>
      </div>
      <div className="footer-bottom container"><span>© {new Date().getFullYear()} FRANCK GUEKEU. {t.footer.rights}</span><span>YAOUNDÉ, CAMEROON <i>✳</i> {locale === 'fr' ? 'CONSTRUIT AVEC INTENTION' : 'BUILT WITH INTENTION'}</span></div>
    </footer>
  );
}
