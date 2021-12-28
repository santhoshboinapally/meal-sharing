import React from "react";
import { NavigationBar } from "./navigationbar";
function Header() {
    return (
         <center>
        <div className="header">
         <img  src ="./public/mslogo.png"   alt="mylogo" width="150px" height="100px"  />
         <NavigationBar />
        </div>
        </center>  
    );
}
export default Header;