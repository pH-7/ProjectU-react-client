import * as userService from "../../services/user.service";
import Layout from "../layout/Layout";
import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const DELAY_BEFORE_REDIRECTION = 1000;

const RemoveUser = () => {
  const { userId } = useParams();

  const submitForm = async (event) => {
    event.preventDefault();

    try {
      const response = await userService.removeUser(userId);
      if (response?.status) {
        if (response?.message) {
          toast.success(response.message);
        }
      }
    } catch (err) {
      toast.error(`User couldn't be removed.`);
    }
    setTimeout(() => {
      window.location.href = "/";
    }, DELAY_BEFORE_REDIRECTION);
  };

  const cancelForm = async (event) => {
    event.preventDefault();

    window.location.href = "/";
  };

  return (
    <Layout>
      <Row className="justify-content-center">
        <Col lg={3}>
          <Form>
            <Button
              variant="danger"
              type="submit"
              onClick={submitForm}
              className="m-lg-1"
            >
              Do you really wish to delete the user?
            </Button>

            <Button
              variant="secondary"
              type="submit"
              onClick={cancelForm}
              className="m-lg-1"
            >
              I want to keep this user
            </Button>
          </Form>
        </Col>
      </Row>
    </Layout>
  );
};

export default RemoveUser;
