import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landingpage from "./pages/landingpage";
import Userlist from "./pages/user/user_list";
import Menteelist from "./pages/mentee/mentee_list";
import Classlist from "./pages/class/class_list";
import Login from "./pages/login";
import axios from "axios";
import "./App.css";

const App = () => {
  axios.defaults.baseURL = "https://belanjalagiyuk.shop/";
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<Userlist />} />
        <Route path="/mentee" element={<Menteelist />} />
        <Route path="/class" element={<Classlist />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
