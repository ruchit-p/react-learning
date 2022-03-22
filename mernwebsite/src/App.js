import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import {Route, Routes} from 'react-router-dom';
import Services from './components/Services';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Logout from './components/Logout';
import ProtectedRoute from './ProtectedRoute';
import { useEffect, useState } from 'react';

function App() {

  // Check if the user is logged in
  const [auth, setauth] = useState(false);
  const [auth1, setauth1] = useState(true);



  const isLoggedIn = async () => {
    try{
      const res = await fetch('/auth', {
        method: "GET",
        headers: {
          Accept: "application/json",
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      });

      if(res.status === 200){
        setauth(true)
        setauth1(false)
      }
      if(res.status === 401){
        setauth(false)
        setauth1(true)
      }
    } catch (error) {
      console.log(error)
    }
  }

  
  useEffect(() => {
    isLoggedIn();
  }, []);


  return (
    <>
      <Navbar auth={auth1} />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/login' element={<ProtectedRoute auth={auth1}>
                    <Login />
                  </ProtectedRoute>}/>
        <Route path='/register' element={<ProtectedRoute auth={auth1}>
                    <Register />
                  </ProtectedRoute>}/>
        <Route path='/dashboard' element={<ProtectedRoute auth={auth}>
                    <Dashboard />
                  </ProtectedRoute>}/>
        <Route path='/logout' element={<ProtectedRoute auth={auth}>
                    <Logout />
                  </ProtectedRoute>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
