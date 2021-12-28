import React, {useState} from 'react';

export function AddReservation({}) {
const [guests, setGuest] = useState("");
const [mealid, setMealId] = useState("");
const [phone, setPhone] = useState("");
const [Name, setName] = useState("");

  function onSubmit(){
    if(guests!== ''){
    (async() => { 
      try{
        fetch('/api/reservation',{
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              number_of_guests: guests,
              meal_id: mealid,
              contact_phonenumber: phone,
              contact_name: Name
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

return (<center>
    <div class="add">
      <h3>Add a Reservation</h3>
<form>
<label>
    Guests :
    <input type="number" value = {guests} onChange= {(e) => setGuest(e.target.value) } required />
 </label><br/> 
<label>
    Meal Id :
    <input type="number" value = {mealid} onChange= {(e) => setMealId(e.target.value) } required />
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
    </div></center>
)
}