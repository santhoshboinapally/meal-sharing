import React from "react";
import { useEffect,useState } from "react";
const Meals=()=>{
  const [data,setData]=useState([]);
  useEffect(()=>{
      fetch("/api/meals")
      .then(res=>res.json())
      .then(json=>setData(json)) },[])
      return(
        <div class="meals">
        <h1>Menu</h1>
        <p>Chose your Meals here</p>
        {data.map(item=>(
          <div>
            <ul>
          <li>ID : {item.id}<br/>
          NAME : {item.title}<br/>
          COST : {item.price} DKK
          </li>
          </ul>
          </div>
        ))}
        </div>
      )
}
export default Meals;
