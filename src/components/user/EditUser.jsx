import { upperCaseFirst } from "../../helpers/string.helper";
import * as userService from "../../services/user.service";
import Layout from "../layout/Layout";
import { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const EditUser = () => {
  const { userId } = useParams();

  const [id, setId] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const populateUserFields = async () => {
    const user = await userService.retrieveUser(userId);
    setId(user.id);
    setName(user.name);
    setEmail(user.email);
    setCity(user.city);
    setCountry(user.country);
  };

  useEffect(() => {
    populateUserFields();
  }, [userId]);

  const submitForm = async (event) => {
    event.preventDefault();

    try {
      const payload = {
        name,
        email,
        city,
        country,
      };
      const response = await userService.editUser(userId, payload);
      if (response?.status && response?.user) {
        const userName = response.user.name;
        toast.success(`${userName} User successfully updated.`);
      } else {
        toast.warn(`User couldn't be saved.`);
      }
    } catch (error) {
      const {
        data: {
          errors: { body },
        },
      } = error.response;
      const errorMessage = upperCaseFirst(body[0]?.message);

      toast.error(errorMessage);
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
                type="text"
                placeholder="Email"
                value={email}
                onChange={(fieldElement) => setEmail(fieldElement.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="City"
                value={city}
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

            <Button
              variant="primary"
              type="submit"
              onClick={submitForm}
              className="m-lg-1"
            >
              Update
            </Button>

            <Button
              variant="danger"
              as={NavLink}
              to={`/remove/${id}`}
              className="m-lg-1"
            >
              Delete
            </Button>
          </Form>
        </Col>
      </Row>
    </Layout>
  );
};

export default EditUser;
