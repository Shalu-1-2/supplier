import React from 'react'
import{BrowserRouter as Router,Routes,Route}from 'react-router-dom'
import Splash from './Pages/Splash'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'
import Welcome from './Pages/Welcome'
import AddProduct from './Pages/AddProduct'
const App = () => {
  return (
    <>
       <Router>
        <Routes>
          <Route path='/' element={<Splash/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/welcome" element={<Welcome/>} />
          <Route path="/products" element={<AddProduct/>} />
        </Routes>
       </Router>

    </>
  )
}

export default App