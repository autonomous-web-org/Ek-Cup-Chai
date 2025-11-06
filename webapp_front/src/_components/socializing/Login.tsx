import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { signInWithGoogle, storeEmailOnly } from "../../_libs/firebase";
import { useAuthDataStore } from "../../_stores/user_auth_data";

export default function Auth() {
  const navigate = useNavigate();
  const useAuthStore = useAuthDataStore();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  /* ---------- Handlers ---------- */
  const handleGoogleSignIn = async () => {
    setLoading(true);
    const user = await signInWithGoogle();
    setLoading(false);
    if (user) {
      console.log("🎉 Welcome,", user.displayName);
      navigate("explore");
    }
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter your email");
      return;
    }

    setLoading(true);
    const success = await storeEmailOnly(email);
    setLoading(false);

    if (success) {
      console.log("✅ Email saved:", email);
      useAuthStore.setSignInData({ email });
      setFormSubmitted(true);
      navigate("explore");
    } else {
      console.error("❌ Failed to save email");
    }
  };

  /* ---------- UI ---------- */
  return (
<<<<<<<< HEAD:webapp_front/src/Login.tsx
    <div className="min-h-screen grid place-content-center bg-[#fefcf8] px-6">
      <div className="w-full max-w-sm rounded-2xl bg-white shadow-lg ring-1 ring-black/5 p-8 relative">
        <Link 
          to="/" 
          className="absolute -left-3 -top-3 p-2 text-slate-700 hover:text-slate-900 transition-colors bg-orange-50 hover:bg-white rounded-full shadow-md hover:shadow-lg"
          aria-label="Back to home"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
========
    <section className="min-h-screen grid place-content-center bg-[#fefcf8] px-6">
      <div className="w-full max-w-sm rounded-2xl bg-white shadow-lg ring-1 ring-black/5 p-8">
>>>>>>>> cc389685fcb1a5b6b98f7abb9fca2513b0e104df:webapp_front/src/_components/auth/index.tsx
        {/* Heading */}
        <h1 className="text-center text-3xl font-bold text-slate-900">Ek Cup Chai</h1>
        <p className="mt-2 text-center text-sm font-extrabold text-slate-900">Welcome Back</p>

        {/* Form */}
        <form
          onSubmit={handleEmailSubmit}
          className={`mt-8 space-y-4 transition-transform duration-500 ${
            formSubmitted ? "scale-110" : "scale-100"
          }`}
        >
          {/* Email field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="mt-2 w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-2.5 text-sm placeholder-slate-400
                         focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/40"
            />
          </div>

          {/* Continue with Email */}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-orange-500 py-2.5 text-sm font-semibold text-white
                       hover:bg-orange-600 active:bg-orange-700 transition disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Continue with Email"}
          </button>

          {/* Divider */}
          <div className="relative my-2">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-white px-2 text-slate-400">or</span>
            </div>
          </div>

          {/* OAuth buttons */}
          <OAuthButton
            provider="google"
            icon={<FcGoogle className="h-5 w-5" />}
            onClick={handleGoogleSignIn}
            loading={loading}
          />
          <OAuthButton provider="github" icon={<FaGithub className="h-5 w-5" />} />
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-xs text-slate-500">
          This project is open-source.{" "}
          <a
            href="https://github.com/autonomous-web-org/Ek-Cup-Chai"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-orange-500"
          >
            Learn more here.
          </a>
        </p>
      </div>
    </section>
  );
}

/* Re-usable OAuth button */
function OAuthButton({ provider, icon, onClick, loading }: any) {
  const label = provider === "google" ? "Google" : "GitHub";
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={loading}
      className="flex w-full items-center justify-center gap-3 rounded-lg border border-slate-300 bg-white py-2.5
                 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 active:bg-slate-100
                 transition disabled:opacity-50"
    >
      {icon}
      {loading ? "Loading..." : `Continue with ${label}`}
    </button>
  );
}