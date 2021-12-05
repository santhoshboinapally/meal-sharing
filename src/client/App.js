import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DateTime from "./components/timer";
import Meals from "./components/meals";
import Reviews from "./components/reviews";
import Reservations from "./components/reservations";

function App() {
  return (
        <Router>
      <Route exact path="/">        
        <h1>Welcome to Meal-sharing App</h1>
      </Route>
      <Route exact path="/Meals">
        <Meals />
       </Route>
      <Route exact path="/reviews">
       <Reviews />
      </Route>
      <Route exact path="/reservations">
       <Reservations />
      </Route>
       <DateTime />
      </Router>
                
  );
}

export default App;
