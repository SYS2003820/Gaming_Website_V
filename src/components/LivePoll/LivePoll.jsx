import React, { useState } from "react";
import { motion } from "framer-motion";

const pollOptions = ["Viking Valhalla", "BGMI", "Last of Us"];
const initialVotes = [0, 0, 0];

const LivePoll = ({ onVote }) => {
  const [votes, setVotes] = useState(initialVotes);

  const handleVote = (index) => {
    const newVotes = [...votes];
    newVotes[index] += 1;
    setVotes(newVotes);
    if (onVote) onVote(); // triggers popup in App.jsx
  };

  const totalVotes = votes.reduce((acc, val) => acc + val, 0);

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold mb-8 text-center text-gradient bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        📊 Vote Your Favorite Game
      </h2>

      <div className="flex flex-col sm:flex-row justify-center gap-6">
        {pollOptions.map((game, index) => {
          const percentage = totalVotes ? (votes[index] / totalVotes) * 100 : 0;

          return (
            <div
              key={index}
              className="bg-[#0d0a18]/80 p-6 rounded-2xl text-center cursor-pointer
                         hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 w-full sm:w-64"
              onClick={() => handleVote(index)}
            >
              <h3 className="text-xl font-semibold mb-2">{game}</h3>
              <p className="text-gray-300 mb-2">Votes: {votes[index]}</p>

              <div className="w-full h-4 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  className="h-4 bg-blue-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${percentage}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <p className="text-gray-400 text-sm mt-1">{percentage.toFixed(1)}%</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LivePoll;
