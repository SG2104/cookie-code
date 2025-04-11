"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function AdminPanel() {
  const [auth, setAuth] = useState<any>(null);
  const [data, setData] = useState<any>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const cookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("auth="));
    if (cookie) {
      try {
        setAuth(JSON.parse(decodeURIComponent(cookie.split("=")[1])));
      } catch {}
    }

    fetch("/api/admin", { credentials: "include" })
      .then((res) => {
        const flagHeader = res.headers.get("X-Flag");
        if (flagHeader) console.log("⚠️ Teaser Header Flag:", flagHeader);
        return res.json();
      })
      .then(setData);

    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-gray-900 flex flex-col items-center justify-center p-6 text-white">
      <div className="bg-white/5 backdrop-blur-lg border border-indigo-500 p-8 rounded-2xl shadow-2xl max-w-xl w-full">
        <h1 className="text-3xl font-extrabold text-center mb-4 text-indigo-400">Final Layer Unlocked</h1>

        <div className="text-sm text-indigo-200 mb-4">
          <p><strong>User:</strong> {auth?.username}</p>
          <p><strong>Admin:</strong> {auth?.admin?.toString()}</p>
        </div>

        {auth?.admin && (
          <div className="border border-gray-700 p-4 rounded-lg shadow bg-black/40">
            <p className="text-indigo-300 text-sm mb-2">This image seems unusually... interesting.</p>
            <Link href="http://192.168.1.223:4000/image" download="cyber.jpg">
              <Image
                src="http://192.168.1.223:4000/image"
                alt="Downloadable image"
                className="rounded-lg border border-indigo-500 hover:scale-105 transition duration-300"
                width={300} height={300}
              />
            </Link>
            <p className="text-xs text-gray-300 mt-2 italic">This isn’t just an image — it holds more than pixels. Metadata doesn’t lie.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}