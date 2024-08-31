import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Pages/Footer/Footer'
function App() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default App