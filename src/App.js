import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import RouteNavbar from "./components/RouteNavbar"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Post from "./components/Post"
import "./App.css";

const App = () => {
  return (
    <>
      <RouteNavbar />

      <Route exact path="/" component={Home} />
      <Route  path="/about" component={About} />
      <Route  path="/contact" component={Contact} />
      <Route  path="/:post_id" component={Post} />
    </>
  );
};

export default App;

{/* <Route path="/shop/:id" component={ItemDetail} />
  <Redirect to="/404" component={NotFound} /> */}