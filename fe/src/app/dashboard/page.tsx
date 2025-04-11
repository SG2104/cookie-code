"use client";

import { useEffect, useState } from "react";

export default function Dashboard() {
  const [auth, setAuth] = useState<any>(null);

  useEffect(() => {
    const cookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("auth="));
    if (cookie) {
      try {
        setAuth(JSON.parse(decodeURIComponent(cookie.split("=")[1])));
      } catch {}
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-100 via-zinc-200 to-stone-50 flex flex-col items-center justify-center p-6 text-gray-900">
      <div className="bg-white border border-zinc-300 shadow-lg rounded-2xl p-8 max-w-xl w-full text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-zinc-800">
          Welcome, {auth?.username || "Guest"}
        </h2>
        <p className="text-sm text-zinc-600 mb-6">
          Admin Privileges:{" "}
          <span className="text-amber-600 font-bold">
            {auth?.admin?.toString() || "false"}
          </span>
        </p>
        <a
          href="/admin"
          className="inline-block px-5 py-2 bg-amber-500 text-white font-bold rounded-full hover:bg-amber-600 transition-all shadow-md"
        >
          Enter the Admin Realm
        </a>
      </div>
    </div>
  );
}
