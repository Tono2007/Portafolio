import './App.css';
import Blog from './components/Blog/Blog';
import Features from './components/Features/Features';
import Header from './components/Head/Header';
import Hero from './components/Hero/Hero';
import Portfolio from './components/Portfolio/Portfolio';
import Resume from './components/Resume/Resume';
import Testimonial from './components/Testimonial/Testimonial';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Portfolio />
      <Resume />
      <Testimonial />
      <Blog />
    </>
  );
}

export default App;
