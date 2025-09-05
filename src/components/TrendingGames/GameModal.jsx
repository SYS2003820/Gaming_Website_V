// src/components/GameModal/GameModal.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBookmark, FaFire } from "react-icons/fa";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 0.6 },
};

const modalVariants = {
  hidden: { opacity: 0, y: -50, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, y: -50, scale: 0.9, transition: { duration: 0.3 } },
};

const GameModal = ({ isOpen, onClose, game }) => {
  if (!game) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black z-50"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
          />

          {/* Modal Box */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div
              className="bg-gray-900 rounded-2xl shadow-xl p-6 max-w-md w-full relative"
              variants={modalVariants}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-3 right-3 text-white text-2xl font-bold hover:text-red-500 transition"
              >
                ×
              </button>

              {/* Bookmark & Hot Icons */}
              <div className="absolute top-3 left-3 flex gap-3">
                <FaBookmark className="text-white hover:text-yellow-400 cursor-pointer transition" />
                <FaFire className="text-red-500 cursor-pointer animate-pulse" />
              </div>

              {/* Game Content */}
              <img
                src={game.image}
                alt={game.title}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h2 className="text-2xl font-bold mb-2">{game.title}</h2>
              <p className="text-gray-300 mb-4">{game.description}</p>
              <p className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                Followers: {game.followers} <span className="text-red-500">🔥</span>
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => alert(`Purchasing ${game.title}!`)}
                  className="w-full bg-green-500 hover:bg-green-600 px-4 py-2 rounded-xl font-semibold transition"
                >
                  Purchase Now
                </button>
                <button
                  onClick={() => alert(`Launching ${game.title}!`)}
                  className="w-full bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-xl font-semibold transition"
                >
                  Play Now
                </button>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default GameModal;
