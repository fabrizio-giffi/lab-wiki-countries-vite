import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Spin from "./Spin";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function CountryDetails({ countries }) {
  const { id } = useParams();
  const apiURL = `https://ih-countries-api.herokuapp.com/countries/${id}`;

  const [currentCountry, setCurrentCountry] = useState();
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    axios
      .get(apiURL)
      .then((response) => {
        setCurrentCountry(response.data);
        setFetching(false);
      })
      .catch((error) => {
        console.log("There was an error: ", error);
      });
  }, [id]);

  if (fetching) {
    return <Spin />;
  }

  return (
    <Container className="mt-5 col-5 d-flex flex-column align-items-center">
      <Card border="light" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={`https://flagcdn.com/w160/${currentCountry.alpha2Code.toLowerCase()}.png`}
          alt={currentCountry.name.common}
        />
        <Card.Body>
          <Card.Title className="text-center">{currentCountry.name.common}</Card.Title>
          <ListGroup>
            <ListGroup.Item>
              <strong>Capital city: </strong>
              {currentCountry.capital}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Area: </strong>
              {currentCountry.area} km<sup>2</sup>
            </ListGroup.Item>
          </ListGroup>
          <ListGroup className="mt-3">
            <Card.Text>
              <strong>Borders:</strong>
            </Card.Text>
            {currentCountry.borders.length ? (
              currentCountry.borders.map((borderCode) => {
                let country = countries.filter((country) => country.alpha3Code === borderCode)[0];
                return (
                  <ListGroup.Item className="borderCountry" as="li">
                    <Link key={country.alpha3Code} to={`/${borderCode}`}>
                      {country.name.common}
                    </Link>
                  </ListGroup.Item>
                );
              })
            ) : (
              <ListGroup.Item>There's no bordering country</ListGroup.Item>
            )}
          </ListGroup>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default CountryDetails;
