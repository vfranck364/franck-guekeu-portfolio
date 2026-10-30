import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ArrowUpRight, Globe2, Menu, Moon, Phone, Sun, X } from 'lucide-react';
import { useSite } from '../context/SiteContext';

export function Navbar() {
  const { locale, setLocale, theme, toggleTheme, t } = useSite();
  const [open, setOpen] = useState(false);
  const items = [
    { to: '/', label: t.nav.home }, { to: '/about', label: t.nav.about }, { to: '/projects', label: t.nav.projects },
    { to: '/expertise', label: t.nav.expertise }, { to: '/experience', label: t.nav.experience }, { to: '/cv', label: t.nav.cv }, { to: '/contact', label: t.nav.contact },
  ];
  const close = () => setOpen(false);
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <div className="nav-shell">
          <Link to="/" className="brand" onClick={close} aria-label="Franck GUEKEU — Home">
            <span className="brand-avatar"><img src="/images/profile/franck-avatar.webp" alt="" /></span><span className="brand-name">FRANCK GUEKEU<small>DEVELOPER / BUILDER</small></span>
          </Link>
          <nav className={`main-nav ${open ? 'is-open' : ''}`} aria-label="Main navigation">
            {items.map((item) => <NavLink key={item.to} to={item.to} end={item.to === '/'} onClick={close} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>{item.label}</NavLink>)}
            <a className="nav-mobile-contact" href="mailto:vfranck364@gmail.com" onClick={close}>{t.nav.contact} <ArrowUpRight size={15}/></a>
            <a className="nav-mobile-phone" href="tel:+237683121654" onClick={close}>{locale === 'fr' ? 'Appeler' : 'Call'} <Phone size={15}/></a>
          </nav>
          <div className="nav-actions">
            <button className="icon-button language-button" onClick={() => setLocale(locale === 'fr' ? 'en' : 'fr')} aria-label="Switch language" title="Switch language"><Globe2 size={16}/><span>{locale.toUpperCase()}</span></button>
            <button className="icon-button" onClick={toggleTheme} aria-label="Toggle color theme" title="Toggle theme">{theme === 'dark' ? <Sun size={17}/> : <Moon size={17}/>}</button>
            <a href="tel:+237683121654" className="icon-button nav-phone" aria-label={locale === 'fr' ? 'Appeler Franck' : 'Call Franck'} title={locale === 'fr' ? 'Appeler' : 'Call'}><Phone size={16}/></a>
            <a href="mailto:vfranck364@gmail.com" className="nav-cta">{locale === 'fr' ? 'Discutons' : 'Let’s talk'} <ArrowUpRight size={15}/></a>
            <button className="mobile-toggle icon-button" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X size={19}/> : <Menu size={19}/>}</button>
          </div>
        </div>
      </header>
      {open && <button className="menu-backdrop" aria-label="Close navigation menu" onClick={close}/>}
    </>
  );
}
