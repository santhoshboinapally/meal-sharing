import React from "react";
import { NavigationBar } from "./navigationbar";
import mslogo from "../assets/images/mslogo.png";
function Header() {
    return (
         <center>
        <div className="header">
         <img  src ={mslogo}   alt="mylogo" width="150px" height="100px"  />
         <NavigationBar />
        </div>
        </center>  
    );
}
export default Header; 
