import { Link } from "react-router";

const FoodCard = ({ food }) => {
  const {
    _id,
    food_name,
    photo,
    restaurant_name,
    restaurant_location,
    reviewer_name,
    rating
  } = food;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      {/* Food Image */}
      <img
        src={photo}
        alt={food_name}
        className="w-full h-48 object-cover"
      />

      {/* Card Content */}
      <div className="p-4 space-y-2">
        <h2 className="text-xl font-semibold">{food_name}</h2>

        <p className="text-gray-600">
          🍽 {restaurant_name}
        </p>

        <p className="text-gray-500 text-sm">
          📍 {restaurant_location}
        </p>

        <p className="text-gray-700">
          Reviewer: <span className="font-medium">{reviewer_name}</span>
        </p>

        <p className="text-yellow-500 font-semibold">
          ⭐ Rating: {rating}
        </p>

        {/* Buttons */}
        <div className="flex justify-between items-center pt-3">
          <Link
            to={`/food-details/${_id}`}
            className="px-4 py-2 text-sm bg-primary text-white rounded-lg hover:bg-primary"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;