import { Users, Gift, School, ChevronRight } from 'lucide-react';

const stats = [
  { icon: Users, label: 'Participants', value: '3,000+' },
  { icon: Gift, label: 'Prizes', value: 'Trophies & Swag' },
  { icon: School, label: 'Schools', value: '50+ Schools' },
];

const competitions = [
  { id: 'olympiad', title: 'Birru Olympiad', desc: 'Academic challenge across science, math, and general knowledge.' },
  { id: 'art', title: 'Birru Art', desc: 'Visual arts inspired by batik and the shades of biru.' },
  { id: 'scout', title: 'Birru Scout', desc: 'Scouting skills, teamwork, and leadership missions.' },
  { id: 'linguistic', title: 'Birru Linguistic', desc: 'Debate, speech, storytelling, and language mastery.' },
  { id: 'romance', title: 'Birru Romance', desc: 'Literary creation, poetry, and creative writing.' },
];

export default function Home() {
  return (
    <section id="home" className="bg-gradient-to-b from-blue-600 via-blue-500 to-blue-400 text-white">
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-24">
        <div className="text-center">
          <p className="inline-flex items-center gap-2 rounded-full bg-blue-700/40 px-3 py-1 text-sm font-medium ring-1 ring-white/30">Biggest Event in West Sumatra</p>
          <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold tracking-tight">Batik Birru 15</h1>
          <p className="mt-4 max-w-2xl mx-auto text-blue-50/90 text-lg">
            BIRRU IS NEW, FUN! Join the largest celebration of creativity, culture, and collaboration — an unforgettable, magical winter themed competition.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href="#register" className="group inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-semibold text-blue-700 shadow hover:shadow-lg transition">
              Register Now!
              <ChevronRight className="transition-transform group-hover:translate-x-0.5" size={18} />
            </a>
            <a href="#about" className="inline-flex items-center gap-2 rounded-lg bg-blue-700/40 px-5 py-3 font-semibold text-white ring-1 ring-white/30 hover:bg-blue-700/50 transition">
              About Event
            </a>
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {stats.map(({ icon: Icon, label, value }) => (
            <div key={label} className="rounded-xl bg-white/10 p-5 backdrop-blur ring-1 ring-white/30">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-white/20 p-2">
                  <Icon />
                </div>
                <div>
                  <p className="text-sm text-blue-50/80">{label}</p>
                  <p className="font-semibold text-white">{value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div id="competitions" className="mt-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">Current Competitions</h2>
          <p className="mt-2 text-blue-50/90 text-center">Pick your arena and let your talent shine.</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {competitions.map((c) => (
              <a href={`#comp-${c.id}`} key={c.id} className="block group rounded-2xl bg-white/10 p-6 ring-1 ring-white/30 hover:bg-white/20 transition">
                <h3 className="text-xl font-semibold">{c.title}</h3>
                <p className="mt-2 text-blue-50/90 text-sm">{c.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-blue-100 group-hover:gap-2 transition">Learn more <ChevronRight size={16} /></span>
              </a>
            ))}
          </div>
        </div>

        <div className="sr-only">
          {competitions.map((c) => (
            <div key={c.id} id={`comp-${c.id}`}>{c.title}</div>
          ))}
        </div>
      </div>
      <svg className="w-full" viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg">
        <path fill="#ffffff" fillOpacity="1" d="M0,64L60,69.3C120,75,240,85,360,106.7C480,128,600,160,720,154.7C840,149,960,107,1080,101.3C1200,96,1320,128,1380,144L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z" />
      </svg>
    </section>
  );
}
