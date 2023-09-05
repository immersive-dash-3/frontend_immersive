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