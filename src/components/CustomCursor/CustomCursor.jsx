import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      style={{
        left: position.x,
        top: position.y,
      }}
      className="fixed pointer-events-none w-6 h-6 bg-blue-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-lg animate-pulse mix-blend-screen"
    />
  );
};

export default CustomCursor;
