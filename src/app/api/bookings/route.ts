import { getBookingRecords } from '@/lib/bookings-db';

export const dynamic = 'force-dynamic';

export async function GET() {
  const bookings = getBookingRecords();

  return Response.json({
    count: bookings.length,
    bookings: bookings.map((booking) => ({
      id: booking.id,
      name: booking.name,
      email: booking.email,
      phone: booking.phone,
      reservationAt: booking.reservationAt,
      partySize: booking.partySize,
      specialRequests: booking.specialRequests,
      createdAt: booking.createdAt,
    })),
  });
}
