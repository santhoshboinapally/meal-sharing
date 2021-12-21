import React from "react";
function ContactUs() {
    return (<center><div class="contact">
    <h1>Contact</h1>
    <p>Mail : hyfmealsharing@mail.com</p>
    <p>Phone : +45-12345678</p>
    <p>Message : <input type="text"  /><input type="button" value ="Send" onClick={()=>{
     alert('Message Sent Successfully')
    } }/></p>
    </div></center>);
}
export default ContactUs;