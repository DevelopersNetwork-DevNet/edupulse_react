/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import Button from "./UI/btn";

const SignUp_Lecturer = () => {
  return (
    <div className="flex h-screen items-center">
      <div className="grid-col-1 px-20">
        <h3 className="text-2xl text-black font-extrabold my-2 mx-2">
          Get started with   
          <span className=" text-blue-700">Edu</span>
          <span className="text-black">Pulse </span>
        </h3>
        <p>We can make your lecturing experience better</p>

        <label className="relative">
          <p className="text-sm my-2 font-semibold text-black">Full Name</p>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full h-9 pl-3 rounded bg-slate-300 outline-none"
          />
        </label>


        <label className="relative">
          <p className="text-sm my-2 font-semibold text-black">Email Address</p>
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full h-9 pl-3 rounded bg-slate-300 outline-none"
          />
        </label>

       


        <label className="relative">
          <p className="text-sm my-2 font-semibold text-black">Password</p>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full h-9 pl-3 rounded bg-slate-300 outline-none"
          />
        </label>

        <div className="my-2">
          <div className="flex items-center space-x-72">
            {/* Wrapper div for alignment */}
            <p className="text-base font-medium ">
              <input type="checkbox" name="remember" id="" /> I agree to the 
              <span className="text-blue-500">Term </span> &  
              <span className="text-blue-500"> Policy</span>
            </p>

            <Link to="/forget-password" className="text-blue-500">
              
            </Link>
          </div>

          <Button>Sign Up</Button>
          <div className="flex items-center justify-center my-2">
            <p>Have an account?</p>
            <Link to="/login_lecturer" className="text-blue-500 space-x-3">
              Log In
            </Link>
          </div>
        </div>
      </div>
      <div className="grid-col-2">
        <img
          src="src/assets/images/Online learning-amico.png"
          alt=""
          className="object-cover h-screen w-full"
        />
      </div>
    </div>
  );
};

export default SignUp_Lecturer;
