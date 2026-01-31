import React from 'react';
import { useLoaderData } from 'react-router';
import FoodCard from '../../components/FoodCard';

const AllFoods = () => {
    const data = useLoaderData();
    console.log(data);


    return (
        <div>
            <div className='text-3xl font-bold text-center py-5 text-primary mb-8'>All Reviews</div>
         <div className='grid grid-cols-3 lg:grid-cols-4 gap-3'>
           {data.map(food => <FoodCard key={food._id} food={food}/>)}
         </div> 
        </div>
    );
};

export default AllFoods;