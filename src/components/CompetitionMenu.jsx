import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const items = [
  { href: '#comp-olympiad', label: 'Birru Olympiad' },
  { href: '#comp-art', label: 'Birru Art' },
  { href: '#comp-scout', label: 'Birru Scout' },
  { href: '#comp-linguistic', label: 'Birru Linguistic' },
  { href: '#comp-romance', label: 'Birru Romance' },
];

export default function CompetitionMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button onClick={() => setOpen((v) => !v)} className="inline-flex items-center gap-1 rounded-lg px-3 py-2 hover:bg-gray-100">
        Competition
        <ChevronDown size={16} />
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-52 rounded-xl bg-white p-2 shadow ring-1 ring-gray-200">
          {items.map((i) => (
            <a key={i.href} href={i.href} className="block rounded-lg px-3 py-2 text-sm hover:bg-gray-50">
              {i.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
