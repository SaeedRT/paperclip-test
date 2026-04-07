import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Menu from '@/components/Menu';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Menu />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
