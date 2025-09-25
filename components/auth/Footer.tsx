import Link from "next/link";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="max-w-7xl mx-auto mt-2 max-sm:max-w-sm flex justify-between max-lg:max-w-xl">
      <span className="text-purple-800 max-sm:text-xs">
        <Link href={"/"}>e-Store</Link>
      </span>
      <div className="text-purple-800 items-end max-sm:text-xs flex gap-3">
        <Link href={"/"}>
          <FaFacebookF />
        </Link>
        <Link href={"/"}>
          <FaLinkedinIn />
        </Link>
        <Link href={"/"}>
          <FaInstagram />
        </Link>
        <Link href={"/"}>
          <FaTwitter />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
