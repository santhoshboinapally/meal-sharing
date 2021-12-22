import React  from "react";
import DateTime from "./timer";
const Footer = () => {
    return (      
        <div  class="footer">
          <a href="https://www.linkedin.com/in/santhosh-boinapally/" target="_blank">
          <img
            src="https://img.icons8.com/color/48/000000/linkedin.png"
            alt="linkedin"
            width="30"
          /></a>      
        <a href="https://github.com/santhoshboinapally" target="_blank"
          ><img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Git-logo-orange.svg/640px-Git-logo-orange.svg.png"
            alt="git"
            width="50"
        /></a>
        <a><DateTime /></a>
                   </div>
          );
};
export default Footer;