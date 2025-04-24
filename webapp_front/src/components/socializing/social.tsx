import { signInWithGoogle as googleSignIn } from "../firebaseConfig";

const Social = () => {
  const handleGoogleSignIn = async () => {
    const user = await googleSignIn();
    if (user) {
      console.log("🎉 Welcome,", user.displayName);
      // You can add redirect or toast here
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6 bg-gradient-to-br from-yellow-100 to-amber-200 text-3xl font-semibold text-amber-800">
      <p>🌐 Welcome to the Socialize Page!</p>
      <p className="text-lg text-amber-600">More chai, more friends, more fun ☕</p>
      <button
        onClick={handleGoogleSignIn}
        className="px-4 py-2 bg-amber-500 hover:bg-blue-600 text-white text-lg font-semibold rounded-full shadow-md transition-all duration-300 animate-bounce"
      >
        Get Started
      </button>
    </div>
  );
};

export default Social;
