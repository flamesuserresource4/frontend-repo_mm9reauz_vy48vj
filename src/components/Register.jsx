import { useState } from 'react';

export default function Register() {
  const [status, setStatus] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries());

    // For now, just simulate success
    await new Promise((r) => setTimeout(r, 600));
    setStatus({ ok: true, message: 'Registration received! We\'ll be in touch via email.' });

    e.currentTarget.reset();
  };

  return (
    <section id="register" className="bg-gray-50 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-6">
        <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">Register Your Team</h2>
          <p className="mt-3 text-gray-600 text-center">Fill out the form and we\'ll confirm your slot.</p>

          <form onSubmit={onSubmit} className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Team Name</label>
              <input name="team" required className="mt-2 w-full rounded-xl border-gray-300 focus:border-blue-600 focus:ring-blue-600" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Category</label>
              <select name="category" required className="mt-2 w-full rounded-xl border-gray-300 focus:border-blue-600 focus:ring-blue-600">
                <option value="Visual Arts">Visual Arts</option>
                <option value="Performance">Performance</option>
                <option value="Innovation">Innovation</option>
                <option value="Photography">Photography</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Grade</label>
              <select name="grade" required className="mt-2 w-full rounded-xl border-gray-300 focus:border-blue-600 focus:ring-blue-600">
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Lead Name</label>
              <input name="lead" required className="mt-2 w-full rounded-xl border-gray-300 focus:border-blue-600 focus:ring-blue-600" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" name="email" required className="mt-2 w-full rounded-xl border-gray-300 focus:border-blue-600 focus:ring-blue-600" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Notes</label>
              <textarea name="notes" rows="3" className="mt-2 w-full rounded-xl border-gray-300 focus:border-blue-600 focus:ring-blue-600" placeholder="Anything judges should know?" />
            </div>
            <div className="sm:col-span-2 flex items-center justify-between gap-4">
              <p className="text-sm text-gray-500">By registering, you agree to the event guidelines.</p>
              <button type="submit" className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white shadow hover:bg-blue-700 transition">Submit Registration</button>
            </div>
          </form>

          {status && (
            <div className={`mt-6 rounded-xl p-4 ${status.ok ? 'bg-green-50 text-green-700 ring-1 ring-green-200' : 'bg-red-50 text-red-700 ring-1 ring-red-200'}`}>
              {status.message}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
