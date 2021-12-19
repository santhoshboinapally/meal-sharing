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
        <h1>Meals</h1>
        <p>Chose your Meals here</p>
        <p> <input type={"button" } value={"Add Meal"} onClick={
          ()=>{
            window.location.href="/addmeal"
          }
        }/>
        <input type="button" value={"Add Reservation" }onClick={()=>{
            window.location.href="/addreservation/"
          }
          }/>
          <input type="button" value="Add Review" onClick={()=>{
            window.location.href="/addreview"
          }
        }/> </p> 
        {data.map(item=>(
          <div class="card">            
          ID : {item.id}<br/>
          NAME : {item.title} <br/>
          COST : {item.price} DKK
          </div>
        )
      )
}           
        </div>
      )
}
export default Meals;
