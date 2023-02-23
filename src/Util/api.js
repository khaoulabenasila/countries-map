import { useEffect, useState } from "react";
import axios from "axios";
export const apiURL = "https://restcountries.com/v3.1/all";

function currenciesObjToStr(currencies) {
  var str = "";
  Object.keys(currencies).forEach(function (key, index) {
    str = str.concat(` ${currencies[key].name} (${currencies[key].symbol}) |`);
  });
  return str.slice(0, -1);
}
function languagesObjToStr(languages) {
  var str = "";
  Object.keys(languages).forEach(function (key, index) {
    str = str.concat(` ${languages[key]} ,`);
  });
  return str.slice(0, -1);
}

const useFetchData = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(apiURL);
        const sortedData = response.sort((a, b) =>
          a.name.common > b.name.common
            ? 1
            : b.name.common > a.name.common
            ? -1
            : 0
        );

        var countriesArr = sortedData.map((item) => {
          return {
            name: item.name.common,
            continent: item.region,
            flag: item.flags["png"],
            capital: item.capital ? item.capital[0] : "",
            currencies: item.currencies
              ? currenciesObjToStr(item.currencies)
              : "",
            languages: item.languages ? languagesObjToStr(item.languages) : "",
            population: item.population ? item.population : " ",
            area: item.area ? item.area : " ",
            maps: item.maps,
            capitalPos: item.capitalInfo.latlng ? item.capitalInfo.latlng : [],
            countryPos: item.latlng ? item.latlng : [],
            demonyms: item.demonyms ? item.demonyms["eng"].f : "",
          };
        });

        setData(countriesArr);
      } catch (error) {
        setData(null);
      }
    };

    fetchData();
  }, []);

  return data;
};

export default useFetchData;
