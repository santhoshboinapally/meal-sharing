import React from "react";
import { useEffect,useState } from "react";
const Reviews=()=>{
  const [data,setData]=useState([]);
  useEffect(()=>{
      fetch("/api/review")
      .then(res=>res.json())
      .then(json=>setData(json)) },[])
      return(  <center>
        <div class="reviews">
        <h1>Reviews</h1>
         {data.map(item=>(
          <div class="card">
          Meal-ID : {item.meal_id}<br/>
          Review  : {item.title}<br/>
          STARS  : {item.stars}
          </div>
        ))}
        </div></center>
      )
}

export default Reviews;