import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Products from './components/Products/Products';
import Research from './components/Research/Research';
import Stats from './components/Stats/Stats';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Products />
        <Research />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
