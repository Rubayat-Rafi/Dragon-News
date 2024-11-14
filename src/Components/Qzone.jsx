import React from "react";
import Swimming from '../assets/swimming.png';
import calss from '../assets/class.png';
import playGround from '../assets/playground.png';

const Qzone = () => {
  return (
    <div className="bg-[#F3F3F3] p-4">
      <h1 className="text-lg font-semibold text-[#403F3F] leading-8 mb-4">
        Login With
      </h1>
      <div className="space-y-3">
        <img src={Swimming} className="w-full" alt="swimming image" />
        <img src={calss} className="w-full" alt="calss image" />
        <img src={playGround} className="w-full" alt="playGround image" />
      </div>
    </div>
  );
};

export default Qzone;
