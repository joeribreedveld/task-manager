"use server";

import { db } from "@/db";
import { tasks } from "@/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function getTasks() {
  return await db.select().from(tasks);
}

export async function deleteTask(id: number) {
  await db.delete(tasks).where(eq(tasks.id, id));

  revalidatePath("/");
}

export async function createTask(title: string) {
  await db.insert(tasks).values({ title, status: "todo" });

  revalidatePath("/");
}

export async function updateTask(id: number, title: string, status: string) {
  return await db.update(tasks).set({ title, status }).where(eq(tasks.id, id));
}
