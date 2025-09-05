// src/components/ParticlesBg/ParticlesBg.jsx
import React from "react";
import Particles from "react-tsparticles";

const ParticlesBg = () => {
  return (
    <Particles
      options={{
        fpsLimit: 60,
        particles: {
          number: { value: 50, density: { enable: true, area: 800 } },
          color: { value: "#c142ff" },
          shape: { type: "circle" },
          opacity: { value: 0.5 },
          size: { value: 3 },
          move: { enable: true, speed: 1, direction: "none", outModes: "out" },
          links: { enable: true, distance: 150, color: "#c142ff", opacity: 0.4, width: 1 },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { quantity: 4 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBg;
