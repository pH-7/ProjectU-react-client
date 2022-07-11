import CreateUser from "./components/CreateUser";
import RetrieveUser from "./components/RetrieveUser";
import UsersList from "./components/UsersList";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { createGlobalStyle } from "styled-components";

const BackgroundColor = createGlobalStyle`
    body {
        background-color: ${(props) => (props?.light ? "#f2f2f2" : "white")};
    }
`;

export default () => {
  return (
    <>
      <BackgroundColor light />
      <ToastContainer />
      <Container fluid className="mt-4 mt-3">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<UsersList />} />
            <Route path="/create" element={<CreateUser />} />
            <Route path="/profile/:id" element={<RetrieveUser />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
};
