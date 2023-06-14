import React, { useState } from "react";
import postData from "../helperFunction/postData.js";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const initialValue = {
    email: "",
    password: "",
  };
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState(initialValue);

  const submitHandler = async (e) => {
    e.preventDefault();
    postData("http://localhost:8000/login", loginData, true).then(() => {
      setLoginData(initialValue);
      if (Cookies.get("token")) {
        navigate("/home");
      }
    });
  };
  const changeHandler = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10  text-2xl font-medium leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            action=""
            method="POST"
            onSubmit={submitHandler}
          >
            <div>
              <label
                for="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={loginData.email}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={changeHandler}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  for="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  value={loginData.password}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                  onChange={changeHandler}
                />
              </div>
            </div>
            <div className="text-sm flex justify-between mt-0">
              <div className="flex gap-2">
                <input type="checkbox" name="" id="" />
                <p>Remember me</p>
              </div>

              <Link
                to="/reset-password"
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                {" "}
                Forgot password?{" "}
              </Link>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
