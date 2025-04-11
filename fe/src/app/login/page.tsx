"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Login() {
  const [username, setUsername] = useState("");
  const router = useRouter();

  const login = async () => {
    if (!username.trim()) return;
    await axios.post("/api/login", { username }, { withCredentials: true });
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-neutral-800 to-zinc-950 flex flex-col items-center justify-center p-6">
      <div className="bg-zinc-800 shadow-2xl rounded-xl p-6 max-w-md w-full text-center border border-zinc-700">
        <h2 className="text-3xl font-extrabold mb-6 text-zinc-100">
          Login Portal
        </h2>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your Role"
          className="w-full px-4 py-2 border border-zinc-600 bg-zinc-900 text-zinc-100 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-zinc-500"
        />
        <button
          onClick={login}
          disabled={!username.trim()}
          className="w-full bg-zinc-600 text-white py-2 rounded-lg hover:bg-zinc-500 transition font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Enter
        </button>
        <div className="mt-6 text-sm">
          <p className="text-zinc-300 italic">
            <span className="font-bold text-zinc-100">Hint:</span> The system
            only responds to those with the highest privileges. This is not a name, but a{" "}
            <span className="font-bold text-zinc-50">Role</span>.
          </p>
        </div>
      </div>
    </div>
  );
}
