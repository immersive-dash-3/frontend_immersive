import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './pages/login'
import Dashboard from './pages/dashboard'
import DetailMentee from './pages/mentee/mentee_detail'
import AddMentee from './pages/mentee/add_mentee'
import UpdateMentee from './pages/mentee/edit_mentee'
import axios from 'axios'

const App = () => {
  axios.defaults.baseURL = 'https://belanjalagiyuk.shop/'

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path='/login'/>
        <Route element={<Dashboard />} path='/dashboard'/>
        <Route element={<DetailMentee />} path='/mentee-detail/:id'/>
        <Route element={<AddMentee />} path='/add-mentee'/>
        <Route element={<UpdateMentee />} path='/edit-mentee/:id'/>
      </Routes>
    </BrowserRouter>
  )
}

export default App