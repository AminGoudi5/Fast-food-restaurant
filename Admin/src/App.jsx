import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import SideBar from './Components/SideBar/SideBar';
import { Route, Routes } from 'react-router-dom';
import Add from './Pages/Add/Add';
import List from './Pages/List/List';
import Orders from './Pages/Orders/Orders';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Pages/Login/Login';
import { assets } from './assets/assets';


const App = () => {
  const [login, setLogin] = useState(false);
  const url = "http://localhost:4000";

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLogin(true);
    }
  }, []);

  return (
    <div>
      <ToastContainer />
      {login ? (
        <>
          <Navbar setLogin={setLogin} />
          <hr />
          <div className="app-content">
            <SideBar />
            <Routes>
              <Route path="/add" element={<Add url={url} />} />
              <Route path="/list" element={<List url={url} />} />
              <Route path="/orders" element={<Orders url={url} />} />
              
            </Routes>
          </div>
        </>
      ) : (
        <>
          <img className='logo' src={assets.logo} alt="" />
          <hr />
          <Routes>
            <Route path='/' element={<Login setLogin={setLogin} url={url} />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
