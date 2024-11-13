import React from 'react';
import logo from '../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='flex items-center justify-center py-6 flex-col'>
            <div>
                <img className='w-[470px]' src={logo} alt="logo icon" />
            </div>
            <h3 className='text-center text-lg font-normal text-[#706F6F] mt-5 leading-8'>Journalism Without Fear or Favour</h3>
            <p className='font-medium mt-2 leading-8 text-lg text-[#706F6F]'>{moment().format("dddd MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;