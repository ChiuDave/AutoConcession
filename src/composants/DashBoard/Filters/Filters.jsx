import React from "react";

const Filters = ({ data, filters, setFilters }) => {
  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full max-w-6xl mt-4 grid grid-cols-5 gap-4 bg-white p-4 rounded-lg shadow-md">
      {[
        { label: "Marque", name: "make", options: [...new Set(data.map((car) => car.Make))], default: "All Brands" },
        { label: "Model", name: "name", options: [...new Set(data.map((car) => car.Model))], default: "All Models" },
        { label: "Année", name: "year", options: [...new Set(data.map((car) => car.Year))], default: "Toutes les années" },
        { label: "Kilométrage", name: "miles", options: [...new Set(data.map((car) => car.Miles))], default: "Tous les kilométrages" },
        { label: "Couleur Extérieure", name: "exteriorColor", options: [...new Set(data.map((car) => car.Ext_Color_Generic))], default: "Toutes les couleurs" },
        { label: "Couleur Intérieure", name: "interiorColor", options: [...new Set(data.map((car) => car.Int_Color_Generic))], default: "Toutes les couleurs" },
        { label: "Type de Carburant", name: "fuelType", options: [...new Set(data.map((car) => car.Fuel_Type))], default: "Tous types de carburant" },
      ].map(({ label, name, options, default: defaultOption }) => (
        <div key={name}>
          <label className="font-semibold">{label}:</label>
          <select
            name={name}
            value={filters[name]}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">{defaultOption}</option>
            {options.map((option, index) => (
              <option key={index || option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      ))}
      <div>
        <label className="font-semibold">VIN:</label>
        <input
          type="text"
          name="vin"
          placeholder="Enter VIN"
          value={filters.vin}
          onChange={handleChange}
          className="w-full px-3 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="font-semibold">Min Price:</label>
        <input
          type="text"
          name="minPrice"
          placeholder="Min Price"
          value={filters.minPrice}
          onChange={handleChange}
          className="w-full px-3 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="font-semibold">Max Price:</label>
        <input
          type="text"
          name="maxPrice"
          placeholder="Max Price"
          value={filters.maxPrice}
          onChange={handleChange}
          className="w-full px-3 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};

export default Filters;
