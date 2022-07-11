import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { toast } from "react-toastify";

const CreateUser = () => {
  const createUsersUrl = "http://localhost:4000/v1/user";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const submitForm = async (event) => {
    event.preventDefault();

    const payload = {
      name,
      email,
      city,
      country,
    };

    try {
      const res = await axios.post(`${createUsersUrl}`, payload);

      res.data.status
        ? toast.success("User added!")
        : toast.warn(`User couldn't be added`);
    } catch (err) {
      toast.error("Snap, an error has occurred...");
    }
  };

  return (
    <Container className="mb-5">
      <Row className="justify-content-center">
        <Col lg={6}>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                onChange={(elName) => setName(elName.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                onChange={(elEmail) => setEmail(elEmail.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="City"
                onChange={(elCity) => setCity(elCity.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                placeholder="Country"
                onChange={(elCountry) => setCountry(elCountry.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={submitForm}>
              Add User
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateUser;
