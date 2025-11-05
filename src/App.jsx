import Hero from './components/Hero';
import About from './components/About';
import Categories from './components/Categories';
import Timeline from './components/Timeline';
import Register from './components/Register';
import Footer from './components/Footer';

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-6xl px-6 py-3 flex items-center justify-between">
        <a href="#" className="font-extrabold text-xl text-blue-700">Batik Birru 15</a>
        <nav className="hidden sm:flex items-center gap-6 text-sm font-medium text-gray-700">
          <a href="#about" className="hover:text-blue-700">About</a>
          <a href="#categories" className="hover:text-blue-700">Categories</a>
          <a href="#schedule" className="hover:text-blue-700">Schedule</a>
          <a href="#register" className="rounded-lg bg-blue-600 px-3 py-2 text-white hover:bg-blue-700">Register</a>
        </nav>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <div id="about">
        <About />
      </div>
      <div id="categories">
        <Categories />
      </div>
      <div id="schedule">
        <Timeline />
      </div>
      <Register />
      <Footer />
    </div>
  );
}
