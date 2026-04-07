import { getBookingRecords } from '@/lib/bookings-db';

export const dynamic = 'force-dynamic';

function formatReservationDate(value: string): string {
  return new Intl.DateTimeFormat('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(new Date(value));
}

export default async function AdminBookingsPage() {
  const bookings = getBookingRecords();

  return (
    <main className="min-h-screen bg-[#f6f3ec] px-6 py-10 text-[#1d2a2e]">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-2 text-4xl font-semibold">Reservation Submissions</h1>
        <p className="mb-8 text-sm text-[#4e6065]">
          Total bookings: <strong>{bookings.length}</strong>
        </p>

        {bookings.length === 0 ? (
          <div className="rounded-xl border border-[#183d3f]/20 bg-white p-6 text-sm">
            No booking submissions yet.
          </div>
        ) : (
          <div className="overflow-x-auto rounded-xl border border-[#183d3f]/20 bg-white shadow-sm">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-[#f2ece0] text-xs tracking-[0.08em] uppercase">
                <tr>
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Email</th>
                  <th className="px-4 py-3">Phone</th>
                  <th className="px-4 py-3">Reservation</th>
                  <th className="px-4 py-3">Party Size</th>
                  <th className="px-4 py-3">Special Requests</th>
                  <th className="px-4 py-3">Submitted</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking.id} className="border-t border-[#183d3f]/10 align-top">
                    <td className="px-4 py-3">{booking.name}</td>
                    <td className="px-4 py-3">{booking.email}</td>
                    <td className="px-4 py-3">{booking.phone}</td>
                    <td className="px-4 py-3">{formatReservationDate(booking.reservationAt)}</td>
                    <td className="px-4 py-3">{booking.partySize}</td>
                    <td className="px-4 py-3">{booking.specialRequests || '-'}</td>
                    <td className="px-4 py-3">{formatReservationDate(booking.createdAt)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
}
