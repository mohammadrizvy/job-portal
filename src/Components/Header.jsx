import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-100 pl-44 pr-44 pt-6">
        <div className="navbar-start">
          <Link
            to="/"
            className=" normal-case text-2xl font-extrabold text-black ">
            JobPortal
          </Link>
        </div>
        <div className="navbar-center lg:flex">
          <ul className=" flex gap-16 px-1 font-semibold text-slate-500 ">
            <Link to="/">Home</Link>
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
