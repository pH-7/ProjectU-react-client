import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <Container>
      <hr />
      <Row className="mt-5 mb-5 justify-content-center">
        <Col md={{ span: 3, offset: 1 }}>
          <h4>User</h4>
          <NavLink className="text-muted fw-bold" to="/create">
            Create A User
          </NavLink>
        </Col>

        <Col md={{ span: 3, offset: 1 }}>
          <h4>About Us</h4>

          <NavLink className="text-muted" to="/about">
            About Us
          </NavLink>
        </Col>

        <Col md={{ span: 3 }}>
          <h4>Contact</h4>
          <NavLink className="text-muted" to="/contact">
            Contact
          </NavLink>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
