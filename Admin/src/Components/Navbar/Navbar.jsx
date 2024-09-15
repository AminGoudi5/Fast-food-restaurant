import React from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ setLogin }) => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        setLogin(false); 
        navigate("/");
    }

    return (
        <div className='navbar'>
            <img className='logo' src={assets.logo} alt="" />
            <div className='profile'>
                <img className='profile-img' src={assets.profile_image} alt="" />
                <div className="profile-login">
                    <img onClick={logout} className="logout" src={assets.logout_icon} alt="" />  
                </div>
            </div>
        </div>
    );
}

export default Navbar;
