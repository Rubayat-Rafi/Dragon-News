import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const navigate = useNavigate();

    const {handleCreateUser, setUser, updateUserProfile} = useContext(AuthContext);
    // const [error, setError] = useState({});

  const handleRegister = (e) => {
    e.preventDefault();

    // const name = e.target.name.value;

    //form data
    const form = new FormData(e.target);
    const name = form.get('name');
    const photo = form.get('photo');
    const email = form.get('email');
    const password = form.get('password');

    // console.log({name, photo, email, password})
    handleCreateUser(email, password)
    .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        setUser(user);
        
        e.target.reset();
        updateUserProfile({displayName: name, photoURL: photo})
        .then(()=> {
          navigate('/auth/login');
        })
        .catch((err) => {
          console.log(err)
        })
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage)
        // setError()
        // ..
      });


  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white w-[752px] rounded-md  p-14">
        <h3 className="text-[#403F3F] font-semibold text-3xl text-center">
          Register your account
        </h3>
        <div className="border-t my-12 border-[#E7E7E7]"></div>

        <form onSubmit={handleRegister}>
          <div className="flex flex-col gap-4">
            <label className="text-lg font-semibold text-[#403F3F]">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="border border-[#F3F3F3] bg-[#F3F3F3] p-5 rounded-md"
            />
          </div>

          <div className="flex flex-col gap-4 mt-6">
            <label className="text-lg font-semibold text-[#403F3F]">
              Photo URL
            </label>
            <input
              type="url"
              name="photo"
              placeholder="Enter your photo url address"
              className="border border-[#F3F3F3] bg-[#F3F3F3] p-5 rounded-md"
            />
          </div>

          <div className="flex flex-col gap-4 mt-6">
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

          <div className="form-control mt-6">
            <label className="label cursor-pointer justify-start gap-3">
              <input type="checkbox" defaultChecked className="checkbox" />
              <span className="label-text text-base font-semibold text-[#403F3F]">
                Accept Term & Conditions
              </span>
            </label>
          </div>

          <div className="mt-8">
            <button className="w-full border border-[#403F3F] bg-[#403F3F] py-5 text-white font-semibold text-lg rounded-md">
              Register
            </button>
          </div>
        </form>

        <p className="mt-8 text-base font-semibold leading-6 text-center text-[#706F6F]">
          Already Have An Account ?
          <Link
            to="/auth/login"
            className="bg-clip-text bg-gradient-to-r from-[#FF8C47] to-[#F75B5F] text-transparent ml-1"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
