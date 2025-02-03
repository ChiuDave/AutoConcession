import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">Car IA</Link>

        {/* Navigation Links - Now Horizontal */}
        <ul className="flex space-x-6">
          <li><Link to="/VoitureAI/" className="text-gray-700 hover:text-blue-600">Accueil</Link></li>
          <li><Link to="/VoitureAI/dashboard" className="text-gray-700 hover:text-blue-600">Voitures</Link></li>
          <li><Link to="/VoitureAI/about" className="text-gray-700 hover:text-blue-600">À propos</Link></li>
          <li><Link to="/VoitureAI/contact" className="text-gray-700 hover:text-blue-600">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
