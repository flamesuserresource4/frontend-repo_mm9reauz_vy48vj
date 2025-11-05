const schedule = [
  { time: '08:00', title: 'Opening Ceremony', desc: 'Welcome remarks and overview.' },
  { time: '09:00', title: 'Round 1', desc: 'Preliminary showcases across categories.' },
  { time: '12:00', title: 'Break', desc: 'Lunch and gallery walk.' },
  { time: '13:30', title: 'Workshops', desc: 'Mentor-led sessions and team clinics.' },
  { time: '15:30', title: 'Finals', desc: 'Top teams present to judges.' },
  { time: '17:00', title: 'Awards', desc: 'Winners announced and closing.' },
];

export default function Timeline() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">Event Schedule</h2>
        <p className="mt-3 text-gray-600 text-center max-w-2xl mx-auto">
          A full day of creativity, collaboration, and celebration.
        </p>
        <ol className="mt-10 relative border-s border-gray-200">
          {schedule.map((item, idx) => (
            <li key={idx} className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-blue-600 rounded-full mt-1.5 -start-1.5 border border-white" />
              <time className="mb-1 text-sm font-medium leading-none text-blue-700">{item.time}</time>
              <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
