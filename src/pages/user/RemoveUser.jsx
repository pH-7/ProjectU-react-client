import Layout from "../../components/layout/Layout";
import * as userService from "../../services/user.service";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const RemoveUser = () => {
  const DELAY_BEFORE_REDIRECTION_MS = 1000; // 1 second

  const { userId } = useParams();

  const submitAction = async () => {
    try {
      const response = await userService.removeUser(userId);

      if (response?.status) {
        toast.success("User has been removed.");
      } else {
        toast.warn(`User couldn't be removed.`);
      }

      setTimeout(() => {
        window.location.href = "/";
      }, DELAY_BEFORE_REDIRECTION_MS);
    } catch (error) {
      toast.error(`User cannot be removed.`);
      console.error(error.message);
    }
  };

  const cancelAction = () => {
    window.location.href = "/";
  };

  return (
    <Layout>
      <h4 className="text-center">Are you sure to remove #{userId} user?</h4>
      <Row className="justify-content-center">
        <Col md={4}>
          <Form className="mt-4">
            <Button variant="danger" onClick={submitAction} className="m-1">
              Yes, remove this user
            </Button>

            <Button variant="secondary" onClick={cancelAction} className="m-1">
              No, revert my action
            </Button>
          </Form>
        </Col>
      </Row>
    </Layout>
  );
};

export default RemoveUser;
