export default function AboutBatik() {
  return (
    <section id="about" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">About Batik Birru 15</h2>
            <ul className="mt-4 space-y-3 text-gray-700">
              <li><span className="font-semibold">Event:</span> Biggest Event in West Sumatra.</li>
              <li><span className="font-semibold">Theme:</span> "(theme)".</li>
              <li><span className="font-semibold">Event Scale:</span> Over 3,000 participants have participated in previous events.</li>
              <li><span className="font-semibold">Concept:</span> Participants will compete in an unforgettable, magical winter atmosphere.</li>
              <li><span className="font-semibold">Slogan:</span> BIRRU IS NEW, FUN!</li>
            </ul>
          </div>
          <div>
            <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-gray-200">
              <img
                src="https://images.unsplash.com/photo-1519683109079-d5f539e154c2?q=80&w=1400&auto=format&fit=crop"
                alt="Event crowd in winter-themed lighting"
                className="h-72 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
