"use client";

import type { ContactRecord } from "@/data";

type FavoriteProps = {
  contact: Pick<ContactRecord, "favorite">;
};

export function Favorite(props: FavoriteProps) {
  const favorite = props.contact.favorite;

  return (
    <form>
      <button
        aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
        name="favorite"
        value={favorite ? "false" : "true"}
      >
        {favorite ? "★" : "☆"}
      </button>
    </form>
  );
}
