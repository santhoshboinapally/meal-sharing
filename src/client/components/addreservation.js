import React, {useState,useEffect} from 'react';

export function AddReservation({}) {
const [guests, setGuest] = useState("");
const [mealId, setMealId] = useState("");
const [phone, setPhone] = useState("");
const [Name, setName] = useState("");

  function onSubmit(){
    if(title!== ''){
    (async() => { 
      try{
        fetch('/api/reservation',{
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                guests: guests,
                mealId: mealId,
                phone: phone,
                Name: Name
                })
        });
      }
        catch (error){
          throw error;
        }
    })()
    alert('your Meal Reservation is Added');
  }
  else{
    alert('please enter the details')
  }
}

return (
    <div class="addmeal">
<form>
  <label>
    Guests :
    <input type="text" value = {guests} onChange= {(e) => setGuest(e.target.value) } required />
  </label><br/>
  <label>
    Meal Id :
    <input type="number" value = {mealId} onChange= {(e) => setMealId(e.target.value) } required />
  </label><br/>
  <label>
    Phone :
    <input type="number" value = {phone} onChange= {(e) => setPhone(e.target.value) } required />
  </label><br/>
    <label>
    Name :
    <input type="text" value = {Name} onChange= {(e) => setName(e.target.value) } required />
    </label><br/>
   <button  onClick= {onSubmit} >submit </button>
</form>
    </div>
)
}