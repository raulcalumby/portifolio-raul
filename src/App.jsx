import './App.css';
import Contact from './sections/Contact/Contact';
import WhatsAppButton from './sections/Contact/WhatsApp';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';

function App() {
  return (
    <>
      <WhatsAppButton />
      <Hero />
      <Skills />
      {/* <Projects /> */}
      {/* <Contact /> */}
      <Footer />
    </>
  );
}

export default App;
