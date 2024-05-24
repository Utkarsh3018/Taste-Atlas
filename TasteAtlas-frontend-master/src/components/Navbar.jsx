import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { useAuth0 } from "@auth0/auth0-react";
// import logo from "../../public/"

const Navbar = (props) => {
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  };
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  // console.log(user);
  return (
    <nav className="py-4 px-10 flex bg-inherit justify-between shadow-md">
      <span className=" mt-1 text-2xl font-bold cursor-pointer ">
        <Link className="flex" to="/">
          <img className=" w-24 h-10 -mr-6" src="/TasteAtlas.svg" />
          TasteAtlas
        </Link>
      </span>
      <ul className="hidden px-4 md:flex ">
        <div className="px-5">
          {isAuthenticated ? (
            <li className="mr-1">
              <p className="inline pr-5">Welcome {user.given_name}</p>
              <button
                className="bg-[#FF0000] px-4 py-1 rounded-lg text-white"
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                Logout
              </button>
              <Link to="/dashboard">
                <button className="bg-[#507b14] px-4 py-1 mx-1  rounded-lg text-white">
                  Dashboard
                </button>
              </Link>
            </li>
          ) : (
            <li className="mt-1 mr-1">
              <button
                className="bg-blue-500 px-4 py-1 rounded-lg text-white"
                onClick={() => loginWithRedirect()}
              >
                Login
              </button>
            </li>
          )}
        </div>
        {/* Use props to change button to Log out */}
        <li className="mt-1">
          <Link to="/about">About us</Link>
        </li>
      </ul>
      <div onClick={handleNav} className="md:hidden block">
        {!nav ? (
          <AiFillCloseCircle className="text-[#507b14]" size={25} />
        ) : (
          <GiHamburgerMenu className="text-[#507b14]" size={25} />
        )}
      </div>
      <div
        className={
          !nav
            ? " z-10 fixed left-0 top-0 w-[63%] md:hidden lg:hidden h-full border-r-4  border-r-[#507b14] border-t-4 border-t-[#507b14] bg-[#aad077] ease-in-out duration-500 "
            : "fixed left-[-100%] ease-out duration-700"
        }
      >
        <h1 className="text-3xl font-bold p-6 m-8">TasteAtlas</h1>
        <ul className="pt-12 p-8 ">
          {isAuthenticated ? (
            <li className="p-4 border-b border-[#507b14]">
              <button
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                Logout
              </button>
              <Link to="/dashboard">
                <button className="bg-[#507b14] px-4 py-1 rounded-lg text-white">
                  Dashboard
                </button>
              </Link>
            </li>
          ) : (
            <li className="p-4 border-b border-[#507b14]">
              <button onClick={() => loginWithRedirect()}>Login</button>
            </li>
          )}
          {/* <li className="p-4 border-b border-[#507b14]">Log in</li>{" "} */}
          {/* Use props to change button to Log out */}
          <li className="p-4">
            <Link to="/about">About us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
