import React from 'react';
import Login from '../Components/Login';
import FindUs from '../Components/FindUs';
import Qzone from '../Components/Qzone';
import AdSection from '../Components/AdSection';

const RightSide = () => {
    return (
        <div className='space-y-8'>
            <Login></Login>
            <FindUs></FindUs>
            <Qzone></Qzone>
            <AdSection></AdSection>
        </div>
    );
};

export default RightSide;