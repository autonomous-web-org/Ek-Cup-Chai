// src/pages/index.tsx

// 1. React Hooks for state management and navigation
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// 2. Importing Firebase helper functions
import { signInWithGoogle, storeEmailOnly } from "../../_libs/firebase";

// 3. Main Index component
const Index = () => {
  // Setup navigation (to move to different pages like /home)
  const navigate = useNavigate();

  // State variables
  const [email, setEmail] = useState(""); // To store user's email input
  const [loading, setLoading] = useState(false); // To show loading spinner
  const [formSubmitted, setFormSubmitted] = useState(false); // To animate form on submission

  // 4. Function to handle Google Sign-In button click
  const handleGoogleSignIn = async () => {
    setLoading(true); // Start loading
    const user = await signInWithGoogle();
    setLoading(false); // Stop loading after result

    if (user) {
      console.log("🎉 Welcome,", user.displayName);
      navigate("/home"); // Redirect after successful Google login
    }
  };

  // 5. Function to handle email-only form submission
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
      console.log("✅ Email saved:", email);
      setFormSubmitted(true); // Trigger form animation
      setTimeout(() => {
        navigate("/home"); // Navigate after short delay for animation
      }, 500); // 0.5 second delay
    } else {
      console.error("❌ Failed to save email");
    }
  };

  // 6. JSX: What gets shown on the page
  return (
    <div className="flex flex-col items-center h-screen gap-6 text-3xl py-[20vh]">

      {/* Heading Text */}
      <p className="text-3xl text-primary">
        Share and explore moments over a cup of chai. ☕
      </p>

      {/* Google Sign-In Button */}
      <button
        onClick={handleGoogleSignIn}
        disabled={loading} // Disable button while loading
        className="px-4 py-2 bg-accent hover:bg-accent-light text-white hover:text-primary text-lg rounded-full shadow-md transition-all duration-300 animate-bounce disabled:opacity-50"
      >
        {loading ? "Loading..." : "Get Started with Google"} {/* Show loading text if loading */}
      </button>

      {/* Email-Only Form */}
      <form
        onSubmit={handleEmailSubmit}
        className={`flex flex-col gap-4 w-64 text-base text-primary transition-all duration-500 ${
          formSubmitted ? "scale-110" : "scale-100"
        }`}
      >
        {/* Email Input Field */}
        <input
          type="email"
          placeholder="Enter your email"
          className="border border-primary rounded-md p-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* Submit Button for Email */}
        <button
          type="submit"
          disabled={loading} // Disable button while loading
          className="px-4 py-2 bg-primary hover:bg-accent-light text-white hover:text-primary text-lg rounded-full shadow-md transition-all duration-300 disabled:opacity-50"
        >
          {loading ? "Submitting..." : "Submit Email"} {/* Show submitting text */}
        </button>
      </form>

    </div>
  );
};

// 7. Exporting component so it can be used in routes
export default Index;
