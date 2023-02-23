import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";

function CountriesList({ countries }) {
  return (
    <Container className="mt-5 col-5">
      <ListGroup>
        {countries.map((country) => {
          return (
            <ListGroup.Item className="countriesList" key={country.alpha3Code}>
              <Link className="d-flex flex-column align-items-center" to={`/${country.alpha3Code}`}>
                <img
                  src={`https://flagcdn.com/w160/${country.alpha2Code.toLowerCase()}.png`}
                  alt={country.name.common}
                ></img>
                <p className="sideBarName">{country.name.common}</p>
              </Link>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </Container>
  );
}

export default CountriesList;
