import React from 'react'
import{BrowserRouter as Router,Routes,Route}from 'react-router-dom'
import Splash from './Pages/Splash'
const App = () => {
  return (
    <>
       <Router>
        <Routes>
          <Route path='/' element={<Splash/>}/>
        </Routes>
       </Router>

    </>
  )
}

export default App