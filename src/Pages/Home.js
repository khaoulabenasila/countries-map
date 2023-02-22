import React, { useContext, useState } from "react";
import Filter from "../Composents/Filter";
import Countries from "./Countries";
import useFetchData from "../Util/api";
import CountriesContext from "../appContexts/CountriesContext";

const Home = () => {
  const { setCountriesCount } = useContext(CountriesContext);
  const [selectedContinent, setSelectedContinent] = useState("");
  const fetchedData = useFetchData();
  //const [dipslayedCountries,setDipslayedCountries] = useState([])
  const dipslayedCountries = selectedContinent
    ? fetchedData.filter(
        (c) => c.continent && c.continent === selectedContinent
      )
    : fetchedData;
  setCountriesCount(dipslayedCountries.length);
  const handleSelectedCountryChange = (event) => {
    setSelectedContinent(event.target.value);
  };
  const handleButton = () => {
    setSelectedContinent("");
  };
  return (
    <div>
      {dipslayedCountries.length > 0 && (
        <div>
          <Filter
            selectedContinent={selectedContinent}
            onRadioChange={handleSelectedCountryChange}
            onButtonClicked={handleButton}
          />

          <Countries countriesList={dipslayedCountries} />
        </div>
      )}
    </div>
  );
};

export default Home;
