import React from "react";
import { useEffect,useState } from "react";

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
        <p>Chose your Meals here</p>
         {data.map(item=>(
          <div class="card">
          <img src="https://www.pngall.com/wp-content/uploads/5/Tofu-Burger.png" width="100px" height="80px" alt="burger"/> <br/>
          ID : {item.id}<br/>
          NAME : {item.title} <br/>
          COST : {item.price} DKK
          </div>
        )
      )
}    </div></center>
      )
}
export default Meals;