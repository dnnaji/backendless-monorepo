import { pgTable, text, boolean, json, timestamp } from "drizzle-orm/pg-core";
import type { PgTableWithColumns } from "drizzle-orm/pg-core";

// New table to store managed jobs
export const jobs: PgTableWithColumns<unknown> = pgTable("jobs", {
  id: text("id").primaryKey().notNull(), // using a string ID
  name: text("name").notNull(),
  active: boolean("active").notNull().default(true),
  url: text("url").notNull(),
  method: text("method").notNull(),
  headers: json("headers").$type<Record<string, string>>().notNull().default({}),
  body: json("body").$type<any>().notNull().default({}),
  schedule: text("schedule").notNull(),
  lastStatus: text("last_status").notNull().default("Pending"),
  lastRun: timestamp("last_run").notNull().default(new Date(0)),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});
