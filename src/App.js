import React from "react";
import { Route, Switch } from "react-router-dom";
import RouteNavbar from "./components/RouteNavbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Post from "./components/Post";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import NotFound from "./components/NotFound";

import "./App.css";

const App = () => {
  return (
    <>
      <RouteNavbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/posts/:post_id" component={Post} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
};

export default App;
