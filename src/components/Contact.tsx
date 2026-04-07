'use client';

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-[0.7rem] font-semibold tracking-[0.3em] text-[#915f1b] uppercase">
              Plan Your Evening
            </p>
            <h2 className="mb-6 text-5xl font-semibold text-[#1d2a2e] sm:text-6xl">Visit Us</h2>
            <div className="space-y-6 text-[#3d5055]">
              <div>
                <h3 className="mb-1 text-3xl font-semibold text-[#1d2a2e]">Address</h3>
                <p>123 Cherry Blossom Lane</p>
                <p>San Francisco, CA 94102</p>
              </div>
              <div>
                <h3 className="mb-1 text-3xl font-semibold text-[#1d2a2e]">Hours</h3>
                <p>Mon – Thu: 12 pm – 10 pm</p>
                <p>Fri – Sat: 12 pm – 11 pm</p>
                <p>Sunday: 1 pm – 9 pm</p>
              </div>
              <div>
                <h3 className="mb-1 text-3xl font-semibold text-[#1d2a2e]">Reservations</h3>
                <a
                  href="tel:+14155550123"
                  className="font-medium text-[#915f1b] hover:text-[#b07a2f]"
                >
                  (415) 555-0123
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-[#183d3f]/12 bg-[#fffaf0]/92 p-8 shadow-[0_20px_55px_-35px_rgba(23,42,46,0.7)] backdrop-blur-sm">
            <h3 className="mb-6 text-4xl font-semibold text-[#1d2a2e]">Reserve a Table</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="mb-1 block text-xs font-medium tracking-[0.14em] text-[#3d5055] uppercase"
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    required
                    className="w-full rounded-xl border border-[#183d3f]/20 bg-white/90 px-4 py-2.5 text-sm text-[#1d2a2e] focus:border-[#b07a2f] focus:ring-1 focus:ring-[#b07a2f] focus:outline-none"
                    placeholder="Hiroshi"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="mb-1 block text-xs font-medium tracking-[0.14em] text-[#3d5055] uppercase"
                  >
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    required
                    className="w-full rounded-xl border border-[#183d3f]/20 bg-white/90 px-4 py-2.5 text-sm text-[#1d2a2e] focus:border-[#b07a2f] focus:ring-1 focus:ring-[#b07a2f] focus:outline-none"
                    placeholder="Tanaka"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1 block text-xs font-medium tracking-[0.14em] text-[#3d5055] uppercase"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full rounded-xl border border-[#183d3f]/20 bg-white/90 px-4 py-2.5 text-sm text-[#1d2a2e] focus:border-[#b07a2f] focus:ring-1 focus:ring-[#b07a2f] focus:outline-none"
                  placeholder="you@example.com"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="date"
                    className="mb-1 block text-xs font-medium tracking-[0.14em] text-[#3d5055] uppercase"
                  >
                    Date
                  </label>
                  <input
                    id="date"
                    type="date"
                    required
                    className="w-full rounded-xl border border-[#183d3f]/20 bg-white/90 px-4 py-2.5 text-sm text-[#1d2a2e] focus:border-[#b07a2f] focus:ring-1 focus:ring-[#b07a2f] focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="guests"
                    className="mb-1 block text-xs font-medium tracking-[0.14em] text-[#3d5055] uppercase"
                  >
                    Guests
                  </label>
                  <select
                    id="guests"
                    className="w-full rounded-xl border border-[#183d3f]/20 bg-white/90 px-4 py-2.5 text-sm text-[#1d2a2e] focus:border-[#b07a2f] focus:ring-1 focus:ring-[#b07a2f] focus:outline-none"
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
                className="w-full rounded-full bg-[#183d3f] py-3 text-sm font-semibold tracking-[0.16em] text-amber-50 uppercase hover:-translate-y-0.5 hover:bg-[#1e4c4e]"
              >
                Request Reservation
              </button>
              <p className="text-center text-xs tracking-wide text-[#56686c]">
                We will confirm your booking by email within 2 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
