import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const RetrieveUser = () => {
  const getAllUserUrl = "http://localhost:4000/v1/user";

  const [user, setUser] = useState({});
  const { id } = useParams();

  const fetchUsers = async () => {
    const {
      data: { user },
    } = await axios.get(`${getAllUserUrl}/${id}`);

    if (user) {
      setUser(user);
    } else {
      toast.warn("User not found");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [id]);

  return (
    <Container className="mt-5 mb-5">
      <h3 className="text-center mb-3"></h3>
      <Row className="justify-content-center">
        <Col lg={4}>
          <h4>{user.name}</h4>
          <p>{user.email}</p>
          {user.city && user.country && (
            <p>
              {user.city} - {user.country}
            </p>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default RetrieveUser;
