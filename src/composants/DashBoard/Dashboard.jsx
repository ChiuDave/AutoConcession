import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Dashboard = () => {
  const [filteredCars, setFilteredCars] = useState([]);
  const [visibleCount, setVisibleCount] = useState(10);

  const [vinFilter, setVinFilter] = useState("");
  const [nameFilter, setNameFilter] = useState("");
  const [makeFilter, setMakeFilter] = useState("");
  const [yearFilter, setYearFilter] = useState("");
  const [milesFilter, setMilesFilter] = useState("");
  const [exteriorColorFilter, setExteriorColorFilter] = useState("");
  const [interiorColorFilter, setInteriorColorFilter] = useState("");
  const [fuelTypeFilter, setFuelTypeFilter] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_API_ROUTE}/api/database`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
        setFilteredCars(result); // Set filteredCars to the fetched data initially
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (data.length === 0) return; // Only filter if data is loaded
  
    let filtered = data;
  
    // Apply each filter if it's set
    if (vinFilter) {
      filtered = filtered.filter((car) => car.VIN === vinFilter);
    }
    if (nameFilter && nameFilter !== "All Models") {
      filtered = filtered.filter((car) => car.Model.toLowerCase().includes(nameFilter.toLowerCase()));
    }
    if (makeFilter && makeFilter !== "All Brands") {
      filtered = filtered.filter((car) => car.Make.toLowerCase().includes(makeFilter.toLowerCase()));
    }
    if (yearFilter) {
      filtered = filtered.filter((car) => car.Year === parseInt(yearFilter));
    }
    if (milesFilter) {
      filtered = filtered.filter((car) => car.Miles === parseInt(milesFilter));
    }
    if (exteriorColorFilter) {
      filtered = filtered.filter((car) => {
        const color = car.Ext_Color_Generic || ''; // Default to empty string if null or undefined
        return color.toLowerCase().includes(exteriorColorFilter.toLowerCase());
      });
    }
    
    if (interiorColorFilter) {
      filtered = filtered.filter((car) => {
        const color = car.Int_Color_Generic || ''; // Default to empty string if null or undefined
        return color.toLowerCase().includes(interiorColorFilter.toLowerCase());
      });
    }
    if (fuelTypeFilter) {
      filtered = filtered.filter((car) => car.Fuel_Type.toLowerCase().includes(fuelTypeFilter.toLowerCase()));
    }
  
    // Price range filter
    const min = minPrice ? parseFloat(minPrice) : 0;
    const max = maxPrice ? parseFloat(maxPrice) : Infinity;
    filtered = filtered.filter((car) => {
      let price = car.SellingPrice;
  
      // Ensure SellingPrice is a string and remove any non-numeric characters if it's a string
      if (typeof price === "number") {
        price = price.toString(); // Convert to string if it's a number
      }
      
      // Remove non-numeric characters if it's a string
      if (typeof price === "string") {
        price = price.replace(/[^\d.-]/g, "");
      }
  
      return parseFloat(price) >= min && parseFloat(price) <= max;
    });
  
    setFilteredCars(filtered); // Update filteredCars with the filtered results
  }, [
    data, vinFilter, nameFilter, makeFilter, yearFilter, milesFilter, exteriorColorFilter, interiorColorFilter, fuelTypeFilter, minPrice, maxPrice,
  ]);
  

  return (
    <div className="bg-gray-100">
      <div className="fixed top-0 w-full bg-white shadow-md z-50">
        <Navbar />
      </div>

      <div className="pt-20 px-6 flex flex-col items-center">
        <div className="w-full max-w-6xl mt-4 grid grid-cols-5 gap-4 bg-white p-4 rounded-lg shadow-md">
          {/* Filters Section */}
          {/* Brand Dropdown */}
          <div>
            <label className="font-semibold">Marque:</label>
            <select
              value={makeFilter}
              onChange={(e) => setMakeFilter(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>All Brands</option>
              {[...new Set(data.map((car) => car.Make))].map((make, index) => (
                <option key={index || make} value={make}>
                  {make}
                </option>
              ))}
            </select>
          </div>

          {/* Model Dropdown */}
          <div>
            <label className="font-semibold">Model:</label>
            <select
              value={nameFilter}
              onChange={(e) => setNameFilter(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>All Models</option>
              {[...new Set(data.map((car) => car.Model))].map((model, index) => (
                <option key={index || model} value={model}>
                  {model}
                </option>
              ))}
            </select>
          </div>

          {/* VIN Input */}
          <div>
            <label className="font-semibold">VIN:</label>
            <input
              type="text"
              placeholder="Enter VIN"
              value={vinFilter}
              onChange={(e) => setVinFilter(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Year Dropdown */}
          <div>
            <label className="font-semibold">Année :</label>
            <select
              value={yearFilter}
              onChange={(e) => setYearFilter(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Toutes les années</option>
              {[...new Set(data.map((car) => car.Year))].map((year, index) => (
                <option key={index || year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          {/* Miles Dropdown */}
          <div>
            <label className="font-semibold">Kilométrage :</label>
            <select
              value={milesFilter}
              onChange={(e) => setMilesFilter(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Tous les kilométrages</option>
              {[...new Set(data.map((car) => car.Miles))].map((miles, index) => (
                <option key={index || miles} value={miles}>
                  {miles}
                </option>
              ))}
            </select>
          </div>

          {/* Min Price Input */}
          <div>
            <label className="font-semibold">Min Price:</label>
            <input
              type="text"
              placeholder="Min Price"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Max Price Input */}
          <div>
            <label className="font-semibold">Max Price:</label>
            <input
              type="text"
              placeholder="Max Price"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Exterior Color Dropdown */}
          <div>
            <label className="font-semibold">Couleur Extérieure :</label>
            <select
              value={exteriorColorFilter}
              onChange={(e) => setExteriorColorFilter(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Toutes les couleurs</option>
              {[...new Set(data.map((car) => car.Ext_Color_Generic))].map((couleur, index) => (
                <option key={index || couleur} value={couleur}>
                  {couleur}
                </option>
              ))}
            </select>
          </div>

          {/* Interior Color Dropdown */}
          <div>
            <label className="font-semibold">Couleur Intérieure :</label>
            <select
              value={interiorColorFilter}
              onChange={(e) => setInteriorColorFilter(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Toutes les couleurs</option>
              {[...new Set(data.map((car) => car.Int_Color_Generic))].map((couleur, index) => (
                <option key={index || couleur} value={couleur}>
                  {couleur}
                </option>
              ))}
            </select>
          </div>

          {/* Fuel Type Dropdown */}
          <div>
            <label className="font-semibold">Type de Carburant :</label>
            <select
              value={fuelTypeFilter}
              onChange={(e) => setFuelTypeFilter(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Tous types de carburant</option>
              {[...new Set(data.map((car) => car.Fuel_Type))].map((fuel, index) => (
                <option key={index || fuel} value={fuel}>
                  {fuel}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="w-full max-w-6xl mt-8">
          <h2 className="text-2xl font-semibold mb-4">Voitures</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {filteredCars.slice(0, visibleCount).map((car) => (
              <Link key={car.VIN} to={`/details/${car.VIN}`} className="bg-white p-4 rounded-lg shadow-md">
                <img src={car.Image_Link} alt={car.model} className="w-full rounded-lg" />
                <p className="mt-2 font-semibold">{car.Make} {car.Model}</p>
                <p className="text-gray-600">{car.SellingPrice} $</p>
              </Link>
            ))}
          </div>
          {visibleCount < filteredCars.length && (
            <button
              onClick={() => setVisibleCount(visibleCount + 20)}
              className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              Voir plus
            </button>
          )}
        </div>

        <div className="w-full max-w-6xl mt-16 mb-20">
          <h2 className="text-2xl font-semibold mb-4">Pourquoi nous choisir ?</h2>
          <p className="text-lg text-gray-700">
            Nous offrons une sélection de voitures de qualité à des prix compétitifs. Trouvez la voiture de vos rêves grâce à nos filtres de recherche détaillés.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
