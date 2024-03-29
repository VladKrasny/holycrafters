"use client";

import { useRouter } from "next/navigation";

type EditContactProps = {
  contactId: string;
};

export function EditContact(props: EditContactProps) {
  const router = useRouter();

  function onClick() {
    router.push(`/contacts/${props.contactId}/edit`);
  }

  return <button onClick={onClick}>Edit with JS</button>;
}
