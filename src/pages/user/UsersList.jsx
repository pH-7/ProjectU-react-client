import Layout from '../../components/layout/Layout';
import UserCard from '../../components/user/UserCard';
import * as userService from '../../services/user.service';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { List } from 'react-content-loader';

const UsersList = () => {
  const [users, setUsers] = useState({}); // Important, default need to be empty object
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchUsers = async () => {
    try {
      setIsLoading(true);

      const users = await userService.retrieveAllUsers();
      setUsers(users);
    } catch (error) {
      const retrieveErrorMessage = () => {
        const apiErrorMessage = error?.response?.data?.message;

        // Null Coalescing Operator
        return apiErrorMessage ?? 'Error while connecting to the server';
      };
      setErrorMessage(retrieveErrorMessage());
    } finally {
      setIsLoading(false); // At this stage, we can stop the loader
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Layout>
      {isLoading ? (
        <div className='text-center'>
          <List />
        </div>
      ) : errorMessage ? (
        <h3 className='text-center text-danger fw-bold'>{errorMessage}</h3>
      ) : (
        <>
          <h4 className='text-center mb-3'>Users</h4>
          <Row className='justify-content-center'>
            {Object.values(users).map((user) => (
              <Col key={user.id} lg={4} className='p-1'>
                <UserCard user={user} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </Layout>
  );
};

export default UsersList;
