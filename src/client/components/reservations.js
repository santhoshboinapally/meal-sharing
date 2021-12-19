import React from "react";
import { useEffect,useState } from "react";
const Reservations=()=>{
  const [data,setData]=useState([]);
  useEffect(()=>{
      fetch("/api/reservation")
      .then(res=>res.json())
      .then(json=>setData(json)) },[])
      return(
        <div class="reservation">
        <h1>Reservations</h1>
    <p>Welcome To Reservations Page</p>
        {data.map(item=>(
          <div>
            <ul>
          <li>ID:{item.id}<br/>
          MEAL ID:{item.meal_id}<br/>
          NO OF GUESTS:{item.number_of_guests}<br/>
          NAME:{item.contact_name}<br/>
          PH NO:{item.contact_phonenumber}<br/>
          </li>
          </ul>
          </div>
        ))}
        </div>
      )
}
export default Reservations;