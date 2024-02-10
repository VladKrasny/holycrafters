import { notFound } from "next/navigation";
import { getContact } from "@/app/_data";
import { saveContact } from "./action";

type EditContactPageProps = {
  params: {
    contactId: string;
  };
};

export default async function EditContactPage(props: EditContactPageProps) {
  const saveContactWithId = saveContact.bind(null, props.params.contactId);

  const contact = await getContact(props.params.contactId);

  if (!contact) {
    notFound();
  }

  return (
    <form key={contact.id} id="contact-form" action={saveContactWithId}>
      <p>
        <span>Name</span>
        <input
          defaultValue={contact.first}
          aria-label="First name"
          name="first"
          type="text"
          placeholder="First"
        />
        <input
          aria-label="Last name"
          defaultValue={contact.last}
          name="last"
          placeholder="Last"
          type="text"
        />
      </p>
      <label>
        <span>Twitter</span>
        <input
          defaultValue={contact.twitter}
          name="twitter"
          placeholder="@jack"
          type="text"
        />
      </label>
      <label>
        <span>Avatar URL</span>
        <input
          aria-label="Avatar URL"
          defaultValue={contact.avatar}
          name="avatar"
          placeholder="https://example.com/avatar.jpg"
          type="text"
        />
      </label>
      <label>
        <span>Notes</span>
        <textarea defaultValue={contact.notes} name="notes" rows={6} />
      </label>
      <p>
        <button type="submit">Save</button>
        <button type="button">Cancel</button>
      </p>
    </form>
  );
}
