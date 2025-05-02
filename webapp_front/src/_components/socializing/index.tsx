import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { signInWithGoogle, storeEmailOnly } from "../../_libs/firebase";

import { useAuthStore } from "../../_stores/useAuthStore"; // ✅ Only add this


const Auth = () => {
  // Setup navigation (to move to different pages like /home)
  const navigate = useNavigate();
  

  // State variables

  const [email, setEmail] = useState(""); // To store user's email input
  const [loading, setLoading] = useState(false); // To show loading spinner
  const [formSubmitted, setFormSubmitted] = useState(false); // To animate form on submission

  const setLoggedIn = useAuthStore((state) => state.setLoggedIn); // ✅ Only add this



  const handleGoogleSignIn = async () => {
    setLoading(true); // Start loading
    const user = await signInWithGoogle();
    setLoading(false); // Stop loading after result

    if (user) {
      setLoggedIn(true); // ✅ Set login state to true

      console.log("🎉 Welcome,", user.displayName);
      navigate("explore"); // Redirect after successful Google login
    }
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload
    console.log("Submitting email:", email); // 

    if (!email) {
      alert("Please enter your email"); // Basic check
      return;
    }

    setLoading(true); // Start loading
    const success = await storeEmailOnly(email);
    setLoading(false); // Stop loading after saving

    if (success) {
      setLoggedIn(true); // ✅ Add this line
      console.log("✅ Email saved:", email);
      setFormSubmitted(true); // Trigger form animation
      setTimeout(() => {
        navigate("explore"); // Navigate after short delay for animation
      }, 500); // 0.5 second delay
    } else {
      console.error("❌ Failed to save email");
    }
  };

  return (
    <div className="flex flex-col items-center h-screen gap-6 text-3xl py-[20vh]">

      {/* Heading Text */}
      <p className="text-3xl text-primary">
        Share and explore moments over a cup of chai. ☕
      </p>

      {/* Email-Only Form */}
      <form
        onSubmit={handleEmailSubmit}
        className={`flex flex-col gap-4 w-64 text-base text-primary transition-all duration-500 ${formSubmitted ? "scale-110" : "scale-100"
          }`}
      >
        {/* Email Input Field */}
        <input
          type="email"
          placeholder="Enter your email"
          className="border-b-2 border-primary p-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* Submit Button for Email */}
        <button
          type="submit"
          disabled={loading} // Disable button while loading
          className="px-6 py-3 bg-accent hover:bg-accent-light text-white hover:text-primary text-lg rounded-full shadow-md transition-all duration-300 disabled:opacity-50"
        >
          {loading ? "Submitting..." : "Submit Email"} {/* Show submitting text */}
        </button>
      </form>
      <span className="text-base text-primary font-bold">or</span>
      {/* Google Sign-In Button */}
      <button
        onClick={handleGoogleSignIn}
        disabled={loading} // Disable button while loading
        className="px-6 py-3 bg-accent hover:bg-accent-light text-white hover:text-primary text-lg rounded-full shadow-md transition-all duration-300 disabled:opacity-50"
      >
        {loading ? "Loading..." : "Get Started with Google"} {/* Show loading text if loading */}
      </button>
    </div>
  );
};

export default Auth;
