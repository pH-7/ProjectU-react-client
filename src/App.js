import CreateUser from "./components/user/CreateUser";
import RetrieveUser from "./components/user/RetrieveUser";
import UsersList from "./components/user/UsersList";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.min.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UsersList />} />
          <Route path="/create" element={<CreateUser />} />
          <Route path="/:userId" element={<RetrieveUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
