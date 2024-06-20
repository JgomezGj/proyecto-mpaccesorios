import React, { useEffect, useState } from "react";
import "../../src/Home.css";

const Home = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const sections = ["Novedades", "Moda", "Amor propio", "Mujeres"];

  const handleNextSection = () => {
    setCurrentSection((prevSection) => (prevSection + 1) % sections.length);
  };

  const handlePreviousSection = () => {
    setCurrentSection((prevSection) => (prevSection - 1 + sections.length) % sections.length);
  };

  useEffect(() => {
    const interval = setInterval(handleNextSection, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1 className="firma">By María Paula Jaramillo</h1>
    <main>
      <div className="section-slider">
        <button onClick={handlePreviousSection}>&lt;</button>
        <h2 className="active">{sections[currentSection]}</h2>
        <button onClick={handleNextSection}>&gt;</button>
      </div>
    </main>
    </div>
  );
};

export default Home;
