import React from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams(); // Get the car ID from the URL
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Détails de la Voiture {id}</h1>
      {/* Fetch car details based on the ID (you can fetch data from an API or use hardcoded data) */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <img
          src={`https://source.unsplash.com/500x300/?car&${id}`}
          alt={`Car ${id}`}
          className="w-full rounded-lg mb-4"
        />
        <p className="text-lg font-semibold">Car {id} Information</p>
        <p className="text-gray-600 mt-2">Detailed description of the car goes here...</p>
        {/* Add more car details such as specs, pricing, etc. */}
      </div>
    </div>
  );
};

export default Details;

