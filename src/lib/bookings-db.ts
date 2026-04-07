import Database from 'better-sqlite3';
import { mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';

export type BookingRecord = {
  id: number;
  name: string;
  email: string;
  phone: string;
  reservationAt: string;
  partySize: number;
  specialRequests: string | null;
  createdAt: string;
};

type NewBooking = {
  name: string;
  email: string;
  phone: string;
  reservationAt: Date;
  partySize: number;
  specialRequests: string | null;
};

const dbPath = join(process.cwd(), 'data', 'bookings.db');
mkdirSync(dirname(dbPath), { recursive: true });

const db = new Database(dbPath);

db.exec(`
  CREATE TABLE IF NOT EXISTS bookings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    reservation_at TEXT NOT NULL,
    party_size INTEGER NOT NULL,
    special_requests TEXT,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  );
`);

const insertBookingStatement = db.prepare(`
  INSERT INTO bookings (name, email, phone, reservation_at, party_size, special_requests)
  VALUES (@name, @email, @phone, @reservationAt, @partySize, @specialRequests)
`);

const listBookingsStatement = db.prepare(`
  SELECT
    id,
    name,
    email,
    phone,
    reservation_at AS reservationAt,
    party_size AS partySize,
    special_requests AS specialRequests,
    created_at AS createdAt
  FROM bookings
  ORDER BY datetime(created_at) DESC
`);

export function createBookingRecord(booking: NewBooking): void {
  insertBookingStatement.run({
    name: booking.name,
    email: booking.email,
    phone: booking.phone,
    reservationAt: booking.reservationAt.toISOString(),
    partySize: booking.partySize,
    specialRequests: booking.specialRequests,
  });
}

export function getBookingRecords(): BookingRecord[] {
  return listBookingsStatement.all() as BookingRecord[];
}
