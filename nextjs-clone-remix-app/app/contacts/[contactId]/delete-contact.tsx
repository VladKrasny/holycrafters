"use client";

export function DeleteContact(props: { action: (formData: FormData) => void }) {
  return (
    <form
      action={props.action}
      onSubmit={(event) => {
        const isConfirmed = confirm(
          "Please confirm you want to delete this record."
        );

        if (!isConfirmed) {
          event.preventDefault();
        }
      }}
    >
      <button type="submit">Delete</button>
    </form>
  );
}
