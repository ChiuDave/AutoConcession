import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import ContacterModal from "../ContacterModal";

const Accueil = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
            <img src="https://img.freepik.com/premium-vector/drawing-car-with-hood-open-front-windshield-open_1230457-34358.jpg" alt="Car" className="rounded-lg shadow-lg" />
          </div>
        </section>

        {/* Section: Voitures Aléatoires */}
        <section id="random-cars" className="py-20 bg-gray-100 text-center px-10">
          <h2 className="text-4xl font-semibold">Quelques Voitures Aléatoires</h2>
          <p className="text-lg mt-4 max-w-3xl mx-auto">
            Découvrez une sélection de voitures disponibles sur notre plateforme.
          </p>

          {/* Grid de voitures */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center">
                <img 
                  src={`https://source.unsplash.com/300x200/?car&sig=${index}`} 
                  alt={`Voiture ${index}`} 
                  className="rounded-lg mb-4 w-full"
                />
                <h3 className="text-xl font-semibold">Voiture #{index}</h3>
                <p className="text-gray-600 mt-2">Modèle exclusif avec des performances optimales.</p>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  Voir Détails
                </button>
              </div>
            ))}
          </div>
        </section>



        {/* Services Section */}
        <section id="services" className="py-20 bg-white text-center px-10">
          <h2 className="text-4xl font-semibold">Nos Services</h2>
          <p className="text-lg mt-4 max-w-3xl mx-auto">
            Découvrez nos solutions avancées, de la recommandation intelligente à la recherche simplifiée de véhicules.
          </p>

          {/* Services Cards */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Card 1: Achat et Vente de Voitures */}
            <div className="bg-gray-100 p-6 rounded-2xl shadow-lg flex flex-col items-center">
              <img src="https://source.unsplash.com/200x150/?car,sale" alt="Vente de voitures" className="rounded-lg mb-4" />
              <h3 className="text-xl font-semibold">Achat et Vente de Voitures</h3>
              <p className="text-gray-600 mt-2">
                Trouvez la voiture parfaite ou vendez votre véhicule en toute simplicité grâce à notre plateforme optimisée.
              </p>
            </div>

            {/* Card 2: Service Client de Qualité */}
            <div className="bg-gray-100 p-6 rounded-2xl shadow-lg flex flex-col items-center">
              <img src="https://source.unsplash.com/200x150/?customer,service" alt="Service client" className="rounded-lg mb-4" />
              <h3 className="text-xl font-semibold">Service Client de Qualité</h3>
              <p className="text-gray-600 mt-2">
                Notre assistance est disponible 24/7 pour vous accompagner dans votre expérience d'achat ou de vente.
              </p>
            </div>

            {/* Card 3: Recommandations Personnalisées */}
            <div className="bg-gray-100 p-6 rounded-2xl shadow-lg flex flex-col items-center">
              <img src="https://source.unsplash.com/200x150/?car,recommendation" alt="Recommandations intelligentes" className="rounded-lg mb-4" />
              <h3 className="text-xl font-semibold">Recommandations Intelligentes</h3>
              <p className="text-gray-600 mt-2">
                Grâce à l'IA, nous vous suggérons des voitures adaptées à vos besoins et préférences en temps réel.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="h-screen flex flex-col justify-center items-center bg-gray-100 text-center px-10">
          <h2 className="text-4xl font-semibold">Contact</h2>
          <p className="text-lg mt-4 max-w-3xl">
            Vous avez une question ? Notre équipe est là pour vous aider à chaque étape.
          </p>
          {/* Contact Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Nous Contacter
          </button>

          {/* Contact Modal */}
          <ContacterModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

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
