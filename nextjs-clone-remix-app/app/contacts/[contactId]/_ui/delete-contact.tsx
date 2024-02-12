"use client";

type DeleteContactProps = {
  action: (formData: FormData) => void;
};

export function DeleteContact(props: DeleteContactProps) {
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
