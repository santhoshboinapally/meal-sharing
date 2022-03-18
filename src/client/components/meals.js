import React from "react";
import { useEffect,useState } from "react";
import { Route } from "react-router-dom";

const Meals=()=>{
  const [data,setData]=useState([]);
  useEffect(()=>{
      fetch("/api/meals")
      .then(res=>res.json())
      .then(json=>setData(json)) },[])
      return(
        <center>
        <div class="meals">
        <h1>Meals</h1>
         {data.map(item=>(
          <div class="card">
          <img src="https://www.sunset-boulevard.dk/wp-content/uploads/2021/04/J644_Web_BURGER_Crispy_Chicken_978x828px.jpg" width="100%" height="100%" alt="burger"/> <br/>
          <div class="sub" >
          {item.title} <br/>
          Price : {item.price} DKK
          </div>
          </div>
        )
      )
}    </div></center>
      )
}
export default Meals;
