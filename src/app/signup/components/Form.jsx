"use client";
import { useState } from "react";
import React from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import Image from "next/image";

export default function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let logins = [];

  const addLogin = (email, password) => {
    const newLogin = {
      email: email,
      password: password,
    };
    logins.push(newLogin);
  };

  const submit = (a) => {
    a.preventDefault();
    addLogin(email, password);
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <form
        onSubmit={submit}
        className=" bg-white/50 w-4/5 rounded-md p-6 shadow-lg shadow-gray-500/50"
      >
        <div className=" pb-6 flex items-center justify-center">
          <Image
            src="/images/logo.png"
            alt="login"
            width={200}
            height={200}
          />
        </div>
        {/* <!-- Fields Container --> */}
        <div className="space-y-4">
          {/* <!-- Email --> */}
          <div>
            <label className="flex flex-col gap-2" htmlFor="email">
              <p className="text-sm text-gray-600">
                Email<span className="pl-1 text-red-600">*</span>
              </p>
              <input
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                id="email"
                type="email"
                className="rounded-md px-2 py-1 text-sm text-green-800 placeholder:text-xs placeholder:text-gray-400 focus:border-none focus:outline-none"
              />
            </label>
          </div>

          {/* <!-- Password --> */}
          <div>
            <label className="flex flex-col gap-2" htmlFor="password">
              <p className="text-sm text-gray-600">
                Password
                <span className="pl-1 text-red-600">*</span>
              </p>
              <input
                required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                id="password"
                type="password"
                className="rounded-md px-2 py-1 text-sm text-green-800 placeholder:text-xs placeholder:text-gray-400 focus:border-none focus:outline-none"
              />
            </label>
          </div>

          {/* <!-- Submit Button   --> */}
          <button
            type="submit"
            className="rounded-md font-bold bg-green-500 px-4 w-full py-2 text-sm text-white hover:bg-green-600"
          >
            Continue
          </button>

          <p className="text-gray-400 text-sm text-center">OR</p>

          {/* <!-- other logins container --> */}
          <div className="flex justify-center gap-2 items-center ">
            {/* <!-- Google --> */}
            <button
              type="button"
              className="w-full rounded-md shadow-sm hover:shadow-md transition-all shadow-gray-400/50  py-2 flex gap-2 items-center justify-center"
            >
              <FaGoogle />
            </button>

            {/* <!-- Github --> */}
            <button
              type="button"
              className="w-full rounded-md shadow-sm hover:shadow-md transition-all shadow-gray-400/50  py-2 flex gap-2 items-center justify-center"
            >
              <FaGithub />
            </button>
          </div>
          <hr />

          {/* <!-- SignUp --> */}
          <button className="w-full" type="button">
            <a
              href="signup.html"
              className="px-4 text-sm text-center w-full text-gray-600 decoration-green-600 transition-all underline duration-300 hover:text-black hover:decoration-2"
            >
              SignUp for an account
            </a>
          </button>
        </div>
      </form>
    </>
  );
}
