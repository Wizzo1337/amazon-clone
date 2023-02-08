import React, { useEffect } from 'react'
import './App.css'
import Header from './Header'
import Home from './Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Checkout from './Checkout'
import Login from './Login'
import { auth } from './firebase'
import { useStateValue } from './StateProvider'

function App() {
  const [{}, dispatch] = useStateValue()

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log('THE USER IS >>> ', authUser)

      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
        //the user just logged in / the user was logged in
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
        //the user is logged out
      }
    })
  }, [])
  return (
    // BEM
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/login' element={[<Login />]} />
          <Route path='/checkout' element={[<Header />, <Checkout />]} />
          <Route path='/' element={[<Header />, <Home />]} />
        </Routes>
        {/* Home */}
      </div>
    </Router>
  )
}

export default App
