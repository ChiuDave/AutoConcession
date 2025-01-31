import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

const Accueil = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (currentScrollY + windowHeight >= documentHeight - 10) {
        // Hide navbar when at the bottom of the page
        setShowNavbar(false);
      } else if (currentScrollY > lastScrollY) {
        // Hide navbar when scrolling down
        setShowNavbar(false);
      } else {
        // Show navbar when scrolling up
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <div className={`fixed top-0 w-full transition-transform duration-300 z-50 ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}>
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-center h-screen px-10 bg-white">
          <div className="flex-1">
            <h1 className="text-4xl font-bold">Accueil</h1>
            <h2 className="text-3xl font-semibold mt-4">Un nouveau marché révolutionnaire</h2>
            <p className="text-lg mt-4">
              Un nouveau moyen pour effectuer vos achats en ligne. Notre petit robot vous aidera à choisir la voiture de vos rêves selon vos préférences.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <img src="https://source.unsplash.com/600x400/?car" alt="Car" className="rounded-lg shadow-lg" />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="h-screen flex flex-col justify-center items-center bg-gray-100 text-center px-10">
          <h2 className="text-4xl font-semibold">À Propos</h2>
          <p className="text-lg mt-4 max-w-3xl">
            Nous révolutionnons le marché automobile en intégrant l'IA pour une expérience d'achat intuitive et personnalisée.
          </p>
        </section>

        {/* Services Section */}
        <section id="services" className="h-screen flex flex-col justify-center items-center bg-white text-center px-10">
          <h2 className="text-4xl font-semibold">Nos Services</h2>
          <p className="text-lg mt-4 max-w-3xl">
            Découvrez nos solutions avancées, de la recommandation intelligente à la recherche simplifiée de véhicules.
          </p>
        </section>

        {/* Contact Section */}
        <section id="contact" className="h-screen flex flex-col justify-center items-center bg-gray-100 text-center px-10">
          <h2 className="text-4xl font-semibold">Contact</h2>
          <p className="text-lg mt-4 max-w-3xl">
            Vous avez une question ? Notre équipe est là pour vous aider à chaque étape.
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
            Nous Contacter
          </button>
        </section>
      </div>

      {/* Footer */}
      <footer className="w-full bg-gray-800 text-white text-center py-6">
        <p>&copy; {new Date().getFullYear()} Car IA. Tous droits réservés.</p>
      </footer>
    </div>
  );
};

export default Accueil;
