const Loader = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-base-100">
      <div className="relative">
        {/* Outer circle */}
        <div className="w-16 h-16 border-4 border-gray-200 rounded-full"></div>

        {/* Rotating Globe */}
        <div className="absolute inset-0 flex justify-center items-center text-6xl animate-spin">
          🌍
        </div>
      </div>

      <p className="mt-5 text-xl text-gray-600 font-medium animate-pulse">
        Finding your destination...
      </p>
    </div>
  );
};

export default Loader;