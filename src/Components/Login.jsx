import React from "react";
import googleIcon from "../assets/google-icon.png";
import githubIcon from "../assets/GitHub-Symbol.png";

const Login = () => {
  return (
    <div>
      <h1 className="text-lg font-semibold text-[#403F3F] leading-8 mb-6">
        Login With
      </h1>

      <div className="flex flex-col items-center  gap-5">
        <button className="w-full border py-3 rounded-md flex items-center gap-2 justify-center hover:bg-base-200 transition-colors">
          <img src={googleIcon} className="w-7" alt="google icon" />
          <span className="font-medium text-base">Login with Google</span>
        </button>

        <button className="w-full border py-3 rounded-md flex items-center  justify-center hover:bg-base-200 transition-colors">
          <img src={githubIcon} className="w-10" alt="Github icon" />
          <span className="font-medium text-base">Login with Github</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
