import React from "react";
import css from "./App.css";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home";
import DateTime from "./components/timer";
import Meals from "./components/meals";
import Reviews from "./components/reviews";
import Reservations from "./components/reservations";
import ContactUs from "./components/contactus";

function App() {
  return (
   <div>
      <Router>
      <Header/>
        <nav >
        <div class="nav-links">
        <Link to="/">Home</Link>
        <Link to="/meals">Meals</Link>
        <Link to="/reviews">Reviews</Link>
        <Link to="/reservations">Reservations</Link>
        <Link to="/contactus">ContactUs</Link>
        </div>
        </nav>
      <Router>
      <Route exact path="/">       
      <Home />
      </Route>
      <Route exact path="/meals">
      <Meals />
      </Route>
      <Route exact path="/reviews">
      <Reviews />
      </Route>
      <Route exact path="/reservations">
      <Reservations />
      </Route>
      <Route exact path="/contactus">
      <ContactUs />
      </Route>
      <DateTime/>
      </Router>
    </Router>
    </div>
  );
}
export default App;
