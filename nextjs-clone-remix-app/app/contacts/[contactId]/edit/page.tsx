import { notFound, redirect } from "next/navigation";
import { getContact, updateContact } from "@/data";
import { CancelEditing } from "./_ui";

type EditContactPageProps = {
  params: {
    contactId: string;
  };
};

export default async function EditContactPage(props: EditContactPageProps) {
  const contact = await getContact(props.params.contactId);

  if (!contact) {
    notFound();
  }

  async function saveContact(contactId: string, formData: FormData) {
    "use server";

    if (!contactId) {
      throw new Error("Missing contactId param");
    }

    const updates = Object.fromEntries(formData);
    await updateContact(contactId, updates);

    return redirect(`/contacts/${contactId}`);
  }

  return (
    <form
      key={contact.id}
      id="contact-form"
      action={saveContact.bind(null, props.params.contactId)}
    >
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
        <CancelEditing />
      </p>
    </form>
  );
}
