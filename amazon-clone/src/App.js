import React, { useEffect } from 'react'
import './App.css'
import Header from './Header'
import Home from './Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Checkout from './Checkout'
import Login from './Login'
import { auth } from './firebase'
import { useStateValue } from './StateProvider'
import Payment from './Payment'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(
  'pk_test_51Ma6UlKfBctCzgpTnzMsNiEiDocv0b6723NnZwKk6jo0xs2sGOcWuEPJzbRSkel5udtmWg3kMkK0mzkotnVW8Uny003ds5m5aX'
)

function App() {
  const [{}, dispatch] = useStateValue()

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log('THE USER IS >>> ', authUser)

      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser,
        })
        //the user just logged in / the user was logged in
      } else {
        dispatch({
          type: 'SET_USER',
          user: null,
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
          <Route path='/' element={[<Header />, <Home />]} />
          <Route path='/login' element={[<Login />]} />
          <Route path='/checkout' element={[<Header />, <Checkout />]} />
          <Route
            path='/payment'
            element={[
              <Header />,
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>,
            ]}
          />
        </Routes>
        {/* Home */}
      </div>
    </Router>
  )
}

export default App
