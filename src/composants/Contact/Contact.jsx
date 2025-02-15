import React from "react";
import Navbar from "../Navbar/Navbar"; // Ensure this file exists
import Footer from "../Footer/Footer"; // Ensure this file exists
import MapboxMap from "./MapboxMap";
import ContacterModal from "../ContacterModal"; // Ensure this file exists

const Contact = () => {
    return (
      <>
        {/* Navbar */}
        <Navbar />
  
        {/* Main Contact Section */}
        <div className="container mt-15 mx-auto mb-5 px-6 py-12">
          <h1 className="text-3xl font-bold text-center mb-8">Contacter Nous</h1>
  
          {/* Grid Layout for Desktop, Stacked on Mobile */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Map Section */}
            <div className="col-span-1 bg-white shadow-lg p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Notre Emplacement</h2>
              <MapboxMap />
            </div>
  
            {/* Contact Form Section (Fix) */}
            <div className="col-span-1 bg-white shadow-lg p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Demande Express</h2>
              <ContacterModal /> {/* Ensure this displays properly */}
            </div>
  
            {/* Contact Details with Schedules */}
            <div className="col-span-1 bg-white shadow-lg p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Coordonnées</h2>
              <p className="text-gray-700 mb-2">📍 <strong>Car IA</strong></p>
              <p className="text-gray-700">3800, Rue Sherbrooke Est</p>
              <p className="text-gray-700">Montréal, Québec H1X 2A2</p>
  
              <div className="mt-4">
                <p className="text-gray-700"><strong>📞 Ventes:</strong> 1 833 973-0215 <span className="text-xs text-gray-500">*</span></p>
                <p className="text-gray-700"><strong>🔧 Service:</strong> 514 325-3673</p>
                <p className="text-gray-700"><strong>🔩 Pièces:</strong> 514 325-0555</p>
              </div>
  
              {/* Schedules */}
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2">Horaires</h3>
                <p className="text-gray-700"><strong>🕒 Ventes:</strong> Lun-Sam 9:00 AM - 8:00 PM</p>
                <p className="text-gray-700"><strong>🔧 Service:</strong> Lun-Ven 8:00 AM - 6:00 PM</p>
                <p className="text-gray-700"><strong>🔩 Pièces:</strong> Lun-Ven 8:00 AM - 6:00 PM</p>
              </div>
  
              <p className="text-xs text-gray-500 mt-2">* Sans Frais</p>
            </div>
          </div>
        </div>
  
        {/* Footer */}
        <Footer />
      </>
    );
  };
  
  export default Contact;