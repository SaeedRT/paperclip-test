'use client';

export default function Contact() {
  return (
    <section id="contact" className="bg-stone-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Info */}
          <div>
            <h2 className="mb-6 text-4xl font-bold text-stone-900">Visit Us</h2>
            <div className="space-y-6 text-stone-600">
              <div>
                <h3 className="mb-1 font-semibold text-stone-900">Address</h3>
                <p>123 Cherry Blossom Lane</p>
                <p>San Francisco, CA 94102</p>
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-stone-900">Hours</h3>
                <p>Mon – Thu: 12 pm – 10 pm</p>
                <p>Fri – Sat: 12 pm – 11 pm</p>
                <p>Sunday: 1 pm – 9 pm</p>
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-stone-900">Reservations</h3>
                <a
                  href="tel:+14155550123"
                  className="font-medium text-amber-600 hover:text-amber-500"
                >
                  (415) 555-0123
                </a>
              </div>
            </div>
          </div>

          {/* Reservation form */}
          <div className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
            <h3 className="mb-6 text-xl font-bold text-stone-900">Reserve a Table</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="mb-1 block text-sm font-medium text-stone-700"
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    required
                    className="w-full rounded-lg border border-stone-300 px-4 py-2.5 text-sm focus:border-amber-400 focus:ring-1 focus:ring-amber-400 focus:outline-none"
                    placeholder="Hiroshi"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="mb-1 block text-sm font-medium text-stone-700"
                  >
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    required
                    className="w-full rounded-lg border border-stone-300 px-4 py-2.5 text-sm focus:border-amber-400 focus:ring-1 focus:ring-amber-400 focus:outline-none"
                    placeholder="Tanaka"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-medium text-stone-700">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full rounded-lg border border-stone-300 px-4 py-2.5 text-sm focus:border-amber-400 focus:ring-1 focus:ring-amber-400 focus:outline-none"
                  placeholder="you@example.com"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="date" className="mb-1 block text-sm font-medium text-stone-700">
                    Date
                  </label>
                  <input
                    id="date"
                    type="date"
                    required
                    className="w-full rounded-lg border border-stone-300 px-4 py-2.5 text-sm focus:border-amber-400 focus:ring-1 focus:ring-amber-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="guests" className="mb-1 block text-sm font-medium text-stone-700">
                    Guests
                  </label>
                  <select
                    id="guests"
                    className="w-full rounded-lg border border-stone-300 px-4 py-2.5 text-sm focus:border-amber-400 focus:ring-1 focus:ring-amber-400 focus:outline-none"
                  >
                    {[1, 2, 3, 4, 5, 6].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? 'guest' : 'guests'}
                      </option>
                    ))}
                    <option value="7+">7+ guests</option>
                  </select>
                </div>
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-amber-400 py-3 font-semibold text-stone-900 transition-colors hover:bg-amber-300"
              >
                Request Reservation
              </button>
              <p className="text-center text-xs text-stone-400">
                We will confirm your booking by email within 2 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
