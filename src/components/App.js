import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./common/Header/";
import Footer from "./common/Footer/";
import HomePage from "../pages/home/HomePage";
import CachePage from "../pages/cache/CachePage";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/cache" component={CachePage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
