import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { toast } from "react-toastify";

import Layout from "../../components/layout/Layout";
import { firstUpperCase } from "../../helpers/string.helper";
import * as userService from "../../services/user.service";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const submitForm = async (event) => {
    event.preventDefault();

    const createUserPayload = {
      name,
      email,
      city,
      country,
    };

    try {
      const response = await userService.createUser(createUserPayload);

      if (response?.status) {
        const userName = response?.user?.name;

        toast.success(`User ${userName} has been created!`);

        // Clear states
        setName("");
        setEmail("");
        setCity("");
        setCountry("");
      } else {
        toast.warn("An error has occurred.");
      }
    } catch (error) {
      const getErrorMessage = () => {
        const {
          data: {
            errors: { body },
          },
        } = error.response;

        const message = body[0]?.message;

        // Uppercase the first letter of the message
        return firstUpperCase(message);
      };

      toast.error(getErrorMessage());
    }
  };

  return (
    <Layout>
      <Row className="justify-content-center">
        <Col lg={6}>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                onChange={(fieldElement) => setName(fieldElement.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                onChange={(fieldElement) => setEmail(fieldElement.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="City"
                onChange={(fieldElement) => setCity(fieldElement.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                placeholder="Country"
                onChange={(fieldElement) =>
                  setCountry(fieldElement.target.value)
                }
              />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={submitForm}>
              Add User
            </Button>
          </Form>
        </Col>
      </Row>
    </Layout>
  );
};

export default CreateUser;
