import React from "react"
import { Routes, Route } from "react-router-dom"

import { Header } from './components/index'
import { Register, Lessons, Home } from './pages/index'
import { Auth } from "./pages/Auth"

function App() {
  return (
    <div className="wrapper d-flex flex-column clear">
      <Header />

      <Routes>
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/register" element={<Register />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<Home />} />
      </Routes>
      
    </div>
  )
}

export default App
