import React, { useContext } from "react";
import loginIcon from "../assets/user.png";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, userLogOut } = useContext(AuthContext);

  return (
    <div className="flex items-center justify-between py-6">
      <div><h1 className="text-[#403F3F] text-lg font-semibold">{user && user.email}</h1></div>
      <div className="space-x-5 text-lg text-[#706F6F] leading-8 font-normal">
        <NavLink className="hover:underline" to="/">
          Home
        </NavLink>
        <NavLink className="hover:underline" to="/about">
          About
        </NavLink>
        <NavLink className="hover:underline" to="/career">
          Career
        </NavLink>
      </div>
      <div className="flex items-center gap-3">
        <img src={loginIcon} alt="user icon" />

        {user && user?.email ? (
          <button onClick={userLogOut}
            className="bg-[#403F3F] py-2 px-8 text-lg font-semibold text-white"
          >
            LogOut
          </button>
        ) : (
          <Link
            to="/auth/login"
            className="bg-[#403F3F] py-2 px-8 text-lg font-semibold text-white"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
