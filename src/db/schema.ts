// src/db/schema.ts
import { pgTable, serial, varchar, text, integer, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  name: text("name").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const bookings = pgTable("bookings", {
  id: serial("id").primaryKey(),
  eventId: integer("event_id").notNull(),
  zoneId: varchar("zone_id", { length: 10 }).notNull(),
  licensePlate: text("license_plate").notNull(),
  carMake: text("car_make").notNull(),
  carColor: text("car_color").notNull(),
  userEmail: text("user_email").notNull(), // for email confirmation
  createdAt: timestamp("created_at").defaultNow(),
});
