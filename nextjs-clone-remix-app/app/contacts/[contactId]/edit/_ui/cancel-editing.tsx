"use client";

import { useRouter } from "next/navigation";

export function CancelEditing() {
  const router = useRouter();

  return (
    <button type="button" onClick={router.back}>
      Cancel
    </button>
  );
}
