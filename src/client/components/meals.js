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
           {item.title} <br/>
          <img src="https://cdn4.iconfinder.com/data/icons/food-icons/burger.png" width="100px" height="80px" alt="burger"/> <br/>
          <div class="sub" >
          ID : {item.id}<br/>
          Price : {item.price} DKK
          </div>
          </div>
        )
      )
}    </div></center>
      )
}
export default Meals;