import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/images/logo.png";
import {
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import { RiTwitterLine, RiTwitterXLine } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto gap-4 flex items-center justify-between sm:flex-row flex-col">
        <div className="flex gap-4 items-center">
          <Link href="/">
            <Image src={logo} width={100} height={100} alt="logo" />
          </Link>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-400 sm:py-2 sm:mt-0 mt-4">
            © 2023-24 Adcen
          </p>
        </div>

        {/* Social Media */}
        <div className="flex gap-4 items-center">
          <Link
            target="_blank"
            href="https://www.linkedin.com/company/adcen"
          >
            <FaLinkedinIn className="text-xl" />
          </Link>
          {/* <Link href={"/"}>
            <RiTwitterXLine className="text-xl" />
          </Link>
          <Link href={"/"}>
            <FaInstagram className="text-xl" />
          </Link> */}
          <Link
            target="_blank"
            href="https://www.facebook.com/people/AdCen/61554682196746/"
          >
            <FaFacebook className="text-lg" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
