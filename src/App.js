import './App.module.css';
import './utils/theme.css';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Header from './components/Head/Header';
import Hero from './components/Hero/Hero';
import Portfolio from './components/Portfolio/Portfolio';
import Resume from './components/Resume/Resume';
import Testimonial from './components/Testimonial/Testimonial';
import ParticlesBG from './components/ParticlesBG.js';

function App() {
  return (
    <>
      <ParticlesBG />
      <Header />
      <Hero />
      <main>
        <Features />
        <Portfolio />
        {/*  <Resume /> */}
        <Testimonial />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
