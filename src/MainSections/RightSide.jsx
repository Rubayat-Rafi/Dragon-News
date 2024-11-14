import React from 'react';
import Login from '../Components/Login';
import FindUs from '../Components/FindUs';

const RightSide = () => {
    return (
        <div className='space-y-8'>
            <Login></Login>
            <FindUs></FindUs>
        </div>
    );
};

export default RightSide;