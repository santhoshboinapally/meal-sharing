import React from "react";
import css from "./App.css";
import { BrowserRouter as Link, Route, Router } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home";
import DateTime from "./components/timer";
import Meals from "./components/meals";
import Reviews from "./components/reviews";
import Reservations from "./components/reservations";
import ContactUs from "./components/contactus";
import { AddMeal } from "./components/addMeal";
import { AddReview } from "./components/addReview";
import { AddReservation } from "./components/addreservation";
import Footer from "./components/footer";
import AddButtons from "./components/addButtons";
import { NavigationBar } from "./components/navigationbar";

function App() {
  return (
    <div>
        <Header/>
        <NavigationBar/>
        <AddButtons />
       <Route exact path="/" component={Home} />       
       <Route exact path="/meals" component={Meals} />
      <Route exact path="/reviews" component={Reviews} />
      < Route exact path="/reservations" component={Reservations} />
      <Route exact path="/contactus" component={ContactUs} />
      <Route exact path="/addmeal" component={AddMeal} />
      <Route exact path="/addreview" component={AddReview} />
      <Route exact path="/addreservation" component={AddReservation} />
      <DateTime />
      </div>
  );
}
export default App;