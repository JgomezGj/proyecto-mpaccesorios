import React, { useEffect, useState } from "react";
import "../../src/Home.css";
import modaImage from "../assets/moda.jpg";
import motivacionImage from "../assets/motivacion.jpg";
import mujeresImage from "../assets/mujeres.jpg";
import novedadesImage from "../assets/novedades.jpg";

const Home = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const sections = [
    { name: "Novedades", image: novedadesImage },
    { name: "Moda", image: modaImage },
    { name: "Motivación", image: motivacionImage },
    { name: "Mujeres", image: mujeresImage },
  ];

  const handleNextSection = () => {
    setCurrentSection((prevSection) => (prevSection + 1) % sections.length);
  };

  const handlePreviousSection = () => {
    setCurrentSection((prevSection) => (prevSection - 1 + sections.length) % sections.length);
  };

  useEffect(() => {
    const interval = setInterval(handleNextSection, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1 className="firma">By María Paula Jaramillo</h1>
      <main>
        <div className="section-slider">
          <button onClick={handlePreviousSection}>&lt;</button>
          <div className="slider-content">
            <div
              className="slider-background"
              style={{ backgroundImage: `url(${sections[currentSection].image})` }}
            >
              <h2 className="active">{sections[currentSection].name}</h2>
            </div>
          </div>
          <button onClick={handleNextSection}>&gt;</button>
        </div>
      </main>
    </div>
  );
};

export default Home;
