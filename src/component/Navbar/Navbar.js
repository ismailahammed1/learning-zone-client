import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Contexts/useContext";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const { user, logout } = useContext(AuthContext);

  const handleSignOut = () => {
    logout()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <nav className="relative flex flex-wrap items-center justify-center px-2 py-3 bg-pink-500 mb-3">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link
            to="/"
            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
          >
            ClickZone Learning
          </Link>
          <button
            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <Bars3Icon className="h-6 w-6 ml-3 text-blue-500" />
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
          id="example-navbar-danger"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <Link
              to="/"
              className="ml-2 px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
            >
              Home
            </Link>
            <Link
              to="/category"
              className="ml-2 px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
            >
              Courses
            </Link>

            <Link
              to="/Statistics"
              className="ml-2 px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
            >
              FAQ
            </Link>

            <Link
              to="/Blog"
              className="ml-2 px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
            >
              Blog
            </Link>

            {user?.email ? (
              <button
                onClick={handleSignOut}
                className="ml-2 px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
              >
                Log out
              </button>
            ) : (
              <Link
                to="/login"
                className="ml-2 px-3 py-2 flex items-center text-xs uppercase
                font-bold leading-snug text-white hover:opacity-75"
              >
                Log In
              </Link>
            )}
            <p className=" m-2">
              {user?.displayName && <span> {user.displayName}</span>}
            </p>
            <p className="ml-2">
              <img
                src={user?.photoURL ? user.photoURL : <FaUserAlt />}
                referrerPolicy="no-referrer"
                alt=""
                className=" border w-10 h-10 rounded-full bg-gray-500 border-gray-700"
              />
            </p>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
