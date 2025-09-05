import React from "react";

const Footer = () => {
  return (
    <>
      <div
        className="text-white py-10"
        style={{ backgroundColor: "#0d0a18" }}
      >
        <div className="container text-center">
          <h1 className="text-3xl font-bold tracking-wide">
            Let&apos;s Play the Game
          </h1>
          <hr className="w-[150px] mx-auto my-4 border-t-2 border-white/30" />
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} ALL RIGHTS RESERVED BY VISHESH
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
