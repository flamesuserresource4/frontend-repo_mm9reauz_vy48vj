import { Instagram, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-blue-100">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <h3 className="text-xl font-bold">Batik Birru 15</h3>
            <p className="mt-2 text-blue-100/80">A celebration of creativity and culture at our school.</p>
          </div>
          <div>
            <h4 className="font-semibold">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex items-center gap-2"><Phone size={16}/> +62 812-3456-7890</li>
              <li className="flex items-center gap-2"><Mail size={16}/> batikbirru@school.edu</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Follow</h4>
            <a href="#" className="mt-3 inline-flex items-center gap-2 rounded-lg bg-blue-800 px-3 py-2 text-sm hover:bg-blue-700 transition">
              <Instagram size={16}/> @batikbirru
            </a>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-blue-100/70">
          © {new Date().getFullYear()} Batik Birru. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
