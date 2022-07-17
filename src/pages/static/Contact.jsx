import Layout from "../../components/layout/Layout";
import { Col, Row } from "react-bootstrap";

const Contact = () => {
  return (
    <Layout>
      <h3 className="text-center">Contact Us</h3>
      <Row className="justify-content-center">
        <Col md={10}>
          <p class="text-center">
            Contact me at <span className="fst-italic">MY EMAIL ADDRESS</span>
          </p>
        </Col>
      </Row>
    </Layout>
  );
};

export default Contact;
