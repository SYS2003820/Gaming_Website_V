import React from "react";
import { FaHeartbeat, FaWindows } from "react-icons/fa";
import { IoLogoAndroid, IoLogoApple, IoLogoBuffer, IoLogoDribbble } from "react-icons/io";

// Importing all your game images
import Game1 from "../../assets/game/game01.jpg"; // The Last of Us
import Game2 from "../../assets/game/game2.png"; // Valhalla
import Game3 from "../../assets/game/game1.jpg"; // BGMI
import Game4 from "../../assets/game/game12.png"; // Spider-Man 2
import Game5 from "../../assets/game/game8.jpg"; // God of War
import Game6 from "../../assets/game/game9.jpg"; // CyberPunk
import Game7 from "../../assets/game/game777.png"; // Ghost of Tsushima

import WhatsNewCard from "./WhatsNewCard";

// All Games Data
const WhatsNewData = [
  {
    image: Game2,
    title: "Assassin’s Creed Valhalla: Viking Saga Continues",
    description:
      "Ubisoft expands Valhalla with more Norse mythology, epic raids, and Viking legends brought to life Assassin's Creed Valhalla follows the Viking raider Eivor Varinsdottir in the 9th century AD as they lead their clan from Norway to England to establish a new home, becoming embroiled in the Assassins' ancient conflict against the Templars and forging alliances in a land of warring kingdoms. A modern-day framing story features Layla Hassan, who relives Eivor's memories to prevent a global catastrophe caused by a powerful magnetic field.",
    icon: <FaWindows />,
  },
  {
    image: Game3,
    title: "BGMI: is a player versus player shooter game.",
    description:
      "Krafton’s Battlegrounds Mobile India is dominating again with new modes, maps, and massive eSports tournaments BGMI is a player versus player shooter game in which up to one hundred players fight in a battle royale, a type of large-scale last man standing deathmatch where players fight to remain the last alive. Players can choose to enter the match solo, duo, or with a small team of up to four people.",
    icon: <FaWindows />,
  },
  {
    image: Game1,
    title: "The Last of Us: Defining Storytelling in Gaming",
    description:
      "Naughty Dog’s post-apocalyptic masterpiece continues to set the gold standard for narrative-driven games The Last of Us is a story about the survival of Joel and Ellie in a post-apocalyptic United States, ravaged by a fungal infection that transforms humans into violent The first season follows hardened smuggler Joel as he is tasked with escorting the immune teenage girl Ellie across the country to the rebel group known as the Fireflies. The series explores their journey and the bond they form, culminating in a difficult choice that has lasting consequences for their relationship.",
    icon: <FaWindows />,
  },
  {
    image: Game4,
    title: "Spider-Man 2: Swinging Through Next-Gen",
    description:
      "Insomniac’s Spider-Man 2 takes web-slinging to a whole new level with jaw-dropping visuals and a dual-hero experience Marvel's Spider-Man 2 is a PlayStation 5 exclusive where both Peter Parker and Miles Morales team up as playable Spider-Men to protect an expanded New York, including Brooklyn and Queens, from new threats like Kraven the Hunter and the monstrous Venom. The story explores the challenges of balancing their personal lives and superhero duties, the powerful influence of the symbiote, and the personal struggles of Peter's best friend Harry Osborn. Players can seamlessly switch between the two heroes, using unique abilities and gadgets, to face a variety of iconic and new villains in a larger-than-ever open world.",
    icon: <FaWindows />,
  },
  {
    image: Game5,
    title: "Call of Duty 7:Black Ops",
    description:
      "Call of Duty: Black Ops 7 is an upcoming first-person shooter video game developed by Treyarch and Raven Software for PlayStation 4, PlayStation 5, Xbox One, Xbox Series X/S and Microsoft Windows. It is set in 2035, ten years after the 2025 events of Call of Duty: Black Ops II and forty-four years after the events of Call of Duty: Black Ops.",
    icon: <FaWindows />,
  },
  {
    image: Game6,
    title: "CyberPunk 2077: A Revamped Night City",
    description:
      "Cyberpunk 2077 is an action role-playing game set in the dystopian, corporatized metropolis of Night City in 2077. Players assume the role of V, a mercenary who, through a heist gone wrong, becomes entangled with a biochip containing the digital construct of legendary rockerboy Johnny Silverhand. This biochip is slowly killing V, forcing the player to navigate a deadly world of megacorporations, street gangs, and cybernetic enhancements while racing against time to find a way to survive.",
    icon: <FaWindows />,
  },
  {
    image: Game7,
    title: "Ghost of Tsushima: The Samurai’s Tale",
    description:
      "Ghost of Tsushima is a 2020 epic action-adventure game developed by Sucker Punch Productions and published by Sony Interactive Entertainment. The player controls Jin Sakai, a samurai on a quest to protect Tsushima Island during the first Mongol invasion of Japan and Sucker Punch’s masterpiece immerses players in feudal Japan with stunning visuals, sword combat, and a moving story.",
    icon: <FaWindows />,
  },
];

const WhatsNew = () => {
  return (
    <div className="py-10 text-white" style={{ backgroundColor: "#2b1d4e" }}>
      <div className="container">
        {/* Header section */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">What's New</h1>
          <div className="flex gap-4 items-center">
            <IoLogoAndroid className="text-xl cursor-pointer hover:text-green-400 transition" />
            <IoLogoApple className="text-xl cursor-pointer hover:text-gray-300 transition" />
            <IoLogoBuffer className="text-xl cursor-pointer hover:text-blue-400 transition" />
            <IoLogoDribbble className="text-xl cursor-pointer hover:text-pink-400 transition" />
            <button className="ml-4 bg-gradient-to-r from-blue-400 to-blue-700 text-white rounded-xl px-4 py-2 hover:scale-105 transition">
              Explore
            </button>
          </div>
        </div>

        {/* What's New Card section */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 my-8">
          {/* Card section */}
          <div className="col-span-3 grid grid-cols-1 gap-6">
            {WhatsNewData.map((data, index) => (
              <WhatsNewCard key={index} {...data} />
            ))}
          </div>

          {/* Subscribe newsletter section */}
          <div className="col-span-1">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 space-y-3 shadow-lg">
              <FaHeartbeat className="bg-orange-400/30 p-2 rounded-lg inline-block h-[40px] w-[40px]" />
              <h1 className="text-2xl font-semibold">Subscribe To Our Newsletter</h1>
              <p className="text-sm text-white/80 line-clamp-2">
                Stay updated with the latest gaming news, reviews, and exclusive content delivered right to your inbox.
              </p>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-white/20 px-4 py-2 rounded-lg w-full text-white placeholder-white/60 focus:outline-none"
                placeholder="Enter Your Email"
              />
              <button className="w-full bg-gradient-to-r from-orange-400 to-pink-500 text-white rounded-xl px-4 py-2 hover:scale-105 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsNew;
