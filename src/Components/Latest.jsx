import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Latest = () => {
  return (
    <div className="bg-[#F3F3F3] flex items-center p-2 mt-8 gap-5 pr-8">
      <a className="py-[10px] px-6 text-lg font-medium text-white bg-[#D72050] leading-8">
        Latest
      </a>
      <Marquee pauseOnHover={true}>
        <div className="text-[#403F3F] text-lg font-medium py-2 space-x-8">
          <Link className="ml-8">
          Match Highlights: Germany vs Spain — as it happened   !   
          </Link>
          <Link>
          Match Highlights: Germany vs Spain — as it happened   !   
          </Link>
          <Link>
          Match Highlights: Germany vs Spain — as it happened   !   
          </Link>
        </div>
      </Marquee>
    </div>
  );
};

export default Latest;
