import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { content } from '../data/content';
import type { Locale } from '../data/projects';

type Theme = 'dark' | 'light';
interface SiteContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  theme: Theme;
  toggleTheme: () => void;
  t: (typeof content)['fr'] | (typeof content)['en'];
}

const SiteContext = createContext<SiteContextValue | null>(null);

export function SiteProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(() => (localStorage.getItem('fg-locale') as Locale) || 'fr');
  const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem('fg-theme') as Theme) || 'dark');

  useEffect(() => {
    document.documentElement.lang = locale;
    localStorage.setItem('fg-locale', locale);
  }, [locale]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('fg-theme', theme);
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#090b10' : '#f5f6f8');
  }, [theme]);

  const value = useMemo(() => ({ locale, setLocale, theme, toggleTheme: () => setTheme((current) => current === 'dark' ? 'light' : 'dark'), t: content[locale] }), [locale, theme]);
  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSite() {
  const context = useContext(SiteContext);
  if (!context) throw new Error('useSite must be used inside SiteProvider');
  return context;
}
