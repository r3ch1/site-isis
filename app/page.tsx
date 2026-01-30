import Header from './components/Header';
import ScrollContainer from './components/ScrollContainer';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="flex flex-col h-dvh overflow-hidden">
      <Header />
      <ScrollContainer>
        <Hero />
        <About />
        <Services />
        <Blog />
        <Contact />
        <Footer />
      </ScrollContainer>
    </main>
  );
}