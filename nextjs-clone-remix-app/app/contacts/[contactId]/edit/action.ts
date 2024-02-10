"use server";

import { redirect } from "next/navigation";
import { updateContact } from "@/app/_data";

export async function saveContact(contactId: string, formData: FormData) {
  if (!contactId) {
    throw new Error("Missing contactId param");
  }

  const updates = Object.fromEntries(formData);
  await updateContact(contactId, updates);

  return redirect(`/contacts/${contactId}`);
}
