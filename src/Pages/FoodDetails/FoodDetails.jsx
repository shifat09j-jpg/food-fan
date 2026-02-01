




import { useLoaderData } from "react-router";

const FoodDetails = () => {
//   const food = useLoaderData();

const { result: food } = useLoaderData();


  console.log(food);

  if (!food) {
    return <p>Loading food details...</p>;
  }

  return (
    <div style={{ maxWidth: "600px", margin: "40px auto", padding: "20px" }}>
      <img
        src={food.photo}
        alt={food.food_name}
        style={{ width: "100%", borderRadius: "10px", marginBottom: "15px" }}
      />

      <h2>{food.food_name}</h2>

      <p><strong>Restaurant:</strong> {food.restaurant_name}</p>
      <p><strong>Location:</strong> {food.restaurant_location}</p>
      <p><strong>Reviewer:</strong> {food.reviewer_name}</p>
      <p><strong>Rating:</strong> ⭐ {food.rating}</p>
    </div>
  );
};

export default FoodDetails;
