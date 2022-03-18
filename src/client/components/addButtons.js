import React from "react";

const AddButtons = () => {
    return (<center>
      <div class="addButtons">
<p> <input type="button" class="button-33" value="Add Meal " onClick={
    ()=>{
      window.location.href="/addmeal"
    }
  }/>
  <input type="button" class="button-33" value="Add Reservation " onClick={()=>{
      window.location.href="/addreservation/"
    }
    }/>
    <input type="button" class="button-33" value="Add Review " onClick={()=>{
      window.location.href="/addreview"
    }
  }/> </p></div> </center>);
}
export default AddButtons;