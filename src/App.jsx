import Home from './components/Home';
import AboutBatik from './components/AboutBatik';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CompetitionMenu from './components/CompetitionMenu';

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-6xl px-6 py-3 flex items-center justify-between">
        <a href="#home" className="font-extrabold text-xl text-blue-700">Batik Birru 15</a>
        <nav className="hidden sm:flex items-center gap-2 text-sm font-medium text-gray-700">
          <a href="#home" className="px-3 py-2 rounded-lg hover:bg-gray-100">Home</a>
          <a href="#about" className="px-3 py-2 rounded-lg hover:bg-gray-100">About</a>
          <CompetitionMenu />
          <a href="#contact" className="px-3 py-2 rounded-lg hover:bg-gray-100">Contact</a>
          <a href="#home" className="ml-2 rounded-lg bg-blue-600 px-3 py-2 text-white hover:bg-blue-700">Register Now!</a>
        </nav>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Home />
      <AboutBatik />
      <Contact />
      <Footer />
    </div>
  );
}
