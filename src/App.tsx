import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from "react-router-dom";

import HomePage from "./Pages/Home"
import AboutPage from "./Pages/About"
import ServicesPage from "./Pages/Services"
import ProductApp from "./Pages/ProductApp"
import Header from "./Components/Header"
import Footer from "./Components/Footer"

function App() {

  {/*
    isMobileMenuToggled
    isOnProductApp
  */}
  const location = useLocation()

  return (
    <div className="App">
      { location.pathname !== "/productapp" && <Header /> }
      <Switch>
        <Route path="/productapp">
          <ProductApp />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/services">
          <ServicesPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
      { location.pathname !== "/productapp" && <Footer /> }
    </div>
  );
}

export default App;
