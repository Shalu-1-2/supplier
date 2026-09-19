import React from 'react'
import{BrowserRouter as Router,Routes,Route}from 'react-router-dom'
import Splash from './Pages/Splash'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Welcome from './Pages/Welcome'
import Orders from './Pages/Orders'
import Products from './Pages/Products'
import Profile from './Pages/Profile'
import Users from './Pages/Users'
import AddProduct from './Pages/AddProduct'
import BottomBar from './Components/BottomBar'
import Home from './Pages/Home'
const App = () => {



  return (
   
   <>
       <Router>
        <Routes>
          <Route path='/' element={<Splash/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/bottom' element={<BottomBar/>}/>
          <Route path="/home" element={<Home/>} />
          <Route path="/welcome" element={<Welcome/>} />
          <Route path='/orders' element={<Orders/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/users' element={<Users/>}/>
         
          <Route path="/products" element={<AddProduct/>} />
        </Routes>
       </Router>


    </>
  )
}

export default App