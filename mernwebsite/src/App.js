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

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/services' element={<Services/>}/>
        <ProtectedRoute path='/login' element={<Login/>} auth={false}/>
        <ProtectedRoute path='/register' element={<Register/>} auth={true}/>
        <ProtectedRoute path='/dashboard' element={<Dashboard/>} auth={true}/>
        <ProtectedRoute path='/logout' element={<Logout/>} auth={true}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
