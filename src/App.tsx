import React from "react";
import Navbar from "./components/NavBar/Navbar";
import Exercise from "./Pages/Exercise/Exercise";
import Todo from "./Pages/Todo/Todo";
import { Switch, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Todo} />
        <Route path="/exercise" component={Exercise} />
      </Switch>
    </>
  );
};

export default App;
