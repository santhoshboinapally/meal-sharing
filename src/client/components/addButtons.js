import React from "react";

const AddButtons = () => {
    return (<center>
      <div class="addButtons">
<p> <input type="button"  value="Add Meal " onClick={
    ()=>{
      window.location.href="/addmeal"
    }
  }/>
  <input type="button" value="Add Reservation " onClick={()=>{
      window.location.href="/addreservation/"
    }
    }/>
    <input type="button" value="Add Review " onClick={()=>{
      window.location.href="/addreview"
    }
  }/> </p></div> </center>);
}
export default AddButtons;