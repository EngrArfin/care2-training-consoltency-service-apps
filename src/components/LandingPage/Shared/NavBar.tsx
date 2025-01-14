"use client";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="navbar bg-green-100">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/stop">Stop</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <Link href="" className="btn btn-ghost text-xl">
          Vegetable Shop
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="">Home</Link>
          </li>

          <li>
            <Link href="">Stop</Link>
          </li>
          <li>
            <Link href="">About Us</Link>
          </li>
          <li>
            <Link href="">Blog</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div>
          <Link href="" className="">
            Fevorites
          </Link>
        </div>
        <div className="flex justify-center items-center ml-2 mr-2 ">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
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
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </div>
          <div>Cart</div>
        </div>

        <div>
          <button className="mt-6 px-6 py-3 bg-green-400 text-white border border-white font-semibold rounded-lg  ">
            SignIn
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
