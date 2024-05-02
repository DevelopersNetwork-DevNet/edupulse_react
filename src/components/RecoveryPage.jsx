import React from "react";
import { Link } from "react-router-dom";
import Button from "./UI/btn";

const ForgotPassword = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="grid-cols-1 px-20">
        <h2 className="font-semibold text-black text-2xl">Forget your password?</h2>
        <p className="text-sm my-2">Enter your email to get a recovery link</p>
        <label className="relative">
          <input
            type="email"
            placeholder="email address"
            className="w-full h-9 pl-3 rounded bg-slate-300 outline-none my-6"
          />
        </label>
        <Button> Send recovery link</Button>
        <div className="flex items-center justify-center my-2">
          <p>Have an account?</p>
          <Link to="/" className="text-blue-500 ml-2">
            Log In
          </Link>
        </div>
      </div>

      <div className="grid-cols-2">
        <img
          src="src/assets/images/Forgot password-bro.png"
          alt=""
          className="object-cover h-screen w-full"
        />
      </div>
    </div>
  );
};

export default ForgotPassword;
