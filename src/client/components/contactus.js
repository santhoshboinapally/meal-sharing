import React from "react";
function ContactUs() {
    return (<center><div class="contact">
    <h3>ContactUs &#128231;
 </h3>
    <p>Mail : hyfmealsharing@mail.com</p>
    <p>Phone : +45-12345678</p>
    <p>Message : <input type="text"  /><input type="button" class="button-33" value ="Send" onClick={()=>{
     alert('Message Sent Successfully')
    } }/></p>
    </div></center>);
}
export default ContactUs;