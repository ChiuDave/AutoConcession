import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa"; // Import the back arrow icon
import Navbar from '../Navbar/Navbar'; // Import Navbar
import Footer from '../Footer/Footer'; // Import Footer

const Details = () => {
  const { VIN } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_API_ROUTE}/api/database/vin/${VIN}`);
        if (!response.ok) {
          throw new Error("Failed to fetch car details");
        }
        const data = await response.json();
        setCar(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCarDetails();
  }, [VIN]);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;
  if (!car || !Array.isArray(car) || car.length === 0) return <p className="text-center">Car details not found.</p>;

  const carData = car[0];
  let desc = carData.description || "No description available.";

  // Fix spacing issues where "|" might be missing
  const fixSpacing = (text) => {
    return text
      .replace(/(Exterior Color:[^|]*)\s(Interior Color:)/, "$1 | $2")
      .replace(/(Interior Color:[^|]*)\s(Automatic transmission)/, "$1 | $2")
      .replace(/(Fuel Type:[^|]*)\s(Fuel Efficiency:)/, "$1 | $2")
      .replace(/(Fuel Efficiency:[^|]*)\s(Passenger Capacity:)/, "$1 | $2")
      .replace(/(Passenger Capacity:[^|]*)\s(Selling Price:)/, "$1 | $2")
      .replace(/(Selling Price:[^|]*)\s(Certified:)/, "$1 | $2");
  };

  // Ensure that its separated by "|"
  desc = fixSpacing(desc);
  let parts = desc.split("|").map(part => part.trim());

  // Ensure "Exterior Color" is properly formatted
  if (parts.length > 0 && parts[0].includes("Exterior Color:")) {
    const [mainInfo, exteriorColor] = parts[0].split("Exterior Color:");
    parts[0] = mainInfo.trim();
    parts.splice(1, 0, "Exterior Color:" + exteriorColor.trim());
  }

  return (
    <div className="bg-gray-100">
      <Navbar />
      <div className="pt-20 px-6 flex flex-col items-center">
        {/* Hero Section */}
        <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg mb-4 w-full max-w-6xl">
        <FaArrowLeft
          onClick={() => navigate('/dashboard')}
          className="mb-6 text-2xl text-blue-500 cursor-pointer hover:text-blue-600"
        />
          <h1 className="text-4xl font-bold">{carData.Make} {carData.Model}</h1>
          <div className="flex items-center mt-4">
            <img
              src={carData.Image_Link || `https://source.unsplash.com/500x300/?car&${VIN}`}
              alt={`Car ${VIN}`}
              className="w-64 h-40 object-cover rounded-lg shadow-md"
            />
            <div className="ml-6">
              <p className="text-lg">Price: <span className="font-bold text-blue-600">${carData.BookValue || "N/A"}</span></p>
              <p className="text-lg">Year: {carData.Year || "N/A"}</p>
              <p className="text-lg">Miles: {carData.Miles || "N/A"} km</p>
            </div>
          </div>
        </div>

        {/* Key Information Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-4 w-full max-w-6xl">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">Exterior Color</h2>
            <p>{carData.ExteriorColor || "N/A"}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">Interior Color</h2>
            <p>{carData.InteriorColor || "N/A"}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">Transmission</h2>
            <p>{carData.Transmission || "N/A"}</p>
          </div>
        </div>

        {/* Description Section */}
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-6xl mb-4">
          <h2 className="text-xl font-semibold">Description</h2>
          <div className="mt-4">
            <ul className="list-disc pl-6 text-gray-700">
              {parts.slice(1).map((line, index) => (
                <li key={index}>{line}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Details;
