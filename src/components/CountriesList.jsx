import React from "react";
import { Link, useParams } from "react-router-dom";

const CountriesList = ({ countries }) => {

  return (
        <div
          className="col-5"
          style={{ maxHeight: "90vh", overflow: 'scroll'}}
        >
          <div className="list-group">
            {countries.map(({ name, alpha2Code, alpha3Code }) => {
              return (
                <Link key={alpha3Code}
                  className="list-group-item list-group-item-action"
                  to={`/${alpha3Code}`}
                >
                  <img
                    src={`https://flagpedia.net/data/flags/icon/72x54/${alpha2Code.toLowerCase()}.png`}
                    alt={name.common}
                  />
                  <p>{name.common}</p>
                </Link>
              );
            })}
          </div>
        </div>
  );
};

export default CountriesList;
