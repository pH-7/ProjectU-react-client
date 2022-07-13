import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const UsersList = () => {
  const getAllUsersEndpoint = "http://localhost:4000/v1/user/all";

  const [users, setUsers] = useState({}); // important, default need to be empty object

  const fetchUsers = async () => {
    const { data: apiResponse } = await axios.get(`${getAllUsersEndpoint}`);

    setUsers(apiResponse);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Container className="mt-5 mb-5">
      <h3 className="text-center mb-3">Users</h3>
      {Object.values(users).map((user) => (
        <Row className="justify-content-center">
          <Col lg={4}>
            <Card>
              <Card.Body>
                <h4>{user.name}</h4>
                <p>{user.email}</p>
                {user.city && user.country && (
                  <p>
                    {user.city} - {user.country}
                  </p>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default UsersList;
