"use server";

import { redirect } from "next/navigation";
import { createEmptyContact } from "./_data";

export async function createContact() {
  const contact = await createEmptyContact();

  redirect(`/contacts/${contact.id}/edit`);
}
