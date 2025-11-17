import Hero from './components/hero';
import Services from './components/services';
import Portfolio from './components/portfolio';
import Footer from './components/footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <section id="inicio">
        <Hero />
      </section>
      
      <section id="servicios">
        <Services />
      </section>
      
      <section id="portafolio">
        <Portfolio />
      </section>
      
      
      
      <Footer />
    </div>
  );
}