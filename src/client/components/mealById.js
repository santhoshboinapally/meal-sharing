import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {AddMeal} from "./components/addMeal"; 


export default function MealById(){

  const {id} = useParams();
  const[mealwithId, setMealwithId ] = useState([])

  useEffect (() => {
    (async() => { 
            const response = await fetch(`/api/meals/${id}`)
           const data = await response.json()
           setMealwithId(data);
          })()
 },[id])
  return (
    <div>
     { mealwithId.map((meal) => <AddMeal key= {meal.id}{...meal}/>)}
    </div>
  );
}