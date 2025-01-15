"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../UI/image/logo.png";

const NavBar = () => {
  return (
    <div className="navbar bg-gray-900 text-white front-bold">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-gray-900 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/stop">Our Service</Link>
            </li>
            <li>
              <Link href="/blog">Contract</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center">
          <div>
            <Link href="/" className="btn btn-ghost text-xl">
              <Image src={logo} alt="" height={50} width={50} />
            </Link>
          </div>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/service">Our Service</Link>
          </li>
          <li>
            <Link href="/contract">Contract</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div>
          <Link
            href="/login"
            className="mt-6 px-6 py-3 bg-blue-900 text-blavk border border-black font-semibold rounded-lg  "
          >
            Signin
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
