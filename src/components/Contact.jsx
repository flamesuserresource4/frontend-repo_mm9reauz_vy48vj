import { MapPin, Phone } from 'lucide-react';

const cps = [
  { label: 'CP-1', phone: '+62 821-7159-1341' },
  { label: 'CP-2', phone: '+62 821-7159-1342' },
  { label: 'CP-3', phone: '+62 821-7159-1343' },
  { label: 'CP-4', phone: '+62 852-7265-6224' },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">Contact</h2>
          <p className="mt-3 text-gray-600 text-center">Contact persons for general information about Batik Birru and the Birru Cup</p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cps.map((c) => (
              <a key={c.label} href={`https://wa.me/${c.phone.replace(/\s|\+/g,'')}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl border border-gray-200 p-4 hover:border-blue-600 hover:shadow transition">
                <Phone className="text-blue-600" />
                <div>
                  <p className="font-semibold">{c.label}</p>
                  <p className="text-sm text-gray-600">{c.phone}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-8 flex items-start gap-4">
            <MapPin className="text-blue-600 mt-1" />
            <p className="text-gray-700">
              SMAN 1 PADANG PANJANG, Jl. Kh. Ahmad Dahlan No. 09, Guguk Malintang, Padang Panjang District, Padang Panjang City, West Sumatra.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
