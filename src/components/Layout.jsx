import TopNavigation from "./TopNavigation";
import { Container } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import { createGlobalStyle } from "styled-components";

const BackgroundColor = createGlobalStyle`
    body {
        background-color: ${(props) => (props?.light ? "#f2f2f2" : "white")};
    }
`;

const Layout = ({ children }) => {
  return (
    <>
      <Container fluid className="mb-5">
        <BackgroundColor light />
        <ToastContainer />
        <TopNavigation />
        <Container className="mt-5">{children}</Container>
      </Container>
    </>
  );
};

export default Layout;
