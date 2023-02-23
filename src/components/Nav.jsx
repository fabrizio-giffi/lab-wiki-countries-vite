import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
const ironLogo =
  "https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/84/original/logo-ironhack-blue.png";

function Nav() {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <NavLink to={"/"} className="d-flex align-items-center gap-3">
          <img alt="" src={ironLogo} width="40" height="40" className="d-inline-block" />
          <h4>LAB | IronCountries</h4>
        </NavLink>
      </Container>
    </Navbar>
  );
}

export default Nav;
