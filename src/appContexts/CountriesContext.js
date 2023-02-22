import { createContext } from "react";

const CountriesContext = createContext({
  countriesCount: 0,
  setCountriesCount: Function.prototype
});

export default CountriesContext;
