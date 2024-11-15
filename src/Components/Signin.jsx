import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Signin = () => {
  const { handleUserLogIn, setUser} = useContext(AuthContext);
  const navigate = useNavigate()
  const location = useLocation()

  const handleLogin = (e) => {
    e.preventDefault();

    // signIn user 
    const form = new FormData(e.target);
    const email = form.get('email');
    const password = form.get('password');

    console.log({email,password})
    handleUserLogIn(email, password)
    .then(result => {
        console.log(result.user)
        setUser(result.user)
        e.target.reset();
        navigate(location?.state ? location.state : "/");
    })
    .catch(error => {
        // console.log(error.message)
        alert(error.message)
    })

  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white w-[752px] rounded-md  p-14">
        <h3 className="text-[#403F3F] font-semibold text-3xl text-center">
          Login your account
        </h3>
        <div className="border-t my-12 border-[#E7E7E7]"></div>

        <form onSubmit={handleLogin}>
          <div className="flex flex-col gap-4">
            <label className="text-lg font-semibold text-[#403F3F]">
              Email address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="border border-[#F3F3F3] bg-[#F3F3F3] p-5 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-4 mt-6">
            <label className="text-lg font-semibold text-[#403F3F]">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="border border-[#F3F3F3] bg-[#F3F3F3] p-5 rounded-md"
            />
          </div>
          <div className="mt-8">
            <button className="w-full border border-[#403F3F] bg-[#403F3F] py-5 text-white font-semibold text-lg rounded-md">
              Login
            </button>
          </div>
        </form>

        <p className="mt-8 text-base font-semibold leading-6 text-center text-[#706F6F]">
          Dont’t Have An Account ?{" "}
          <Link
            to="/auth/register"
            className="bg-clip-text bg-gradient-to-r from-[#FF8C47] to-[#F75B5F] text-transparent"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
