import React, { useState } from "react";
import logo from "../assets/logo.png";


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSelection, setCurrentSelection] = useState("About us");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className=" py-[30] sm:py-[32px]  font-[Poppins] fixed top-0 w-full z-50">
      <div className="container w-[90%] mx-auto flex justify-between items-center">
        <a href="/" className="text-white text-xl font-bold ">
          <img src={logo} alt="logo" className="w-32 sm:w-40" />
        </a>

        {/* Hamburger menu icon for small screens */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-white text-xl  px-3  py-2 "
        >
          {isMenuOpen ? "X" : "☰"}
        </button>

        {/* Collapsible menu for small screens */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:flex lg:items-center`}
        >
          <ul className="lg:flex lg:space-x-14 text-[14px] ">
           
            <li onClick={() => setCurrentSelection("Services")}>
              <div
                className={`${
                  currentSelection === "Services" ? "font-bold" : "font-light"
                } underline `}
              >
                Services
              </div>
            </li>
            <li onClick={() => setCurrentSelection("Managed Security Services")}>
              <div
                className={`${
                  currentSelection === "Managed Security Services"
                    ? "font-bold"
                    : "font-light"
                } underline `}
              >
                Managed Security Services
              </div>
            </li>
            <li onClick={() => setCurrentSelection("Initiatives")}>
              <div
                className={`${
                  currentSelection === "Initiatives"
                    ? "font-bold"
                    : "font-light"
                } underline `}
              >
                Initiatives
              </div>
            </li>
            <li onClick={() => setCurrentSelection("About us")}>
              <div
                className={`${
                  currentSelection === "About us" ? "font-bold" : "font-light"
                } underline `}
              >
                About us
              </div>
            </li>
            <li onClick={() => setCurrentSelection("Blog")}>
              <div
                className={`${
                  currentSelection === "Blog" ? "font-bold" : "font-light"
                } underline `}
              >
                Blog
              </div>
            </li>
          </ul>
        </nav>
        <div  className="sm:block hidden">
          <a
            href="/services#let-chat"
            className="border-[#4858E8] border-[1px] border-l-4   text-[#4858E8] hover:bg-[#E3E9FF]  hover:text-[#0E0E30] hover:border-0 text-sm font-bold py-3 px-7 "
          >
           CONTACT US
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
