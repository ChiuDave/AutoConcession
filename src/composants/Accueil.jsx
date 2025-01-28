import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "./Accueil.css";

const Accueil = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling down - hide navbar
        setShowNavbar(false);
      } else {
        // Scrolling up - show navbar
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className="accueil-container">
      {/* Navbar - Show/Hide based on scroll */}
      <div className={`navbar ${showNavbar ? "navbar-visible" : "navbar-hidden"}`}>
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="accueil-box">
        <div className="left-accueil">
          <h1>Accueil</h1>
          <h1>Un nouveau marché révolutionnaire</h1>
          <h3>
            Un nouveau moyen pour effectuer vos achats en ligne. Notre petit robot vous aidera à choisir la voiture de vos rêves selon vos préférences.
          </h3>
        </div>
        <div className="right-accueil">
          <h2>Bienvenue !</h2>
          <p>
            Découvrez notre gamme de services révolutionnaires qui transforment vos expériences d'achat. Nous vous accompagnons à chaque étape.
          </p>
          <button className="cta-button">Explorez Maintenant</button>
        </div>
      </div>
    </div>
  );
};

export default Accueil;
