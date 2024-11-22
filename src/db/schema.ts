import {
  pgTable,
  serial,
  timestamp,
  varchar,
  pgEnum,
} from "drizzle-orm/pg-core";

const statusEnum = pgEnum("status_enum", ["todo", "in-progress", "done"]);

export const tasks = pgTable("tasks", {
  id: serial().primaryKey(),
  title: varchar(),
  status: statusEnum(),
  createdAt: timestamp().defaultNow(),
  updatedAt: timestamp().defaultNow(),
});

export type TTask = typeof tasks.$inferSelect;
