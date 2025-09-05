import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import TrendingGames from "./components/TrendingGames/TrendingGames.jsx";
import RecommendedArticles from "./components/RecommendedArticles/RecommendedArticles.jsx";
import WhatsNew from "./components/WhatsNew/WhatsNew.jsx";
import Footer from "./components/Footer/Footer.jsx";

import Loader from "./components/Loader/Loader.jsx";
import Leaderboard from "./components/Leaderboard/Leaderboard.jsx";
import LivePoll from "./components/LivePoll/LivePoll.jsx";

// New interactive components
import CustomCursor from "./components/CustomCursor/CustomCursor.jsx";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress.jsx";
import ParticlesBg from "./components/ParticlesBg/ParticlesBg.jsx";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [showVoteNotification, setShowVoteNotification] = useState(false);

  // Simulate loading screen
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Show vote notification for 1.5s
  const handleVoteNotification = () => {
    setShowVoteNotification(true);
    setTimeout(() => setShowVoteNotification(false), 1500);
  };

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen w-full bg-[#1f133b] text-white overflow-x-hidden relative">
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Navbar */}
      <Navbar />

      {/* Hero Section with Particles */}
      <div className="relative">
        <ParticlesBg />
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Hero />
        </motion.div>
      </div>

      {/* Trending Games */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <TrendingGames hoverClass="hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300" />
      </motion.div>

      {/* Recommended Articles */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <RecommendedArticles hoverClass="hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300" />
      </motion.div>

      {/* Whats New */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <WhatsNew hoverClass="hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300" />
      </motion.div>

      {/* Leaderboard */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Leaderboard />
      </motion.div>

      {/* Live Poll */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <LivePoll onVote={handleVoteNotification} />
      </motion.div>

      {/* Vote Notification */}
      <AnimatePresence>
        {showVoteNotification && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 right-10 bg-blue-500 text-white px-4 py-2 rounded shadow-lg z-50"
          >
            ✅ Vote Registered!
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Footer />
      </motion.div>
    </div>
  );
};

export default App;
