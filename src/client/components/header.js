import React from "react";
import { NavigationBar } from "./navigationbar";

function Header() {
    return (
         <center>
        <div className="header">
          <h1>Meal Sharing</h1>
          <NavigationBar />
        </div>
        </center>  
    );
}
export default Header;
