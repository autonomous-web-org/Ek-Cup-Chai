// src/pages/index.tsx
import { useState } from "react"; // 👈 To handle form input (email, password)
import { useNavigate } from "react-router-dom"; // 👈 To navigate after login
import { signInWithGoogle, loginWithEmail } from "../../_libs/firebase"; // 👈 Import your sign-in functions

const Index = () => {
  const navigate = useNavigate(); // 👈 So we can redirect after login

  // State for email and password fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handling Google Sign-In
  const handleGoogleSignIn = async () => {
    const user = await signInWithGoogle(); // 👈 Call the google login
    if (user) {
      console.log("🎉 Welcome,", user.displayName);
      navigate("/home"); // 👈 Redirect to home after login
    }
  };

  // Handling Email-Password Login
  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault(); // 👈 Prevent form reload
    const user = await loginWithEmail(email, password); // 👈 Call the email login
    if (user) {
      console.log("✅ Email Login Success:", user.email);
      navigate("/home"); // 👈 Redirect to home after login
    }
  };

  return (
    <div className="flex flex-col items-center h-screen gap-6 text-3xl py-[20vh]">
      <p className="text-3xl text-primary">
        Share and explore moments over a cup of chai. ☕
      </p>

      {/* Google Sign-In Button */}
      <button
        onClick={handleGoogleSignIn}
        className="px-4 py-2 bg-accent hover:bg-accent-light text-white hover:text-primary text-lg rounded-full shadow-md transition-all duration-300 animate-bounce"
      >
        Sign in with Google
      </button>

      {/* Email Login Form */}
      <form onSubmit={handleEmailLogin} className="flex flex-col gap-4 w-64 text-base text-primary">
        <input
          type="email"
          placeholder="Email"
          className="border border-primary rounded-md p-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // 👈 Update email state
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="border border-primary rounded-md p-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // 👈 Update password state
          required
        />
        <button
          type="submit"
          className="px-4 py-2 bg-primary hover:bg-accent-light text-white hover:text-primary text-lg rounded-full shadow-md transition-all duration-300"
        >
          Login with Email
        </button>
      </form>

    </div>
  );
};

export default Index;
