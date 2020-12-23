import React from "react";
import { Route, Switch } from "react-router-dom";
import RouteNavbar from "./components/RouteNavbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Post from "./components/Post";
import "./App.css";

const App = () => {
  return (
    <>
      <RouteNavbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exaxt path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route path="/posts/:post_id" component={Post} />
      </Switch>
    </>
  );
};

export default App;
