import React, { useEffect, useState } from 'react';
import Banner from '../../components/Banner';
import FoodCard from '../../components/FoodCard';

const Home = () => {
  const [foods, setfoods] = useState([])

  useEffect(() =>{
    fetch('https://foodfan-server.vercel.app/foods')
    .then(res => res.json())
    .then(data => setfoods(data));
  },[])
  const topRatedfoods = foods
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6);
    return (
        <div>
          <Banner/> 
          <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-10 text-primary">
          Featured Reviews
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {topRatedfoods.map(food => (
            <FoodCard key={food._id} food={food} />
          ))}
        </div>
            <div className="text-center mt-10">
          <button
            onClick={() => window.location.href = "/all-foods"}
            className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary"
          >
            Show All Reviews
          </button>
        </div>
      </section>

        </div>
    );
};

export default Home;