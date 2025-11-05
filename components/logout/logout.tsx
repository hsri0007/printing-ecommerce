'use client'
import React from "react";
import { useRouter } from "next/navigation";

export default function AdminLogoutButton() {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);

  async function handleLogout() {
    setLoading(true);
    try {
      const res = await fetch("/api/logout", { method: "POST" });
      // regardless of response, clear client-side state and go to login
      router.push("/admin");
    } catch (err) {
      router.push("/admin");
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handleLogout}
      disabled={loading}
      className="px-3 py-1 bg-red-600 text-white rounded disabled:opacity-50"
    >
      {loading ? "Signing out..." : "Sign out"}
    </button>
  );
}