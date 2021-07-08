import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import TopBar from "./components/topBar/TopBar";
import SideBar from "./components/SideBar/SideBar";
import Home from "./pages/home/Home";
import Users from "./pages/users/Users";
import User from "./pages/user/User";
import Products from "./pages/products/Products"
  
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <TopBar />
        <div className="container">
          <SideBar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Home">
              <Home />
            </Route>
            <Route path="/Users">
              <Users />
            </Route>
            <Route path="/User/:userId">
              <User />
            </Route>
            <Route path="/Products">
              <Products />
            </Route>
            


          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
