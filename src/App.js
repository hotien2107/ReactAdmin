import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import TopBar from "./components/topBar/TopBar";
import SideBar from "./components/SideBar/SideBar";
import Home from "./pages/home/Home";
import Users from "./pages/users/Users";

import "./App.css";

function App() {
  return (
    <div className="App">
      <TopBar />
      <div className="container">
        <SideBar />
        <Router>
          <Switch>

            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/users">
              <Users />
            </Route>

          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
