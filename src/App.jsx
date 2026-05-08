import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Onboarding from './screens/Onboarding'
import Login from './screens/Login'
import Home from './screens/Home'
import SelectService from './screens/SelectService'
import AddressSchedule from './screens/AddressSchedule'
import Confirmation from './screens/Confirmation'
import Payment from './screens/Payment'
import Tracking from './screens/Tracking'
import OrderHistory from './screens/OrderHistory'
import Profile from './screens/Profile'
import Navigation from './components/Navigation'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentOrder, setCurrentOrder] = useState(null)

  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
  }

  return (
    <BrowserRouter>
      <div className="h-screen w-full max-w-md mx-auto bg-white relative overflow-hidden flex flex-col">
        <Routes>
          <Route path="/" element={isLoggedIn ? <Navigate to="/home" /> : <Onboarding />} />
          <Route path="/login" element={isLoggedIn ? <Navigate to="/home" /> : <Login onLogin={handleLogin} />} />

          {isLoggedIn ? (
            <>
              <Route path="/home" element={<Home />} />
              <Route path="/service" element={<SelectService />} />
              <Route path="/address" element={<AddressSchedule />} />
              <Route path="/confirmation" element={<Confirmation setCurrentOrder={setCurrentOrder} />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/tracking" element={<Tracking order={currentOrder} />} />
              <Route path="/history" element={<OrderHistory />} />
              <Route path="/profile" element={<Profile onLogout={handleLogout} />} />
            </>
          ) : (
            <Route path="*" element={<Navigate to="/" />} />
          )}
        </Routes>

        {isLoggedIn && <Navigation />}
      </div>
    </BrowserRouter>
  )
}

export default App
