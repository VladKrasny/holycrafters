import type { Metadata } from "next";
import type { PropsWithChildren } from "react";
import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";

import type { ContactRecord } from "./_data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout(props: PropsWithChildren) {
  const q = "";
  const searching = false;
  const contacts: ContactRecord[] = [
    {
      id: "1",
      createdAt: "",
      first: "Your",
      last: "Name",
    },
    {
      id: "1",
      createdAt: "",
      first: "Your",
      last: "Friend",
    },
  ];

  return (
    <html lang="en">
      <body className={inter.className}>
        <div id="sidebar">
          <h1>Remix Contacts</h1>
          <div>
            <form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search contacts"
                className={searching ? "loading" : ""}
                placeholder="Search"
                type="search"
                name="q"
                defaultValue={q || ""}
              />
              <div id="search-spinner" aria-hidden hidden={!searching} />
            </form>
            <form>
              <button type="submit">New</button>
            </form>
          </div>
          <nav>
            {contacts.length ? (
              <ul>
                {contacts.map((contact) => (
                  <li key={contact.id}>
                    {/* isActive ? "active" : isPending ? "pending" : "" */}
                    <Link href={`/contacts/${contact.id}`}>
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
        </div>

        {/* navigation.state === "loading" && !searching ? "loading" : "" */}
        <div className={""} id="detail">
          {props.children}
        </div>
      </body>
    </html>
  );
}
