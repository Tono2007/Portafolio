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
import Card2 from './components/Portfolio/Card2';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Card2 />
      <Features />
      <Portfolio />
      {/*  <Resume /> */}
      <Testimonial />
      {/*  <Blog /> */}
      <Contact />
      <Footer />
    </>
  );
}

export default App;
