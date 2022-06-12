import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import './stylesheets/Home.css'
import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Cart from './components/Cart'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/Signup' element={<SignUp />}/>
        <Route path='/Home' element={<Home />}/>
        <Route path='/Cart' element={<Cart />}/>
      </Routes>
    </div>
  )
}

export default App
