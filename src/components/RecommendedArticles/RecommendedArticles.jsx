import React from "react";
import CharacterPng from "../../assets/characters/character2.png";
import Game1 from "../../assets/game/game1.png";
import Game2 from "../../assets/game/game2.jpg";
import Game3 from "../../assets/game/game3.jpg";
import Game4 from "../../assets/game/game2.png";

const articles = [
  {
    id: 1,
    title: "Assassin’s Creed Valhalla: Exploring the Viking Era",
    desc: "Ubisoft’s ambitious open world where history, mythology, and combat collide Assassin's Creed Valhalla's PC minimum requirements include Windows 10 (64-bit), an AMD Ryzen 3 1200 or Intel i5-4460 processor, 8 GB of RAM, a AMD R9 380 or NVIDIA GeForce GTX 960 graphics card, and 50 GB of HDD storage (with an SSD recommended).",
    cover: Game4,
    thumb: Game2,
  },
  {
    id: 2,
    title: "The Last of Us : a story about the survival of Joel and Ellie.",
    desc: "The Last of Us is a story about the survival of Joel and Ellie in a post-apocalyptic United States, ravaged by a fungal infection that transforms humans into violent.",
    cover: Game3,
    thumb: Game3,
  },
  {
    id: 3,
    title: "BGMI",
    desc: "Open combat collide Battlegrounds Mobile India (BGMI) is an online multiplayer battle royale game for the Indian market, developed by Krafton, where up to 100 players parachute onto an island to find weapons and gear, and compete to be the last one standing.",
    cover: Game1,
    thumb: Game1,
  },
];

const RecommendedArticles = () => {
  return (
    <>
      <section className="py-10 bg-[#1f133b] text-white relative overflow-hidden group">
        <div className="container hidden sm:block relative">
          {/* Header section */}
          <div className="flex justify-between items-center relative z-10">
            <div className="relative inline-block">
              <h1 className="text-3xl font-bold relative z-20">
                Recommended Articles
              </h1>
              {/* Spidey aligned to title */}
              <img
                src={CharacterPng}
                alt="Spidey"
                className="absolute -top-6 -right-10 h-[80px] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out z-0"
              />
            </div>
            <button className="bg-gray-400/50 text-white rounded-xl px-4 py-2">
              View All
            </button>
          </div>

          {/* Recommended Articles Card section */}
          <div className="relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 sm:grid-rows-2 gap-4 mt-8">
              {articles.map((article, index) => (
                <div
                  key={article.id}
                  style={{
                    backgroundImage: `url(${article.cover})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    width: "100%",
                    height: index === 0 ? "350px" : "100%",
                  }}
                  className={`rounded-xl relative overflow-hidden ${
                    index === 0 ? "row-span-2 col-span-2" : "row-span-1"
                  }`}
                >
                  <div className="bg-black/20 h-full w-full rounded-xl">
                    <div className="absolute bottom-0 left-0 w-full">
                      <div className="flex justify-center items-center gap-4 bg-gradient-to-t from-primary to-transparent p-3 rounded-b-xl">
                        <div>
                          <img
                            src={article.thumb}
                            alt={article.title}
                            className={`object-cover rounded-xl ${
                              index === 0
                                ? "h-[140px] min-w-[110px]"
                                : "h-[80px] min-w-[60px]"
                            }`}
                          />
                        </div>
                        <div>
                          <h1 className="font-semibold text-xl">
                            {article.title}
                          </h1>
                          {index === 0 && (
                            <p className="text-sm text-white/80">
                              {article.desc}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RecommendedArticles;
