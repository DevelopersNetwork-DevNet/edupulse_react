/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import Button from "./UI/btn";

const Login = () => {
  return (
    <div className="flex h-screen items-center">
      <div className="grid-col-1 px-20">
        <h3 className="text-2xl text-blue-700 font-extrabold my-2">
          Edu<span className="text-black">Pulse is here for you</span>
        </h3>
        <p>Welcome back Scholar!</p>

        <label className="relative">
          <p className="text-sm my-2">Email Address</p>
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full h-9 pl-3 rounded bg-slate-300 outline-none"
          />
        </label>

        <label className="relative">
          <p className="text-sm my-2">Password</p>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full h-9 pl-3 rounded-2xl bg-white border-slate-300"
          />
        </label>
        
        <div className="my-2">
          <div className="flex items-center space-x-72">
            {/* Wrapper div for alignment */}
            <p className="text-sm font-medium">
              <input type="checkbox" name="remember" id="" /> Remember me
            </p>

            <Link to="/forget-password" className="text-blue-500">
              Forget password?
            </Link>
          </div>

          <Button>Log In</Button>
          <div className="flex items-center justify-center my-2">
            <p>Don't have an account?</p>
            <Link to="/sign-up" className="text-blue-500 space-x-3">
              Sign Up
            </Link>
          </div>
        </div>
      </div>

      <div className="grid-col-2">
        <img
          src="src/assets/images/Computer login-rafiki.png"
          alt=""
          className="object-cover h-screen w-full"
        />
      </div>
    </div>
  );
};

export default Login;
