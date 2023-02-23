import React from "react";
import { Link, useParams } from "react-router-dom";

const CountryDetails = ({ countries }) => {
  const { countryCode } = useParams();
  const clickedCountry = countries.filter((country) => {
    if (country.alpha3Code === countryCode) {
      return country;
    }
  });

  let borderNames = [];

  countries.forEach((country) => {
    if (clickedCountry[0].borders.includes(country.alpha3Code)) {
      borderNames.push({
        commonName: country.name.common,
        alpha: country.alpha3Code,
      });
    }
  });

  return (
    <div className="col-7">
      <h1>{clickedCountry[0].name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: "30%" }}>Capital</td>
            <td>{clickedCountry[0].capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {clickedCountry[0].area}km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul className="list-unstyled">
                {borderNames.map((country) => {
                  return (
                    <li key={country.alpha} style={{ textAlign: "left" }}>
                      <Link to={`/${country.alpha}`}>{country.commonName}</Link>
                    </li>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetails;
