import { Palette, Mic, Code2, Camera } from 'lucide-react';

const categories = [
  {
    icon: Palette,
    title: 'Visual Arts',
    desc: 'Painting, illustration, batik-inspired patterns, and mixed media.',
  },
  {
    icon: Mic,
    title: 'Performance',
    desc: 'Music, dance, spoken word, and collaborative stage acts.',
  },
  {
    icon: Code2,
    title: 'Innovation',
    desc: 'Apps, interactive media, and tech projects with cultural flair.',
  },
  {
    icon: Camera,
    title: 'Photography',
    desc: 'Capturing stories, textures, and colors of biru-themed batik.',
  },
];

export default function Categories() {
  return (
    <section className="bg-gray-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">Competition Categories</h2>
        <p className="mt-3 text-gray-600 text-center max-w-2xl mx-auto">
          Choose your stage. Compete solo or in teams, and let your ideas shine.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200 hover:shadow-md transition">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                  <Icon />
                </div>
                <h3 className="font-semibold text-lg">{title}</h3>
              </div>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
