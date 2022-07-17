import AboutUs from "./pages/static/AboutUs";
import Contact from "./pages/static/Contact";
import CreateUser from "./pages/user/CreateUser";
import EditUser from "./pages/user/EditUser";
import RemoveUser from "./pages/user/RemoveUser";
import RetrieveUser from "./pages/user/RetrieveUser";
import UsersList from "./pages/user/UsersList";
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
          <Route path="/edit/:userId" element={<EditUser />} />
          <Route path="/remove/:userId" element={<RemoveUser />} />
          <Route path="/:userId" element={<RetrieveUser />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
