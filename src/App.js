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

const App = () => {
  return (
    <>
      <BackgroundColor light />
      <Container fluid className="mt-4 mt-3">
        <ToastContainer />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<UsersList />} />
            <Route path="/create" element={<CreateUser />} />
            <Route path="/:userId" element={<RetrieveUser />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
};

export default App;
