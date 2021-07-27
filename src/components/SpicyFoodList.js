import {useState} from 'react'
import { spicyFoods, getNewSpicyFood } from "../data";

const SpicyFoodList =() => {

  const [foodList, setFoodList] = useState([spicyFoods])

  // const foodUpdate = () => {
   
    
  // }

  return (
    <>
    <button onClick={()=>setFoodList([...foodList, {getNewSpicyFood}])}>Add New Food </button>
  <ul>
     { foodList.map((food) => (
      <li key={food.id}>
        {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
      </li>
     ))}
        
        
    </ul>

    </>
  );
}

export default SpicyFoodList



























// import React, { useState } from "react";
// import { spicyFoods, getNewSpicyFood } from "../data";

// function SpicyFoodList() {
//   const [foods, setFoods] = useState(spicyFoods);

//   function handleAddFood() {
//     const newFood = getNewSpicyFood();
//     const newFoodArray = [...foods, newFood];
//     setFoods(newFoodArray)  
//   }
   
//   function handleLiClick(){
//   const newFoodArray = foods.filter((food) => food.id !== id);
//     setFoods(newFoodArray);
//   }
  

//   const foodList = foods.map((food)=>(
//     <li key={food.id} onClick={() => handleLiClick(food.id)}>
//       {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine} 
//     </li>
//   ))

//   return (
//     <div>
//       <button onClick={handleAddFood}>Add New Food</button>
//       <ul>{foodList}</ul>
//     </div>
//   );
// }

// export default SpicyFoodList;
