import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import CountryDetails from "./components/CountryDetails";
import CountriesList from "./components/CountriesList";
import Container from "react-bootstrap/Container";
import axios from "axios";
import Spin from "./components/Spin";

const apiURL = "https://ih-countries-api.herokuapp.com/countries";

function App() {
  const [countriesArr, setCountriesArr] = useState([]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    axios
      .get(apiURL)
      .then((response) => {
        setCountriesArr(response.data.sort((a, b) => a.name.common.localeCompare(b.name.common)));
        setFetching(false);
      })
      .catch((error) => {
        console.log("There was an error: ", error);
      });
  }, []);

  return (
    <>
      <Nav />

      {fetching && <Spin />}

      <Container className="main">
        <CountriesList countries={countriesArr} />
        <Routes>
          <Route path="/:id" element={<CountryDetails countries={countriesArr} />}></Route>
        </Routes>
      </Container>
    </>
  );
}
export default App;
