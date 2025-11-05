export default function About() {
  return (
    <section id="about" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">About Batik Birru 15</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Batik Birru is our school's annual celebration of creativity and culture. In its 15th edition, the event brings together students across grades to compete in art, design, performance, and innovation challenges inspired by Indonesia's rich batik heritage — especially the serene shades of biru (blue).
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              This year features themed showcases, workshops with mentors, and collaborative installations. Whether you love visual art, music, coding, or storytelling, there's a category for you.
            </p>
          </div>
          <div>
            <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-gray-200">
              <img
                src="https://images.unsplash.com/photo-1603513492128-8f108b6c8074?q=80&w=1400&auto=format&fit=crop"
                alt="Batik pattern inspiration"
                className="h-72 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
