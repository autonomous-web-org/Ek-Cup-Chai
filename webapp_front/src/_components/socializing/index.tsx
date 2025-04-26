// import Fan from "/src/assets/social_index/fan_nb.png";

import { signInWithGoogle } from "../../_libs/firebase";

const Social = () => {
  const handleGoogleSignIn = async () => {
    const user = await signInWithGoogle();
    if (user) {
      console.log("🎉 Welcome,", user.displayName);
      // You can add redirect or toast here
    }
  };

  return (
    <div className="flex flex-col items-center h-screen gap-9 text-3xl py-[30vh]">
      <p className="text-3xl text-primary">
         Share and explore moments over a cup of chai. ☕
      </p>
      <button
        onClick={handleGoogleSignIn}
        className="px-4 py-2 bg-accent hover:bg-accent-light text-white hover:text-primary text-lg rounded-full shadow-md transition-all duration-300 animate-bounce"
      >
        Get Started
      </button>

      {/* <img src={""} alt="chai break" /> */}
    </div>
  );
};

export default Social;
