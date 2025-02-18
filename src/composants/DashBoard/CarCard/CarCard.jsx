/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const CarCard = ({ car }) => {
  return (
    <Link to={`/details/${car.VIN}`} className="bg-white p-4 rounded-lg shadow-md">
      <img src={car.Image_Link} alt={car.Model} className="w-full rounded-lg" />
      <p className="mt-2 font-semibold">{car.Make} {car.Model}</p>
      <p className="text-gray-600">{car.SellingPrice} $</p>
    </Link>
  );
};

export default CarCard;
