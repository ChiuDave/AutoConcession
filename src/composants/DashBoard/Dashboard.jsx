import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Dashboard = () => {
  const [filter, setFilter] = useState("");

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
          <button className="absolute right-3 top-2.5 text-gray-500">
            🔍
          </button>
        </div>

        {/* Filter Dropdown */}
        <div className="w-full max-w-3xl mt-4">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full px-5 py-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Filtrer par...</option>
            <option value="price">Prix</option>
            <option value="brand">Marque</option>
            <option value="year">Année</option>
          </select>
        </div>

        {/* Section: Pour toi */}
        <div className="w-full max-w-6xl mt-16">
          <h2 className="text-2xl font-semibold mb-4">Pour toi</h2>
          <div className="grid grid-cols-2 gap-6">
            {/* Car Cards */}
            {[1, 2].map((index) => (
              <Link
                key={index}
                to={`/details/${index}`} // Links to the car details page with the car index as the ID
                className="bg-white p-4 rounded-lg shadow-md"
              >
                <img
                  src={`https://source.unsplash.com/300x200/?car&${index}`}
                  alt="Car"
                  className="w-full rounded-lg"
                />
                <p className="mt-2 font-semibold">Voiture Recommandée {index}</p>
                <p className="text-gray-600">Description rapide...</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Section: Voitures */}
        <div className="w-full max-w-6xl mt-16">
          <h2 className="text-2xl font-semibold mb-4">Voitures</h2>
          <div className="flex space-x-4 overflow-x-auto pb-4">
            {[1, 2, 3, 4, 5].map((index) => (
              <Link
                key={index}
                to={`/details/${index}`} // Links to the car details page with the car index as the ID
                className="bg-white p-4 rounded-lg shadow-md min-w-[200px]"
              >
                <img
                  src={`https://source.unsplash.com/200x150/?car&${index}`}
                  alt="Car"
                  className="w-full rounded-lg"
                />
                <p className="mt-2 font-semibold">Voiture {index}</p>
                <p className="text-gray-600">Description rapide...</p>
              </Link>
            ))}
          </div>
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
