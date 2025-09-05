import React, { useState } from "react";
import { FaFire, FaBookmark, FaHotjar } from "react-icons/fa";
import { motion } from "framer-motion";
import CharacterPng1 from "../../assets/characters/character1.png";

// Import games
import Game1 from "../../assets/game/game10.png";
import Game2 from "../../assets/game/game2.jpg";
import Game3 from "../../assets/game/game3.png";
import Game4 from "../../assets/game/game4.png";
import Game5 from "../../assets/game/game5.png";
import Game6 from "../../assets/game/game6.png";
import Game7 from "../../assets/game/game7.png";
import Game8 from "../../assets/game/game8.png";
import Game9 from "../../assets/game/game9.png";
import Game11 from "../../assets/game/game789.png";
import Game12 from "../../assets/game/game12.jpg";
import Game13 from "../../assets/game/game13.png";
import Game14 from "../../assets/game/game14.png";
import Game15 from "../../assets/game/game15.png";
import Game16 from "../../assets/game/game16.png";
import Game199 from "../../assets/game/game199.png";
import Game777 from "../../assets/game/game777.png";

// Import GameModal
import GameModal from "../TrendingGames/GameModal.jsx";

const GameCardData = [
  { id: 1, title: "The Last Of Us", image: Game1, followers: 300, description: "Survive a post-apocalyptic world where every decision can mean life or death. Form deep bonds with characters, face heart-wrenching moral dilemmas, navigate ruined cities, and uncover the tragic and beautiful story of humanity's fight to survive. Experience intense stealth sequences, emotional storytelling, and unforgettable encounters that linger long after you finish the game." },
  { id: 2, title: "Valhalla", image: Game2, followers: 400, description: "Embark on epic Viking adventures across vast landscapes filled with danger, glory, and ancient secrets. Conquer lands, build your legend, forge alliances, engage in massive battles, raid settlements, and explore the rich lore of Norse mythology. Shape your character through choices, experience dynamic weather and seasons, and immerse yourself in a living world that reacts to your actions in powerful ways." },
  { id: 3, title: "God Of War", image: Game3, followers: 500, description: "Join Kratos on a brutal and emotionally charged journey of revenge and redemption across mythological realms. Fight powerful gods and monsters, solve intricate puzzles, and navigate a story full of familial bonds, loss, and personal growth. With visceral combat, stunning environments, and a deeply personal narrative, every step challenges your skill, strategy, and heart." },
  { id: 4, title: "Kaiju 8", image: Game4, followers: 250, description: "Battle colossal monsters threatening humanity, upgrade your abilities, and strategize against ever-growing kaiju threats. Engage in thrilling, high-stakes encounters, discover hidden powers, face moral and tactical decisions, and protect a world on the brink of destruction. Experience action-packed gameplay that combines skill, strategy, and epic-scale battles that leave a lasting impact." },
  { id: 5, title: "GTA VI", image: Game5, followers: 700, description: "Dive into a sprawling open-world city teeming with life, crime, and chaos. Perform daring heists, interact with a cast of complex characters, navigate high-stakes missions, and explore every corner of a living, breathing metropolis. Enjoy fast cars, explosive action, and the freedom to shape your own story while engaging in a narrative full of intrigue, power struggles, and unexpected twists." },
  { id: 6, title: "Ratchet Clank", image: Game6, followers: 450, description: "Travel across colorful galaxies with Ratchet and Clank on explosive, humorous adventures. Upgrade insane weapons, tackle unique enemies, explore diverse planets with hidden secrets, and solve challenging puzzles. Enjoy a rich blend of fast-paced combat, platforming, storytelling, and quirky humor that makes every mission exciting and memorable." },
  { id: 7, title: "Ghost of Tsushima", image: Game7, followers: 600, description: "Master the art of the samurai and protect your homeland from invading forces. Experience breathtaking landscapes, dynamic combat, stealth mechanics, and an engaging story of honor, sacrifice, and resilience. Make crucial choices that shape your path, explore villages and open fields, and immerse yourself in a world that beautifully blends history with cinematic storytelling." },
  { id: 8, title: "Call of Duty", image: Game8, followers: 550, description: "Engage in intense, realistic military combat across global battlefields. Participate in strategic missions, upgrade your weapons and gear, work as a team, and dominate both single-player and multiplayer modes. Experience high-octane action, immersive war environments, and heart-pounding scenarios where every choice and shot counts." },
  { id: 9, title: "Cyberpunk 2077", image: Game9, followers: 800, description: "Step into a sprawling futuristic dystopia filled with neon lights, cybernetic enhancements, corporate intrigue, and danger at every corner. Hack systems, upgrade your abilities, navigate morally complex choices, interact with a vibrant cast of characters, and immerse yourself in a dark, immersive story where technology and humanity collide. Explore the city streets, complete high-stakes missions, and craft your own path in a world that never sleeps." },
  { id: 10, title: "Assassin’s Creed", image: Game11, followers: 520, description: "Explore meticulously crafted historical eras and execute stealth missions with precision. Uncover secrets, assassinate key targets, shape history through impactful decisions, and traverse beautifully detailed cities. Experience epic narratives spanning generations, combining parkour, combat, strategy, and exploration into one seamless historical adventure." },
  { id: 11, title: "Marvel Spider-Man", image: Game12, followers: 380, description: "Swing through the streets of New York City as Spider-Man, taking down iconic villains while protecting innocent citizens. Engage in fluid combat, explore dynamic environments, complete thrilling side missions, and experience an emotional storyline filled with responsibility, heroism, and personal struggles. Feel the thrill of web-slinging and the weight of your choices as the city watches." },
  { id: 12, title: "Dragon Age", image: Game13, followers: 650, description: "Step into a vast, magical world filled with dragons, political intrigue, and epic role-playing adventures. Build relationships, make impactful choices, explore diverse regions, battle formidable enemies, and uncover a rich narrative that reacts to your decisions. Immerse yourself in a realm of magic, moral dilemmas, and epic quests that challenge both your strategy and your heart." },
  { id: 13, title: "Star Wars", image: Game14, followers: 420, description: "Join galactic battles, embrace the Force, pilot starships, and engage in epic lightsaber duels. Explore multiple planets, encounter iconic heroes and villains, and experience an immersive saga full of adventure, strategy, and heroism. Shape your destiny in a universe where choices can tip the balance between light and dark." },
  { id: 14, title: "Battlefield", image: Game15, followers: 570, description: "Command massive battles, lead squads, operate vehicles, and strategize on diverse terrains. Participate in realistic war scenarios, coordinate with your team, complete tactical objectives, and immerse yourself in large-scale conflicts. Every decision impacts the outcome, making each match an intense and unforgettable experience of modern combat." },
  { id: 15, title: "God Of War Ragnarok", image: Game16, followers: 770, description: "Kratos returns in an epic Norse saga filled with intense battles, emotional storytelling, and fate-driven quests. Face mythological creatures, navigate complex relationships, make pivotal choices, and explore vast, breathtaking realms. Experience a powerful narrative about family, legacy, and the end of times in a world filled with danger and wonder." },
  { id: 16, title: "Mario Kart", image: Game199, followers: 900, description: "Race, drift, and battle friends across imaginative, colorful tracks filled with surprises. Unlock unique items, challenge diverse characters, master tight turns, and enjoy fast-paced multiplayer fun. Engage in chaotic races, perform stunts, and experience hours of exhilarating gameplay full of laughter, competition, and strategy." },
  { id: 17, title: "Ghost of Tsushima", image: Game777, followers: 1000, description: "Become the ultimate samurai, defend your island homeland, explore scenic landscapes, master stealth and combat, and immerse yourself in a story of courage, loyalty, and honor. Make choices that affect the world around you, interact with diverse characters, and experience a rich, cinematic journey that rewards skill, strategy, and determination." },
];

const TrendingGames = () => {
  const [selectedGame, setSelectedGame] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (game) => {
    setSelectedGame(game);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <section
      id="trending-games"
      className="py-10 bg-[#1f133b] text-white overflow-hidden"
    >
      <div className="container relative">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Currently Trending Games</h1>
          <button className="bg-gray-400/50 hover:bg-gray-400 text-white rounded-xl px-4 py-2 transition">
            View All
          </button>
        </div>

        {/* Game Cards */}
        <div className="relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-8">
            {GameCardData.map((item, index) => (
              <motion.div
                key={item.id}
                className="bg-gray-800/40 rounded-xl p-2 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:-rotate-1 cursor-pointer relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                onClick={() => openModal(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[200px] object-cover rounded-xl"
                  loading="lazy"
                />
                <div className="text-center mt-2">
                  <p className="font-semibold">{item.title}</p>
                  <p className="flex items-center justify-center gap-2 text-sm text-gray-300">
                    <FaFire className="text-red-500" />
                    <span>{item.followers}</span> followers
                  </p>
                </div>

                {/* Hot & Bookmark icons */}
                <div className="absolute top-2 right-2 flex flex-col gap-2">
                  <div className="bg-red-500 text-white p-1 rounded-full shadow-lg">
                    <FaHotjar />
                  </div>
                  <div className="bg-blue-500 text-white p-1 rounded-full shadow-lg">
                    <FaBookmark />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Character PNG */}
        <img
          src={CharacterPng1}
          alt="character"
          className="absolute left-[-120px] top-0 z-[1] h-[300px] hidden md:block opacity-80"
        />

        {/* Game Modal */}
        <GameModal isOpen={isModalOpen} onClose={closeModal} game={selectedGame} />
      </div>
    </section>
  );
};

export default TrendingGames;
