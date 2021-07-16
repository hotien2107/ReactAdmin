import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import TopBar from "./components/topBar/TopBar";
import SideBar from "./components/SideBar/SideBar";
import Home from "./pages/home/Home";
import Users from "./pages/users/Users";
import User from "./pages/user/User";
import Products from "./pages/products/Products";
import Product from "./pages/product/Product";
import Analytics from "./pages/analytics/Analytics";
import Hot from "./pages/hot/Hot";
import Staff from "./pages/staff/Staff";

import "./App.css";
import StaffDetail from "./pages/staffDetail/StaffDetail";
import Information from "./pages/information/Information";
import Transactions from "./pages/transactions/Transactions";

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

            <Route path="/Films">
              <Users />
            </Route>

            <Route path="/Film/:filmId">
              <User />
            </Route>

            <Route path="/Products">
              <Products />
            </Route>

            <Route path="/Product/:productId">
              <Product />
            </Route>

            <Route path="/Transactions">
              <Transactions />
            </Route>

            <Route path="/Analytics">
              <Analytics />
            </Route>

            <Route path="/Hot">
              <Hot />
            </Route>

            <Route path="/Friends">
              <Staff />
            </Route>

            <Route path="/Friend">
              <StaffDetail />
            </Route>

            <Route path="/Information">
              <Information />
            </Route>

          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
