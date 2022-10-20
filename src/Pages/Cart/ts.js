import React, { useEffect, useState } from "react";
import Search from "./components/Search";
import "./App.css";
import Countries from "./components/Countries";
const url = "https://restcountries.com/v3.1/all";
function App() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredCountries, setFilteredCountries] = useState(countries);

  const handleRemoveCountry = (name) => {
    const filter = filteredCountries.filter(
      (country) => country.name.common !== name
    );
    setFilteredCountries(filter);
  };
  const handleSearch = (searchValue) => {
    let value = searchValue.toLowerCase();
    const newCountries = countries.filter((country) => {
      const countryName = country.name.common.toLowerCase();
      return countryName.startsWith(value);
    });
    setFilteredCountries(newCountries);
  };
  useEffect(() => {
    getData(url);
  }, []);

  const getData = async (url) => {
    try {
      setLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      setCountries(data);
      setFilteredCountries(data);
      setLoading(false);
      setError(null);
      console.log(countries);
    } catch (error) {
      setLoading(true);
      setError(error);
    }
  };

  return (
    <div className="App">
      <h1>Country</h1>
      <Search onSearch={handleSearch} />
      {isLoading && (
        <div
          className="spinner-border "
          style={{
            position: "fixed",
            left: "0px",
            top: "0px",
            textAlign: "center",
          }}
          role="status"
        >
          <span className="visually-hidden d-flex justify-content-center"></span>
        </div>
      )}
      {error && <h2>Fetch Failed, Please Check</h2>}
      {countries && (
        <Countries
          countries={filteredCountries}
          onRemoveCountry={handleRemoveCountry}
        />
      )}
    </div>
  );
}

export default App;
