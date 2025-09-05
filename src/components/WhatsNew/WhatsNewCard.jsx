import React from "react";

const WhatsNewCard = ({ image, title, description, icon }) => {
  return (
    <div className="sm:col-span-3">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center bg-gray-400/10 p-4 rounded-xl hover:scale-[1.02] transition-transform duration-300">
        {/* Image Section */}
        <div>
          <img
            src={image}
            alt={title}
            className="w-full h-[200px] object-cover rounded-xl"
          />
        </div>

        {/* Text Section */}
        <div className="sm:col-span-2">
          {/* Icon + Platform Tag */}
          <div className="inline-flex py-1 px-4 items-center gap-2 bg-gray-400/20 text-white rounded-md mb-3 text-sm font-medium">
            {icon}
            <span>PC</span>
          </div>

          {/* Title */}
          <h1 className="text-xl font-semibold mb-2">{title}</h1>

          {/* Description */}
          <p className="text-sm text-white/70 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default WhatsNewCard;
