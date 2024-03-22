"use Client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/logo.png";
import Login from "@/app/components/login/Login";
import WishList from "@/app/components/wishlist/WishList";
import { SessionProvider } from "next-auth/react";

export default function Header() {
  return (
    <header className="backdrop-blur fixed w-full bg-gray-500/50 z-20">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          href="/"
        >
          <Image src={logo} alt="logo" className="w-36" />
        </Link>
        <nav className="md:ml-auto flex gap-6 text-gray-200 flex-wrap items-center text-base justify-center">
          <Link
            href="/cost-estimation"
            className=" hover:text-green-400 transition-all"
          >
            Cost Estimation
          </Link>
          <Link
            href="/trends"
            className=" hover:text-green-400 transition-all"
          >
            Trends
          </Link>
          <Link
            href="/explore"
            className=" hover:text-green-400 transition-all"
          >
            Universities
          </Link>
          <WishList />
          {/* <Login /> */}
        </nav>
      </div>
    </header>
  );
}
