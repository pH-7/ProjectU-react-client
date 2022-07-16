import * as userService from "../../services/user.service";
import Layout from "../layout/Layout";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const UsersList = () => {
  const [users, setUsers] = useState({}); // important, default need to be empty object

  const fetchUsers = async () => {
    const users = await userService.retrieveAllUsers();

    setUsers(users);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Layout>
      <h3 className="text-center mb-3">Users</h3>
      {Object.values(users).map((user) => (
        <Row key={user.id} className="justify-content-center">
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
                <Button variant="primary" as={NavLink} to={`/edit/${user.id}`}>
                  Edit User
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ))}
    </Layout>
  );
};

export default UsersList;
