import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { AuthContext } from "../../Providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  return (
    <div>
      <div className="navbar h-28 backdrop-blur-md bg-white/40 mb-20 font-bold font-xl text-black">
        <div className="navbar-start">
          <div className="dropdown dropdown-right">
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
              className="dropdown-content fixed z-[9999] menu p-2 text-black shadow backdrop-blur-xl bg-white rounded-box w-52"
            >
              <li>
                <Link className="p-0 m-3" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="p-0 m-3" to="/about">
                  About
                </Link>
              </li>
              {user?.email && (
                <>
                  <li>
                    <Link className="p-0 m-3" to="/bookings">
                      My Bookings
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          <Link to="/" className="btn glass  text-xl h-auto">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link className="p-0 m-3" to="/">
                <button className="btn glass ">Home</button>
              </Link>
            </li>
            <li>
              <Link className="p-0 m-3" to="/about">
                <button className="btn glass ">About</button>
              </Link>
            </li>
            {user?.email && (
              <>
                <li>
                  <Link className="p-0 m-3" to="/bookings">
                    <button className="btn glass ">My Bookings</button>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          {user?.email ? (
            <button className="btn glass text-black" onClick={handleLogOut}>
              Log out
            </button>
          ) : (
            <Link to="/login">
              <button className="btn glass text-black">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
