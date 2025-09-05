import React, { useState } from "react";

const AuthModal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-gray-900 p-6 rounded-2xl max-w-sm w-full relative">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 text-white text-xl font-bold hover:text-red-500"
        >
          ×
        </button>

        {/* Modal Title */}
        <h2 className="text-2xl font-bold mb-4 text-white">
          {isLogin ? "Login" : "Sign Up"}
        </h2>

        {/* Form */}
        <form className="flex flex-col gap-3">
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="p-2 rounded-lg bg-gray-800 text-white"
              required
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="p-2 rounded-lg bg-gray-800 text-white"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="p-2 rounded-lg bg-gray-800 text-white"
            required
          />
          {!isLogin && (
            <input
              type="tel"
              placeholder="Phone Number"
              className="p-2 rounded-lg bg-gray-800 text-white"
              required
            />
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 py-2 rounded-xl font-semibold text-white transition"
            onClick={(e) => {
              e.preventDefault();
              alert(`${isLogin ? "Logged in" : "Signed up"} successfully!`);
              onClose();
            }}
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        {/* Toggle Login/Sign Up */}
        <p className="text-sm text-gray-400 mt-3 text-center">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            type="button"
            className="text-blue-400 cursor-pointer hover:underline"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthModal;
