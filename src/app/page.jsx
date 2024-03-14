import React from "react";
import Login from "./login/page";
import HomePage from "./home/page";
import SignupPage from "./signup/page";

export const metadata = {
  title: "Adcen - Login",
  description: "Discover thousands of Bachelor's Degrees worldwide!",
};

export default function Home() {
  return (
    <>
      <HomePage />
      {/* <SignupPage /> */}
    </>
  );
}
