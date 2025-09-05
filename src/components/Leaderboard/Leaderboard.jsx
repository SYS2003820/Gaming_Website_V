import React from "react";
import { motion } from "framer-motion";

const leaderboardData = [
  { name: "PlayerOne", score: 9800 },
  { name: "DragonSlayer", score: 9200 },
  { name: "AceGamer", score: 8900 },
  { name: "NightHawk", score: 8500 },
];

const Leaderboard = () => {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold mb-8 text-center text-gradient bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        🏆 Leaderboard
      </h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {leaderboardData.map((player, index) => (
          <motion.div
            key={index}
            className="bg-[#0d0a18]/80 p-6 rounded-2xl text-center cursor-pointer
                       hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold mb-2">
              {player.name}{" "}
              {index === 0 && "🥇"}
              {index === 1 && "🥈"}
              {index === 2 && "🥉"}
            </h3>
            <motion.p
              className="text-gray-300 font-bold text-lg"
              initial={{ count: 0 }}
              animate={{ count: player.score }}
              transition={{ duration: 1 }}
            >
              {Math.floor(player.score)}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Leaderboard;
