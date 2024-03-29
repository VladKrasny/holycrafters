import Image from "next/image";
import { notFound } from "next/navigation";
import { redirect } from "next/navigation";
import { getContact, deleteContact as _deleteContact } from "@/data";
import { DeleteContact, EditContact, Favorite } from "./_ui";

type ContactPageProps = {
  params: {
    contactId: string;
  };
};

export default async function ContactPage(props: ContactPageProps) {
  const contact = await getContact(props.params.contactId);

  if (!contact) {
    notFound();
  }

  async function editContact() {
    "use server";

    redirect(`/contacts/${props.params.contactId}/edit`);
  }

  async function deleteContact(contactId: string) {
    "use server";

    if (!contactId) {
      throw new Error("Missing contactId param");
    }

    await _deleteContact(contactId);

    return redirect(`/`);
  }

  return (
    <div id="contact">
      {contact.avatar && (
        <div>
          <Image
            width={200}
            height={200}
            alt={`${contact.first} ${contact.last} avatar`}
            key={contact.avatar}
            src={contact.avatar}
          />
        </div>
      )}

      <div>
        <h1>
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}{" "}
          <Favorite contact={contact} />
        </h1>

        {contact.twitter ? (
          <p>
            <a href={`https://twitter.com/${contact.twitter}`}>
              {contact.twitter}
            </a>
          </p>
        ) : null}

        {contact.notes ? <p>{contact.notes}</p> : null}

        <div>
          <form action={editContact}>
            <button type="submit">Edit with no JS</button>
          </form>

          <EditContact contactId={props.params.contactId} />

          <DeleteContact
            action={deleteContact.bind(null, props.params.contactId)}
          />
        </div>
      </div>
    </div>
  );
}
