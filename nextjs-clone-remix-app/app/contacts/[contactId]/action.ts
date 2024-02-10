"use server";

import { redirect } from "next/navigation";
import { deleteContact as _deleteContact } from "@/app/_data";

export async function deleteContact(contactId: string) {
  if (!contactId) {
    throw new Error("Missing contactId param");
  }

  await _deleteContact(contactId);

  return redirect(`/`);
}
