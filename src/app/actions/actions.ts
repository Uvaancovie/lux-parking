// src/app/actions.ts
"use server";

import { sql } from "@/db/db";

export async function createBooking(data: {
  eventId: number;
  zoneId: string;
  licensePlate: string;
  carMake: string;
  carColor: string;
  userEmail: string;
}) {
  try {
    await sql`
      INSERT INTO bookings (
        event_id, zone_id, license_plate, car_make, car_color, user_email
      )
      VALUES (
        ${data.eventId}, ${data.zoneId}, ${data.licensePlate},
        ${data.carMake}, ${data.carColor}, ${data.userEmail}
      )
    `;
    return { success: true };
  } catch (error) {
    console.error("Booking insert failed:", error);
    return { success: false, message: "Could not save booking." };
  }
}
