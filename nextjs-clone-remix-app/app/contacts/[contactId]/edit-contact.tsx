"use client";
import { useRouter } from "next/navigation";

export function EditContact(props: { contactId: string }) {
  const router = useRouter();

  function onClick() {
    router.push(`/contacts/${props.contactId}/edit`);
  }

  return <button onClick={onClick}>Edit with JS</button>;
}
