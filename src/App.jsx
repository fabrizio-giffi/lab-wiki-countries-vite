import { useState, useEffect } from "react";
import "./App.css";
import countriesJson from "./countries.json";
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import { Route, Routes } from "react-router-dom";

function App() {
  const [countries, setCountries] = useState([]);

  const fetchData = () => {
    return fetch("https://ih-countries-api.herokuapp.com/countries")
          .then((response) => response.json())
          .then((data) => setCountries(data.reverse()));
  }

  useEffect(() => {
      fetchData();
  },[])

  return (
    <div className="App">
      <Navbar />
      {countries.length > 0 && 
      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />
          <Routes>
            
            <Route path="/:countryCode"  element={<CountryDetails countries={countries}/>}/>
          </Routes>
        </div>
      </div>
}</div>
  );
}

export default App;
