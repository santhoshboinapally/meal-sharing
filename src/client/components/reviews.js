import React from "react";
import { useEffect,useState } from "react";
const Reviews=()=>{
  const [data,setData]=useState([]);
  useEffect(()=>{
      fetch("/api/review")
      .then(res=>res.json())
      .then(json=>setData(json)) },[])
      return(
        <div class="reviews">
        <h1>Reviews</h1>
         <p>Welcome To Reviews Page</p>
        {data.map(item=>(
          <div>
            <ul>
          <li>ID:{item.id}<br/>
          NAME:{item.title}<br/>
          COST:{item.stars}
          </li>
          </ul>
          </div>
        ))}
        </div>
      )
}

export default Reviews;