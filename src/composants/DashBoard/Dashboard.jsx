import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import vehicule from "../../data/vehicles.json"; // Import vehicle data

const Dashboard = () => {
  const [filter, setFilter] = useState("");
  const [filteredCars, setFilteredCars] = useState(vehicule);
  const [visibleCount, setVisibleCount] = useState(10); // Initially show 10 cars

  // Function to handle filtering (you can expand this logic)
  const handleFilterChange = (e) => {
    const value = e.target.value;
    setFilter(value);

    if (value === "price") {
      setFilteredCars([...vehicule].sort((a, b) => a.price - b.price));
    } else if (value === "brand") {
      setFilteredCars([...vehicule].sort((a, b) => a.brand.localeCompare(b.brand)));
    } else if (value === "year") {
      setFilteredCars([...vehicule].sort((a, b) => b.year - a.year));
    } else {
      setFilteredCars(vehicule);
    }
  };

  return (
    <div className="bg-gray-100">
      {/* Fixed Navbar */}
      <div className="fixed top-0 w-full bg-white shadow-md z-50">
        <Navbar />
      </div>

      {/* Scrollable Content */}
      <div className="pt-20 px-6 flex flex-col items-center">
        {/* Search Bar */}
        <div className="w-full max-w-3xl relative">
          <input
            type="text"
            placeholder="Rechercher une voiture..."
            className="w-full px-5 py-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="absolute right-3 top-2.5 text-gray-500">🔍</button>
        </div>

        {/* Filter Dropdown */}
        <div className="w-full max-w-3xl mt-4">
          <select
            value={filter}
            onChange={handleFilterChange}
            className="w-full px-5 py-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Filtrer par...</option>
            <option value="price">Prix</option>
            <option value="brand">Marque</option>
            <option value="year">Année</option>
          </select>
        </div>

        {/* Section: Pour toi (Featured Cars) */}
        <div className="w-full max-w-6xl mt-16">
          <h2 className="text-2xl font-semibold mb-4">Pour toi</h2>
          <div className="grid grid-cols-2 gap-6">
            {filteredCars.slice(0, 2).map((car) => (
              <Link
                key={car.VIN}
                to={`/details/${car.VIN}`} // Link to the car details page
                className="bg-white p-4 rounded-lg shadow-md"
              >
                <img src={car.image} alt={car.model} className="w-full rounded-lg" />
                <p className="mt-2 font-semibold">{car.Make} {car.Model}</p>
                <p className="text-gray-600">{car.SellingPrice} $</p>
              </Link>
            ))}
          </div>
        </div>

       {/* Section: All Cars */}
        <div className="w-full max-w-6xl mt-16">
          <h2 className="text-2xl font-semibold mb-4">Voitures</h2>
          
          <div className="flex space-x-4 overflow-x-auto pb-4">
            {filteredCars.slice(0, visibleCount).map((car) => (
              <Link
                key={car.id}
                to={`/details/${car.VIN}`} // Link to details page
                className="bg-white p-4 rounded-lg shadow-md min-w-[200px]"
              >
                <img src={car.image} alt={car.model} className="w-full rounded-lg" />
                <p className="mt-2 font-semibold">{car.Make} {car.Model}</p>
                <p className="text-gray-600">{car.SellingPrice} $</p>
              </Link>
            ))}
          </div>

          {/* "Voir plus" Button */}
          {visibleCount < filteredCars.length && (
            <button
              onClick={() => setVisibleCount(visibleCount + 10)}
              className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              Voir plus
            </button>
          )}
        </div>


        {/* Additional Section for More Scrolling */}
        <div className="w-full max-w-6xl mt-16 mb-20">
          <h2 className="text-2xl font-semibold mb-4">Pourquoi nous choisir ?</h2>
          <p className="text-lg text-gray-700">
            Nous offrons une sélection de voitures adaptées à vos besoins avec une expérience d'achat fluide et personnalisée.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-gray-800 text-white text-center py-6 mt-16">
        <p>© 2025 Car IA - Tous droits réservés</p>
      </footer>
    </div>
  );
};

export default Dashboard;
