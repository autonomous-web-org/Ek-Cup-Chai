
const Social = () => {
    return (
      <div className="flex flex-col gap-2 items-center justify-center h-screen bg-gradient-to-br from-yellow-200 to-amber-200 text-3xl font-semibold text-amber-800 margin-10px">
        <p>🌐 Welcome to the Socialize Page!</p>
        <p className="text-lg mt-2 text-amber-600 ">More chai, more friends, more fun ☕</p>
        <button
          className="px-4 py-2 bg-amber-500 hover:bg-blue-600 text-white text-lg font-semibold rounded-full shadow-md transition-all duration-300 animate-bounce"
        >
          Get Started
        </button>
      </div>
    );
  };
  
  export default Social;
  