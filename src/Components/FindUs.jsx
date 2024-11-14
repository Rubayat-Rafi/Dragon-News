import React from "react";
import Facebook from "../assets/fb.png";
import Instagram from "../assets/instagram.png";
import Twitter from "../assets/twitter.png";

const FindUs = () => {
  return (
    <div>
      <h1 className="text-lg font-semibold text-[#403F3F] leading-8">
        Find Us
      </h1>
      <div className="join join-vertical flex   *:bg-base-100">
        <button className="btn join-item text-left font-medium justify-normal">
          <div className="h-7 w-7 bg-slate-200 rounded-full flex items-center justify-center">
            <img src={Facebook} className="rounded-full" alt="facebook icon" />
          </div>
          <span>Facebook</span>
        </button>
        <button className="btn join-item text-left font-medium justify-normal">
          <div className="h-7 w-7 bg-slate-200 rounded-full flex items-center justify-center">
            <img
              src={Instagram}
              className="rounded-full"
              alt="Instagram icon"
            />
          </div>
          <span>Instagram</span>
        </button>
        <button className="btn join-item text-left font-medium justify-normal">
          <div className="h-7 w-7 bg-slate-200 rounded-full flex items-center justify-center">
            <img src={Twitter} className="rounded-full" alt="Twitter icon" />
          </div>
          <span>Twitter</span>
        </button>
      </div>
    </div>
  );
};

export default FindUs;
