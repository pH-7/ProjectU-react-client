import * as userService from "../../services/user.service";
import Layout from "../layout/Layout";
import React from "react";
import { useEffect, useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const EditUser = () => {
  const { userId } = useParams();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const initializeUser = async () => {
    const response = await userService.retrieveUser(userId);
    setName(response.name);
    setEmail(response.email);
    setCity(response.city);
    setCountry(response.country);
  };

  useEffect(() => {
    initializeUser();
  }, [userId]);

  const submitForm = async (event) => {
    event.preventDefault();

    const payload = {
      name,
      email,
      city,
      country,
    };
    try {
      if (await userService.editUser(userId, payload)) {
        await initializeUser();
        toast.success("Successfully updated.");
      }
    } catch (err) {
      const {
        data: {
          errors: { body },
        },
      } = err.response;

      const errorMessage = body[0]?.message;
      toast.error(`Error while saving. ${errorMessage}`);
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
                value={name}
                onChange={(fieldElement) => setName(fieldElement.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                placeholder="Email"
                onChange={(fieldElement) => setEmail(fieldElement.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                value={city}
                placeholder="City"
                onChange={(fieldElement) => setCity(fieldElement.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                value={country}
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

export default EditUser;
