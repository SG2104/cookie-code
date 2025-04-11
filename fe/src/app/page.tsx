"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 flex items-center justify-center p-6">
      <div className="bg-white/5 backdrop-blur-md border border-gray-700 p-8 rounded-2xl shadow-2xl max-w-xl w-full text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
          Are You Smart Enough to Fool the System?
        </h1>
        <p className="text-gray-300 mb-4">
          A flag is hidden inside this seemingly innocent application. It’s protected by layers of logic, deception, and digital walls.
        </p>
        <p className="text-gray-300 mb-4">
          But what if... the system doesn’t check who you really are?
        </p>
        <p className="text-gray-400 text-sm italic mb-8">
          Spoiler: not everything is secure. Cookies can crumble.
        </p>
        <button
          onClick={() => router.push("/login")}
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-6 rounded-full shadow-md transition transform hover:scale-105"
        >
          Begin Your Mission
        </button>
      </div>
    </div>
  );
}



// Can You Trick the System into Trusting You?
// Behind this interface lies a hidden flag, shielded by permissions and roles.
// But roles can be faked, and trust can be broken.
// Hint: Sometimes, the browser tells a better story than the backend.



// Ever Lied to a Cookie?
// This system doesn’t verify much. That might be a problem — or your opportunity.
// What happens if you tell it you're someone important?
// Some cookies were made to be broken.



// Only Admins Can See the Truth. Or Can They?
// This isn’t about passwords. It’s about roles — and the system assumes you're honest.
// What if you weren’t?
// The flag is closer than you think.



// Is Your Identity Really Being Checked?
// You filled out the form. You clicked "Login." The server smiled and let you in.
// But did it ever really verify who you are?
// What if the system just believes what it's told?



// Can You Unlock the Flag Just by Changing Your Identity?
// (Hint: The server trusts the cookie. The cookie trusts... you.)



// This App Believes You. What If You Lied?
// (Hint: Cookies are sweet, but they're also very trusting.)



// How Far Can You Go With Just a Cookie and a Bit of Imagination?
// (Hint: One edit. One role. One flag waiting.)