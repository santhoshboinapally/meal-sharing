import React, {useState} from 'react';

export function AddMeal({}) {
const [title, setTitle] = useState("");
const [price, setPrice] = useState("");

  function onSubmit(){
    if(title!== ''){
    (async() => { 
      try{
        fetch('/api/meals',{
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                title: title,
                price: price
            })
        });
      }
        catch (error){
          throw error;
        }
    })()
    alert('your Meal is Added');
  }
  else{
    alert('please enter the details')
  }
}

return (<center>
    <div class="add">
      <h3>Add a Meal</h3>
<form>
  <label>
    Name :
    <input type="text" value = {title} onChange= {(e) => setTitle(e.target.value) } required />
  </label><br/>
  <label>
    Cost :
    <input type="number" value = {price} onChange= {(e) => setPrice(e.target.value) } required />
  </label><br/>
   <button  onClick= {onSubmit} >submit </button>
</form>
    </div></center>
)
}