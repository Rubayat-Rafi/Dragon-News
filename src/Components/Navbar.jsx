import React from 'react';
import loginIcon from '../assets/user.png'
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex items-center justify-between py-6'>
            <div></div>
            <div className='space-x-5 text-lg text-[#706F6F] leading-8 font-normal'>
                <NavLink className='hover:underline' to='/'>Home</NavLink>
                <NavLink className='hover:underline' to='/about'>About</NavLink>
                <NavLink className='hover:underline' to='/career'>Career</NavLink>

            </div>
            <div className='flex items-center gap-3'>
                <img src={loginIcon} alt="user icon" />
                <Link to="/auth/login" className='bg-[#403F3F] py-2 px-8 text-lg font-semibold text-white'>Login</Link>
            </div>
        </div>
    );
};

export default Navbar;