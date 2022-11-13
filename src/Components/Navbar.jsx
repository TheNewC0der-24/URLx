import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate();

    return (
        <div className='about-button'>
            <div onClick={() => navigate("/about-us")} className="waves-effect waves-light btn">About Us</div>
        </div>
    )
}

export default Navbar;