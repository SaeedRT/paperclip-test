'use server';

import { revalidatePath } from 'next/cache';
import { createBookingRecord } from '@/lib/bookings-db';

type BookingActionState = {
  status: 'idle' | 'success' | 'error';
  message: string;
};

export const initialBookingActionState: BookingActionState = {
  status: 'idle',
  message: '',
};

export async function createBooking(
  _prevState: BookingActionState,
  formData: FormData
): Promise<BookingActionState> {
  const name = String(formData.get('name') ?? '').trim();
  const email = String(formData.get('email') ?? '').trim();
  const phone = String(formData.get('phone') ?? '').trim();
  const reservationAtRaw = String(formData.get('reservationAt') ?? '').trim();
  const partySizeRaw = String(formData.get('partySize') ?? '').trim();
  const specialRequests = String(formData.get('specialRequests') ?? '').trim();

  if (!name || !email || !phone || !reservationAtRaw || !partySizeRaw) {
    return {
      status: 'error',
      message: 'Please complete all required fields.',
    };
  }

  const reservationAt = new Date(reservationAtRaw);
  const partySize = Number.parseInt(partySizeRaw, 10);

  if (Number.isNaN(reservationAt.getTime())) {
    return {
      status: 'error',
      message: 'Please provide a valid reservation date and time.',
    };
  }

  if (!Number.isInteger(partySize) || partySize < 1 || partySize > 20) {
    return {
      status: 'error',
      message: 'Party size must be between 1 and 20.',
    };
  }

  createBookingRecord({
    name,
    email,
    phone,
    reservationAt,
    partySize,
    specialRequests: specialRequests || null,
  });

  revalidatePath('/admin/bookings');

  return {
    status: 'success',
    message: 'Reservation request received. We will confirm by email shortly.',
  };
}
