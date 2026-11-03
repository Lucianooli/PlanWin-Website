import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Screenshots from './components/Screenshots';
import Download from './components/Download';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Features />
        <Screenshots />
        <Download />
      </main>

      <Footer />
    </>
  );
}

export default App;
