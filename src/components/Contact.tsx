'use client';

import { useActionState } from 'react';
import { createBooking, initialBookingActionState } from '@/app/actions/bookings';

export default function Contact() {
  const [formState, formAction, isPending] = useActionState(
    createBooking,
    initialBookingActionState,
  );

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
            <form className="space-y-4" action={formAction}>
              <div>
                <label
                  htmlFor="name"
                  className="mb-1 block text-xs font-medium tracking-[0.14em] text-[#3d5055] uppercase"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-xl border border-[#183d3f]/20 bg-white/90 px-4 py-2.5 text-sm text-[#1d2a2e] focus:border-[#b07a2f] focus:ring-1 focus:ring-[#b07a2f] focus:outline-none"
                  placeholder="Hiroshi Tanaka"
                />
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
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-xl border border-[#183d3f]/20 bg-white/90 px-4 py-2.5 text-sm text-[#1d2a2e] focus:border-[#b07a2f] focus:ring-1 focus:ring-[#b07a2f] focus:outline-none"
                  placeholder="you@example.com"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1 block text-xs font-medium tracking-[0.14em] text-[#3d5055] uppercase"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className="w-full rounded-xl border border-[#183d3f]/20 bg-white/90 px-4 py-2.5 text-sm text-[#1d2a2e] focus:border-[#b07a2f] focus:ring-1 focus:ring-[#b07a2f] focus:outline-none"
                    placeholder="(415) 555-0123"
                  />
                </div>
                <div>
                  <label
                    htmlFor="partySize"
                    className="mb-1 block text-xs font-medium tracking-[0.14em] text-[#3d5055] uppercase"
                  >
                    Guests
                  </label>
                  <select
                    id="partySize"
                    name="partySize"
                    required
                    className="w-full rounded-xl border border-[#183d3f]/20 bg-white/90 px-4 py-2.5 text-sm text-[#1d2a2e] focus:border-[#b07a2f] focus:ring-1 focus:ring-[#b07a2f] focus:outline-none"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? 'guest' : 'guests'}
                      </option>
                    ))}
                    <option value="10">10+ guests</option>
                  </select>
                </div>
              </div>
              <div>
                <label
                  htmlFor="reservationAt"
                  className="mb-1 block text-xs font-medium tracking-[0.14em] text-[#3d5055] uppercase"
                >
                  Date & Time
                </label>
                <input
                  id="reservationAt"
                  name="reservationAt"
                  type="datetime-local"
                  required
                  className="w-full rounded-xl border border-[#183d3f]/20 bg-white/90 px-4 py-2.5 text-sm text-[#1d2a2e] focus:border-[#b07a2f] focus:ring-1 focus:ring-[#b07a2f] focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="specialRequests"
                  className="mb-1 block text-xs font-medium tracking-[0.14em] text-[#3d5055] uppercase"
                >
                  Special Requests
                </label>
                <textarea
                  id="specialRequests"
                  name="specialRequests"
                  rows={3}
                  className="w-full rounded-xl border border-[#183d3f]/20 bg-white/90 px-4 py-2.5 text-sm text-[#1d2a2e] focus:border-[#b07a2f] focus:ring-1 focus:ring-[#b07a2f] focus:outline-none"
                  placeholder="Dietary restrictions, accessibility needs, or seating preference"
                />
              </div>
              <button
                type="submit"
                disabled={isPending}
                className="w-full rounded-full bg-[#183d3f] py-3 text-sm font-semibold tracking-[0.16em] text-amber-50 uppercase hover:-translate-y-0.5 hover:bg-[#1e4c4e]"
              >
                {isPending ? 'Sending Request...' : 'Request Reservation'}
              </button>
              <p
                className={`text-center text-xs tracking-wide ${
                  formState.status === 'error' ? 'text-red-700' : 'text-[#56686c]'
                }`}
                aria-live="polite"
              >
                {formState.message || 'We will confirm your booking by email within 2 hours.'}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
