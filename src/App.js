import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Composents/NavBar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Logo from "./Composents/Logo";
import CountryDetails from "./Composents/CountryDetails";
import CountriesContext from "./appContexts/CountriesContext";
const App = () => {
  const [countriesCount, setCountriesCount] = useState(0);
  return (
    <div>
      <Logo />
      <NavBar />
      <CountriesContext.Provider value={{ countriesCount, setCountriesCount }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<CountryDetails />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </CountriesContext.Provider>
    </div>
  );
};

export default App;
