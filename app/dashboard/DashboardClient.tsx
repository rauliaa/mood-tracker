"use client";

import { signOut } from "next-auth/react";

export default function DashboardClient({ name }: { name: string }) {
  return (
    <div>
      <h1>Welcome, {name}</h1>
      <button
        onClick={() => signOut({ callbackUrl: "/login" })}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
      >
        Logout
      </button>
    </div>
  );
}
