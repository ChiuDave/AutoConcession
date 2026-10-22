/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { getSafeExternalImageUrl } from "../../../utils/safeExternalUrl";

const CarCard = ({ car }) => {
  return (
    <Link to={`/details/${car.VIN}`} className="bg-white p-4 rounded-lg shadow-md">
      <img src={getSafeExternalImageUrl(car.Image_Link, `https://source.unsplash.com/300x200/?car&sig=${car.VIN}`)} alt={car.Model} className="w-full rounded-lg" />
      <p className="mt-2 font-semibold">{car.Make} {car.Model}</p>
      <p className="text-gray-600">{car.SellingPrice} $</p>
    </Link>
  );
};

export default CarCard;
