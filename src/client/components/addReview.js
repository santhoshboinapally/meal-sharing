import React, {useState,useEffect} from 'react';

export function AddReview({}) {
const [title, setTitle] = useState("");
const [mealid, setMealId] = useState("");
const [stars, setStars] = useState("");

  function onSubmit(){
    if(title!== ''){
    (async() => { 
      try{
        fetch('/api/review',{
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                title: title,
                meal_id: mealid,
                stars: stars,
            })
        });
      }
        catch (error){
          throw error;
        }
    })()
    alert('your Meal Review is Added');
  }
  else{
    alert('please enter the details')
  }
}

return (<center>
    <div class="add">
<form>
  <label>
    Name :
    <input type="text" value = {title} onChange= {(e) => setTitle(e.target.value) } required />
  </label><br/>
  <label>
    Meal Id :
    <input type="number" value = {mealid} onChange= {(e) => setMealId(e.target.value) } required />
  </label><br/>
  <label>
    Stars :
    <input type="number" value = {stars} onChange= {(e) => setStars(e.target.value) } required />
  </label><br/>
   <button  onClick= {onSubmit} >submit </button>
</form>
    </div></center>
)
}