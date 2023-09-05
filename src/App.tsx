<<<<<<< HEAD
import { BrowserRouter,Routes,Route } from "react-router-dom";

import Landingpage from "./pages/Landingpage";
import Userlist from "./pages/Userlist";
import Menteelist from "./pages/Menteelist";
import Classlist from "./pages/Classlist";
import "./App.css"

const App =() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/Userlist" element={<Userlist />} />
        <Route path="/Menteelist" element={<Menteelist />} />
        <Route path="/Classlist" element={<Classlist />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
=======
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './pages/login'
import Dashboard from './pages/dashboard'
import DetailMentee from './pages/mentee/mentee_detail'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path='/login'/>
        <Route element={<Dashboard />} path='/dashboard'/>
        <Route element={<DetailMentee />} path='/mentee-detail/:id'/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
>>>>>>> 073fe15a557ed3e904b730c8c1e11da1f72a45b6
