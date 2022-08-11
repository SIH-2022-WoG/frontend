import ContainerFluid from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navigationbar = () => {
  return (
    <Navbar bg="success" variant="dark">
      <ContainerFluid>
        <Nav className="me-auto">
          <Navbar.Brand>
            <h4>WrathOfGod</h4>
          </Navbar.Brand>
          <Nav.Link>Home</Nav.Link>
          <Nav.Link>Login</Nav.Link>
          <Nav.Link>Sign up</Nav.Link>
        </Nav>
      </ContainerFluid>
    </Navbar>
  );
};

export default Navigationbar;
