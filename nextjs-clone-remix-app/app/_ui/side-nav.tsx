"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ContactRecord } from "@/data";

export function SideNav(props: { contacts: ContactRecord[] }) {
  const pathname = usePathname();

  return (
    <nav>
      {props.contacts.length ? (
        <ul>
          {props.contacts.map((contact) => (
            <li key={contact.id}>
              <Link
                className={`${
                  pathname.startsWith(`/contacts/${contact.id}`) ? "active" : ""
                }`}
                href={`/contacts/${contact.id}`}
              >
                {contact.first || contact.last ? (
                  <>
                    {contact.first} {contact.last}
                  </>
                ) : (
                  <i>No Name</i>
                )}{" "}
                {contact.favorite ? <span>★</span> : null}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>
          <i>No contacts</i>
        </p>
      )}
    </nav>
  );
}
