import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-[#0d0a18] text-white text-2xl font-bold">
      Loading<span className="animate-pulse">...</span>
    </div>
  );
};

export default Loader;
