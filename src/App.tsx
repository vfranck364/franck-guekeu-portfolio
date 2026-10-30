import { useEffect, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { SiteProvider } from './context/SiteContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { PageTransition } from './components/PageTransition';
import { HomePage } from './sections/home/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { ExpertisePage } from './pages/ExpertisePage';
import { ExperiencePage } from './pages/ExperiencePage';
import { ContactPage } from './pages/ContactPage';
import { CVPage } from './pages/CVPage';
import { ArrowUpRight } from 'lucide-react';
import { SpaceBackground } from './components/SpaceBackground';

gsap.registerPlugin(ScrollTrigger);

function PageScrollMotion() {
  const location = useLocation();
  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const main = document.querySelector<HTMLElement>('#main-content');
    if (!main || main.classList.contains('home-page')) return;
    const context = gsap.context(() => {
      main.querySelectorAll<HTMLElement>(':scope > section:not(.hero-stage)').forEach((section, index) => {
        const horizontal = index % 2 === 0 ? 22 : -22;
        gsap.fromTo(section, { x: horizontal, y: 20, opacity: .78 }, {
          x: 0, y: 0, opacity: 1, ease: 'none',
          scrollTrigger: { trigger: section, start: 'top 94%', end: 'center 52%', scrub: 1 }
        });
      });
    }, main);
    ScrollTrigger.refresh();
    return () => context.revert();
  }, [location.pathname]);
  return null;
}

function ScrollManager() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return null;
}

function NotFoundPage() {
  return <main id="main-content" className="not-found container"><p className="eyebrow">404 / PAGE NOT FOUND</p><h1>Lost in the<br/><span>digital space.</span></h1><p>The page you’re looking for doesn’t exist or has moved.</p><a href="/" className="button button-primary">Back home <ArrowUpRight size={16}/></a></main>;
}

function AppShell() {
  return <BrowserRouter><SiteProvider><SpaceBackground/><ScrollManager/><PageScrollMotion/><Navbar/><PageTransition><Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/about" element={<AboutPage/>}/>
    <Route path="/projects" element={<ProjectsPage/>}/>
    <Route path="/projects/:slug" element={<ProjectDetailPage/>}/>
    <Route path="/expertise" element={<ExpertisePage/>}/>
    <Route path="/experience" element={<ExperiencePage/>}/>
    <Route path="/contact" element={<ContactPage/>}/>
    <Route path="/cv" element={<CVPage/>}/>
    <Route path="*" element={<NotFoundPage/>}/>
  </Routes></PageTransition><Footer/></SiteProvider></BrowserRouter>;
}

export default function App() {
  return <AppShell/>;
}
