import React from 'react'
import{BrowserRouter as Router,Routes,Route}from 'react-router-dom'
import Splash from './Pages/Splash'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'
import Welcome from './Pages/Welcome'
import Orders from './Pages/Orders'
import Products from './Pages/Products'
import Profile from './Pages/Profile'
import Users from './Pages/Users'
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
          <Route path='/orders' element={<Orders/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/users' element={<Users/>}/>
         
        </Routes>
       </Router>


{/* cards-page */}
  {/* <Dashboard
  title="Total Users"
  value="120"
/>

<Dashboard
  title="Total Products"
  value="50"
/>

<Dashboard
  title="Total Orders"
  value="80"
/>

<Dashboard
  title="Total Revenue"
  value="₹25,000"
/> */}


    </>
  )
}

export default App