import { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import ContacterModal from "../ContacterModal";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import Services from "./Services";

const Accueil = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [cars, setCars] = useState([]);
  const [filters, setFilters] = useState({
    make: localStorage.getItem("make") || "",
    model: localStorage.getItem("model") || "",
    year: localStorage.getItem("year") || "",
    exteriorColor: localStorage.getItem("exteriorColor") || "",
    interiorColor: localStorage.getItem("interiorColor") || "",
    fuelType: localStorage.getItem("fuelType") || "",
    miles: localStorage.getItem("miles") || "",
    vin: localStorage.getItem("vin") || "",
    minPrice: localStorage.getItem("minPrice") || "",
    maxPrice: localStorage.getItem("maxPrice") || "",
  });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (currentScrollY + windowHeight >= documentHeight - 10) {
        setShowNavbar(false);
      } else if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_API_ROUTE}/api/database`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "true",
        }
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();

      const filteredCars = result.filter((car) => {
        return filters.make ? car.Make === filters.make : true;
      });

      const shuffledFilteredCars = filteredCars.sort(() => 0.5 - Math.random());

      const filteredPercentage = 2;
      const randomFilteredCars = shuffledFilteredCars.slice(0, filteredPercentage);

      const randomCars = result.sort(() => 0.5 - Math.random()).slice(0, 6);

      const finalCars = [
        ...randomFilteredCars,
        ...randomCars
      ];

      // Shuffle the final list to mix filtered and random cars
      const shuffledCars = finalCars.sort(() => 0.5 - Math.random());

      // Set the first 8 cars in the state
      setCars(shuffledCars.slice(0, 8));

    } catch (error) {
      console.error(error.message);
    }
  };

  fetchData();
}, [filters]);

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

          {/* Check if there are cars, if so show the grid */}
          {cars.length > 0 ? (
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {cars.map((car) => (
                <div key={car.VIN} className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center">
                  <img
                    src={car.Image_Link || `https://source.unsplash.com/300x200/?car&sig=${car.VIN}`}
                    alt={`${car.Make} ${car.Model}`}
                    className="rounded-lg mb-4 w-full"
                  />
                  <h3 className="text-xl font-semibold">{car.Make} {car.Model}</h3>
                  <p className="text-gray-600 mt-2">{car.Year} - {car.Miles} miles</p>
                  <Link to={`/details/${car.VIN}`} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                    Voir Détails
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            // Loading message outside the grid
            <div className="flex items-center justify-center h-1/2 w-full bg-gray-100 text-center">
              <p className="text-gray-500">Chargement des voitures...</p>
            </div>
          )}
        </section>

        {/* Services Section */}
        <Services/>

        {/* Contact Section */}
        <section id="contact" className="py-20 flex flex-col justify-center items-center bg-gray-100 text-center px-10">
          <h2 className="text-4xl font-semibold">Contact</h2>
          <p className="text-lg mt-4 max-w-3xl">
            Vous avez une question ? Notre équipe est là pour vous aider à chaque étape.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Nous Contacter
          </button>
          <ContacterModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Accueil;
