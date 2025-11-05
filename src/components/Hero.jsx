import { Calendar, MapPin, Trophy, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-600 via-blue-500 to-blue-400 text-white">
      <div className="absolute inset-0 opacity-20"
           style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.3) 0, transparent 25%), radial-gradient(circle at 80% 0%, rgba(255,255,255,0.2) 0, transparent 30%), radial-gradient(circle at 60% 80%, rgba(255,255,255,0.25) 0, transparent 35%)' }}
      />
      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-28">
        <div className="flex flex-col items-center text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-700/40 px-3 py-1 text-sm font-medium ring-1 ring-white/30">
            <Trophy size={16} />
            Annual School Competition
          </span>
          <h1 className="font-extrabold tracking-tight text-4xl sm:text-6xl">
            Batik Birru 15
          </h1>
          <p className="mt-4 max-w-2xl text-blue-50/90 text-lg">
            Celebrate creativity, culture, and collaboration. Join students from across the school in the 15th edition of Batik Birru — a showcase of art, ideas, and innovation.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href="#register" className="group inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-semibold text-blue-700 shadow hover:shadow-lg transition">
              Register Now
              <ChevronRight className="transition-transform group-hover:translate-x-0.5" size={18} />
            </a>
            <a href="#about" className="inline-flex items-center gap-2 rounded-lg bg-blue-700/40 px-5 py-3 font-semibold text-white ring-1 ring-white/30 hover:bg-blue-700/50 transition">
              Learn More
            </a>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3 w-full">
            <div className="rounded-xl bg-white/10 p-4 backdrop-blur ring-1 ring-white/30">
              <div className="flex items-center gap-3">
                <Calendar />
                <div>
                  <p className="text-sm text-blue-50/80">Event Date</p>
                  <p className="font-semibold">May 24 – 26, 2025</p>
                </div>
              </div>
            </div>
            <div className="rounded-xl bg-white/10 p-4 backdrop-blur ring-1 ring-white/30">
              <div className="flex items-center gap-3">
                <MapPin />
                <div>
                  <p className="text-sm text-blue-50/80">Location</p>
                  <p className="font-semibold">School Auditorium & Gallery</p>
                </div>
              </div>
            </div>
            <div className="rounded-xl bg-white/10 p-4 backdrop-blur ring-1 ring-white/30">
              <div className="flex items-center gap-3">
                <Trophy />
                <div>
                  <p className="text-sm text-blue-50/80">Awards</p>
                  <p className="font-semibold">Trophies • Certificates • Swag</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg">
        <path fill="#ffffff" fillOpacity="1" d="M0,64L60,69.3C120,75,240,85,360,106.7C480,128,600,160,720,154.7C840,149,960,107,1080,101.3C1200,96,1320,128,1380,144L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z" />
      </svg>
    </section>
  );
}
