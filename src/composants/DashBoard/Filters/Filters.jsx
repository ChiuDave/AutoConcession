/* eslint-disable react/prop-types */
const Filters = ({ data, filters, setFilters }) => {
  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
    localStorage.setItem(e.target.name, e.target.value);
  };

  // Filter models based on the selected make
  const filteredModels = filters.make
    ? [...new Set(data.filter(car => car.Make === filters.make).map(car => car.Model))].sort()
    : [...new Set(data.map(car => car.Model))].sort();

  return (
    <div className="w-full max-w-6xl mt-4 grid grid-cols-5 gap-4 bg-white p-4 rounded-lg shadow-md">
      {[
        { label: "Marque", name: "make", options: [...new Set(data.map((car) => car.Make))].sort(), default: "Toutes les marques" },
        { label: "Model", name: "name", options: filteredModels, default: "Toutes les models" },
        { label: "Année", name: "year", options: [...new Set(data.map((car) => car.Year))].sort((a, b) => a - b), default: "Toutes les années" },
        { label: "Couleur Extérieure", name: "exteriorColor", options: [...new Set(data.map((car) => car.Ext_Color_Generic))].filter(Boolean).sort(), default: "Toutes les couleurs" },
        { label: "Couleur Intérieure", name: "interiorColor", options: [...new Set(data.map((car) => car.Int_Color_Generic))].filter(Boolean).sort(), default: "Toutes les couleurs" },
        { label: "Type de Carburant", name: "fuelType", options: [...new Set(data.map((car) => car.Fuel_Type))].sort(), default: "Tous types de carburant" },
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
        <label className="font-semibold">Kilométrage:</label>
        <input
          type="text"
          name="miles"
          placeholder="Enter mileage"
          value={filters.miles}
          onChange={handleChange}
          className="w-full px-3 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
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
        <label className="font-semibold">Prix Minimum:</label>
        <input
          type="text"
          name="minPrice"
          placeholder="Prix Minimum"
          value={filters.minPrice}
          onChange={handleChange}
          className="w-full px-3 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="font-semibold">Prix Maximum:</label>
        <input
          type="text"
          name="maxPrice"
          placeholder="Prix Maximum"
          value={filters.maxPrice}
          onChange={handleChange}
          className="w-full px-3 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};

export default Filters;
