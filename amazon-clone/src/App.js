import React from 'react'
import './App.css'
import Header from './Header'
import Home from './Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Checkout from './Checkout'

function App() {
  return (
    // BEM
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/checkout' element={[<Header />, <Checkout />]} />
          <Route path='/' element={[<Header />, <Home />]} />
        </Routes>
        {/* Home */}
      </div>
    </Router>
  )
}

export default App