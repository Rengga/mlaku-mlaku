import React, { useState } from "react";
import "./navbar.css";
import Login from "./button";
import SignUp from "./SignUp";

const Navbar = () => {
  let links = [
    { name: "Home", link: "/" },
    { name: "Bookmark", link: "/" },
    { name: "Kategori", link: "/" },
  ];

  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-10">
      <div className="md:flex bg-white py-1 items-center justify-between pt-2 pb-2 2xl:px-96 xl:px-32 lg:px-24 md:px-8 px-3" id="navbar">
        <div className="font-bold text-2xl cursor-pointer flex items-center">
          <span className="text-3xl text-emerald-500 ">Mlaku-Mlaku</span>
        </div>

        <div onClick={() => setOpen(!open)} className="absolute text-3xl right-3 top-3 cursor-pointer md:hidden text-emerald-800">
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 ml-0 pb-5 absolute md:static md:bg-white bg-emerald-100 md:z-auto z-[-1] left-0 w-full md:w-auto pl-9 trasition-all duration-500 ease-in border-emerald-500 ${
            open ? "top-12 border-b-4" : "top-[-490px]"
          }`}
        >
          {links.map((link) => (
            <li key={link.name} className="md:ml-3 text-md md:my-0 my-5">
              <a className="mr-4 text-emerald-800 hover:text-emerald-400 duration-500" href={link.link} id="link-name">
                {link.name}
              </a>
            </li>
          ))}
          {/* <button className="relative group md:flex justify-end mr-3">
            <div className="h-11 w-11 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full border-solid border-2 border-indigo-800 "></div>
            <div className="absolute hidden group-focus:block bg-white shadow-md mt-12">
              <ul className="text-center border rounded">
                <li className="px-4 py-1 hover:bg-gray-100 border-b">Profil</li>
                <li className="px-4 py-1 hover:bg-gray-100 border-b">Logout</li>
              </ul>
            </div>
          </button> */}
          <Login></Login>
          {/* <SignUp></SignUp> */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
