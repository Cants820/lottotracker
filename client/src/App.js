import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Picks from "./Pages/Picks";
import Groups from "./Pages/Groups";
import Settings from "./Pages/Settings";
import NoMatch from "./Pages/NoMatch";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Picks" component={Picks} />
        <Route exact path="/Groups" component={Groups} />
        <Route exact path="/Settings" component={Settings} />
        <Route component={NoMatch} />
      </Switch>
      <Footer />
    </Router>
  );
}


export default App;
