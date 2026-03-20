import { useEffect } from 'react';

import globalStyles from './styles/global';

import Navbar       from './components/Navbar';
import Hero         from './components/Hero';
import Marquee      from './components/Marquee';
import Tentang      from './components/Tentang';
import Products     from './components/Products';
import Benefits     from './components/Benefits';
import Testimonials from './components/Testimonials';
import CTA          from './components/CTA';
import Footer       from './components/Footer';

export default function App() {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = globalStyles;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Marquee />
      <Tentang />
      <Products />
      <Benefits />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}
