import React  from "react";
import DateTime from "./timer";

const Footer = () => {
    return (      
  <div>
  <footer>
<ul>
<li class="footer-list">
<div class="footer-text">
<h4>FindUs &#127759;</h4>
<div class="location">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d562.6390070022399!2d12.539740254828313!3d55.661930599559774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4652539aed46bb31%3A0x352c940085c22f73!2sDISIE%20(Danish%20Institute%20for%20Sustainable%20Innovation%20%26%20Entrepreneurship)!5e0!3m2!1sda!2sdk!4v1623332383917!5m2!1sda!2sdk" ></iframe>
</div>
<p> Designed By &#127828; Santhosh </p>
</div></li>
<li class="footer-list">
<div class="footer-text">
<div class="footer-nav">
<h4>NAVIGATION</h4>
<p><a href="/">Home</a><br/>
<a href="/meals">Meals</a><br/>
<a href="/reviews">Reviews</a><br/>
<a href="/reservations">Reservations</a><br/>
<a href="/contactus">ContactUs</a></p>
</div>
</div></li>
<li class="footer-list">
<div class="footer-text-icons">
  <h4>LINKS </h4>
<a href="https://www.linkedin.com/in/santhosh-boinapally/" target="_blank">
          <img
            src="https://img.icons8.com/color/48/000000/linkedin.png"
            alt="linkedin"
            width="50"
          /></a>      
        <a href="https://github.com/santhoshboinapally" target="_blank"
          ><img
            src="https://cdn2.iconfinder.com/data/icons/well-known-1/1024/GitHub-256.png"
            alt="git"
            width="50"
        /></a>
        <a href="https://www.facebook.com/" target="_blank">
          <img src="https://img.icons8.com/color/48/000000/facebook.png" alt="facebook" width="50"/></a>
        <a href="https://www.instagram.com" target="_blank">
          <img src="https://img.icons8.com/color/48/000000/instagram-new.png" alt="instagram" width="50"/></a>
        <a href="https://www.youtube.com" target="_blank">
          <img src="https://img.icons8.com/color/48/000000/youtube-play.png" alt="youtube" width="50"/></a>
        <p><DateTime /></p>
                </div></li>

</ul></footer> 
</div>
          );
};

export default Footer;