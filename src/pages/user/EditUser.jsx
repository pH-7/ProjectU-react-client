import Layout from "../../components/layout/Layout";
import { firstUpperCase } from "../../helpers/string.helper";
import * as userService from "../../services/user.service";
import { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { NavLink, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const EditUser = () => {
  const { userId } = useParams();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const populateUserFields = async () => {
    try {
      const user = await userService.retrieveUser(userId);
      setName(user.name);
      setEmail(user.email);
      setCity(user.city);
      setCountry(user.country);
    } catch (err) {
      console.error(err.message);
      window.location.href = "/";
    }
  };

  const submitForm = async (event) => {
    event.preventDefault();

    const payload = {
      name,
      email,
      city,
      country,
    };

    try {
      const response = await userService.editUser(userId, payload);

      if (response?.status) {
        const userName = response.user.name;
        toast.success(`${userName} has been updated.`);
      } else {
        toast.warn(`The user couldn't be updated.`);
      }
    } catch (error) {
      const retrieveErrorMessage = () => {
        const {
          data: {
            errors: { body },
          },
        } = error.response;
        const errorMessage = body[0]?.message;

        return firstUpperCase(errorMessage);
      };

      toast.error(retrieveErrorMessage());
    }
  };

  useEffect(() => {
    populateUserFields();
  }, [userId]);

  return (
    <Layout>
      <h3 className="text-center">Edit User</h3>
      <Row className="justify-content-center">
        <Col lg={6}>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(fieldElement) => setName(fieldElement.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(fieldElement) => setEmail(fieldElement.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                value={city}
                onChange={(fieldElement) => setCity(fieldElement.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                value={country}
                onChange={(fieldElement) =>
                  setCountry(fieldElement.target.value)
                }
              />
            </Form.Group>

            <Button variant="primary" onClick={submitForm} className="m-1">
              Update
            </Button>

            <Button
              variant="danger"
              as={NavLink}
              to={`/remove/${userId}`}
              className="m-1"
            >
              Remove
            </Button>
          </Form>
        </Col>
      </Row>
    </Layout>
  );
};

export default EditUser;
