import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-100 pl-44 pr-44 pt-6">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li tabIndex={0}>
                <a className="justify-between">
                  Parent
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24">
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <Link to="/" className=" normal-case text-2xl font-extrabold ">JobPortal</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" flex gap-16 px-1 font-semibold text-slate-500 ">
            <Link to="/Statistics">Statistics</Link>
            <Link to="/appliedjob">Applied Jobs</Link>
            <Link to="/blog">Blog</Link>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn font-semibold bg-blue-400 text-white">
            Star Applying
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
