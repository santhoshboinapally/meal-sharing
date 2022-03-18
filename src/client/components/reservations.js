import React from "react";
import { useEffect,useState } from "react";
const Reservations=()=>{
  const [data,setData]=useState([]);
  useEffect(()=>{
      fetch("/api/reservation")
      .then(res=>res.json())
      .then(json=>setData(json)) },[])
      return(<center>
        <div class="reservation">
        <h1>Reservations</h1>
         {data.map(item=>(
          <div class="card">  
          NAME:{item.contact_name}<br/>         
          NO OF GUESTS:{item.number_of_guests}<br/>
          MEAL ID:{item.meal_id}<br/>   
          PH NO:{item.contact_phonenumber}<br/>       
          NAME:{item.contact_name}<br/>              
                </div>
        ))}
        </div></center>
      )
}
export default Reservations;