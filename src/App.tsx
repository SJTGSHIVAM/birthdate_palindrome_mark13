import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Backcard from "./components/Backcard";
import Footer from "./components/Footer";
import About from "./components/About";
import BdayLuck from "./components/BdayLuck";

// https://api.giphy.com/v1/gifs/translate?s=bday&api_key=dc6zaTOxFJmzC&weirdness=1

function App() {
  return (
    <BrowserRouter>
      {" "}
      <Navbar />
      <Switch>
        <Route path="/" component={Backcard} exact />
        <Route path="/bdayluck" component={BdayLuck} exact />
        <Route path="/about" exact component={About} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
