import React from "react"
import { Routes, Route } from "react-router-dom"

import { Header } from './components/index'
import { Register, Lessons } from './pages/index'

function App() {
  return (
    <div className="wrapper d-flex flex-column clear">
      <Header />

      <Routes>
        <Route path="lessons" element={<Lessons />} />
        <Route path="register" element={<Register />} />
      </Routes>

    

    </div>
  )
}

export default App
