import React, { useState } from "react";
import logo from "../assets/logo.png";
import { RxCross1 } from "react-icons/rx";
import { RiArrowDropDownLine, RiArrowDropRightLine } from "react-icons/ri";
import { SiHtml5 } from "react-icons/si";

const HoverItem = () => {
  return (
    <div className=" group  w-[400px] flex  items-start gap-4 ">
      <div className="p-1">
        {" "}
        <SiHtml5 size={40} />
      </div>
      <div className="space-y-3">
        <a href="" className="font-bold text-xl  ">
          <span>Network Penetration Testing </span>{" "}
          <RiArrowDropRightLine className="inline-block " />{" "}
        </a>

        <p className="text-sm">
          Reach out to us. We can make something awesome togetherReach out to
          us. We can make something awesome together
        </p>
      </div>
    </div>
  );
};

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSelection, setCurrentSelection] = useState("About us");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className=" py-[30] sm:py-[32px]  font-[Poppins] fixed top-0 w-full z-50">
      <div className="container w-[90%] sm:mx-auto flex justify-between items-center">
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
            isMenuOpen
              ? " absolute top-0 w-[90%]  h-[100vh] bg-[#0E0E30] flex  flex-col"
              : "hidden"
          } lg:flex lg:items-center`}
        >
          <ul className="lg:flex lg:space-x-14 text-[14px] overflow-scroll sm:overflow-visible no-scrollbar h-[80%] sm:h-auto ">
            <li
              onClick={() =>
                currentSelection === "Services"
                  ? setCurrentSelection("")
                  : setCurrentSelection("Services")
              }
            >
              <div
                className={`${
                  isMenuOpen
                    ? "font-bold text-white px-6 py-5 text-xl mt-5 flex justify-between items-center"
                    : "font-light  underline group z-10"
                }`}
              >
                Services
                <RiArrowDropDownLine
                  className={`${
                    isMenuOpen ? "font-bold text-white text-3xl " : "hidden "
                  }`}
                />
                <div
                  className={`${
                    isMenuOpen
                      ? "hidden"
                      : "w-max !-ml-[300px] mt-8 bg-[#0e0e30] hidden z-50 group-hover:grid md:grid-cols-2 lg:grid-cols-3  py-16 px-14 gap-5 absolute  border-b-[5px] border-[#4858e8]  "
                  }`}
                >
                  <li className=" parent w-[350px] flex  items-start gap-4 ">
                    <div className="p-1">
                      {" "}
                      <SiHtml5 size={40} className="text-[#4858E8]" />
                    </div>
                    <div className="space-y-3">
                      <a href="" className="font-bold text-[16px]  ">
                        <span>Web Application Penetration Testing </span>{" "}
                        <RiArrowDropRightLine className="inline-block parent-hover:translate-x-16" />{" "}
                      </a>

                      <p className="text-[12px] text-[#BEC5FF]">
                        Track the latest vulnarebilities and cyber threat to
                        your web application
                      </p>
                    </div>
                  </li>
                  <li className=" parent w-[350px] flex  items-start gap-4 ">
                    <div className="p-1">
                      {" "}
                      <SiHtml5 size={40} className="text-[#4858E8]" />
                    </div>
                    <div className="space-y-3">
                      <a href="" className="font-bold text-[16px]  ">
                        <span>Mobile Application Penetration Testing </span>{" "}
                        <RiArrowDropRightLine className="inline-block parent-hover:translate-x-16" />{" "}
                      </a>

                      <p className="text-[12px] text-[#BEC5FF]">
                        All in one network security for your mobile applcation
                      </p>
                    </div>
                  </li>
                  <li className=" parent w-[350px] flex  items-start gap-4 ">
                    <div className="p-1">
                      {" "}
                      <SiHtml5 size={40} className="text-[#4858E8]" />
                    </div>
                    <div className="space-y-3">
                      <a href="" className="font-bold text-[16px]  ">
                        <span>Network Penetration Testing </span>{" "}
                        <RiArrowDropRightLine className="inline-block parent-hover:translate-x-16" />{" "}
                      </a>

                      <p className="text-[12px] text-[#BEC5FF]">
                        Automated ,secure ,and Comprehensive network penitration
                        testing
                      </p>
                    </div>
                  </li>
                  <li className=" parent w-[350px] flex mt-6 items-start gap-4 ">
                    <div className="p-1">
                      {" "}
                      <SiHtml5 size={40} className="text-[#4858E8]" />
                    </div>
                    <div className="space-y-3">
                      <a href="" className="font-bold text-[16px]  ">
                        <span>Cloud Security </span>{" "}
                        <RiArrowDropRightLine className="inline-block parent-hover:translate-x-16" />{" "}
                      </a>

                      <p className="text-[12px] text-[#BEC5FF]">
                        Track the latest vulnarebilities and cyber threat to
                        your web application
                      </p>
                    </div>
                  </li>
                  <li className=" parent w-[350px] flex mt-6 items-start gap-4 ">
                    <div className="p-1">
                      {" "}
                      <SiHtml5 size={40} className="text-[#4858E8]" />
                    </div>
                    <div className="space-y-3">
                      <a href="" className="font-bold text-[16px]  ">
                        <span>Compliance</span>{" "}
                        <RiArrowDropRightLine className="inline-block parent-hover:translate-x-16" />{" "}
                      </a>

                      <p className="text-[12px] text-[#BEC5FF]">
                        Track the latest vulnarebilities and cyber threat to
                        your web application
                      </p>
                    </div>
                  </li>
                  <li className=" parent w-[350px] flex mt-6 items-start gap-4 ">
                    <div className="p-1">
                      {" "}
                      <SiHtml5 size={40} className="text-[#4858E8]" />
                    </div>
                    <div className="space-y-3">
                      <a href="" className="font-bold text-[16px]  ">
                        <span>SOC </span>{" "}
                        <RiArrowDropRightLine className="inline-block parent-hover:translate-x-16" />{" "}
                      </a>

                      <p className="text-[12px] text-[#BEC5FF]">
                        Track the latest vulnarebilities and cyber threat to
                        your web application
                      </p>
                    </div>
                  </li>
                </div>
              </div>

              <div
                className={`${
                  isMenuOpen && currentSelection === "Services"
                    ? " flex flex-col text-white px-12 py-5 text-base font-light mt-5 "
                    : "hidden"
                }`}
              >
                <ul>
                  <li className="py-6">
                    <a href="">Web Application Penetration Testing</a>
                  </li>
                  <li className="py-6">
                    <a href="">Mobile Application Penetration Testing </a>
                  </li>
                  <li className="py-6">
                    <a href="">Network Penetration Testing</a>
                  </li>
                  <li className="py-6">
                    <a href=""> Cloud Security</a>
                  </li>
                  <li className="py-6">
                    <a href=""> Compliacne</a>
                  </li>
                  <li className="py-6">
                    <a href="">SOC</a>
                  </li>
                </ul>
              </div>
            </li>
            <li
              onClick={() => setCurrentSelection("Managed Security Services")}
            >
              <div
                className={`${
                  isMenuOpen
                    ? "font-bold text-white px-6 py-5 text-xl"
                    : "font-light  underline "
                }`}
              >
                Managed Security Services
              </div>
            </li>
            <li
              onClick={() =>
                currentSelection === "Initiatives"
                  ? setCurrentSelection("")
                  : setCurrentSelection("Initiatives")
              }
            >
              <div
                className={`${
                  isMenuOpen
                    ? "font-bold text-white px-6 py-5 text-xl flex justify-between items-center"
                    : "font-light  underline group z-10"
                }`}
              >
                Initiatives
                <RiArrowDropDownLine
                  className={`${
                    isMenuOpen ? "font-bold text-white text-3xl " : "hidden "
                  }`}
                />
                <div
                  className={`${
                    isMenuOpen
                      ? "hidden"
                      : "w-max !-ml-[650px] mt-8 bg-[#0e0e30] hidden z-50 group-hover:grid md:grid-cols-2 lg:grid-cols-3  py-16 px-14 gap-5 absolute  border-b-[5px] border-[#4858e8]  "
                  }`}
                >
                  <li className=" parent w-[350px] flex  items-start gap-4 ">
                    
                    <div className="space-y-3">
                      <a href="" className="font-bold text-[16px]  ">
                        <span>Primpilot </span>{" "}
                        <RiArrowDropRightLine className="inline-block parent-hover:translate-x-16" />{" "}
                      </a>

                      <p className="text-[12px] text-[#BEC5FF]">
                        Empowring the next generation of cyber heros
                      </p>
                    </div>
                  </li>
                  <li className=" parent w-[350px] flex  items-start gap-4 ">
                    <div className="space-y-3">
                      <a href="" className="font-bold text-[16px]  ">
                        <span>DigiSafe Nation</span>{" "}
                        <RiArrowDropRightLine className="inline-block parent-hover:translate-x-16" />{" "}
                      </a>

                      <p className="text-[12px] text-[#BEC5FF]">
                        Commit to safety of our community
                      </p>
                    </div>
                  </li>
                </div>
              </div>

              <div
                className={`${
                  isMenuOpen && currentSelection === "Initiatives"
                    ? " flex flex-col text-white px-12 py-5 text-base font-light  "
                    : "hidden"
                }`}
              >
                <ul>
                  <li className="py-6">
                    <a href="">Primepilot</a>
                  </li>
                  <li className="py-6">
                    <a href=""> DigiSafe Nation</a>
                  </li>
                </ul>
              </div>
            </li>
            <li
              onClick={() =>
                currentSelection === "About us"
                  ? setCurrentSelection("")
                  : setCurrentSelection("About us")
              }
            >
              <div
                className={`${
                  isMenuOpen
                    ? "font-bold text-white px-6 py-5 text-xl flex justify-between items-center"
                    : "font-light  underline group z-10 "
                }`}
              >
                About us
                <RiArrowDropDownLine
                  className={`${
                    isMenuOpen ? "font-bold text-white text-3xl " : "hidden "
                  }`}
                />
                <div
                  className={`${
                    isMenuOpen
                      ? "hidden"
                      : "w-max !-ml-[770px] mt-8 bg-[#0e0e30] hidden z-50 group-hover:grid md:grid-cols-2 lg:grid-cols-3  py-16 px-14 gap-5 absolute  border-b-[5px] border-[#4858e8]  "
                  }`}
                >
                  <li className=" parent w-[350px] flex  items-start gap-4 ">
                    
                    <div className="space-y-3">
                      <a href="" className="font-bold text-[16px]  ">
                        <span>Our story </span>{" "}
                        <RiArrowDropRightLine className="inline-block parent-hover:translate-x-16" />{" "}
                      </a>

                      <p className="text-[12px] text-[#BEC5FF]">
                        Empowring the next generation of cyber heros
                      </p>
                    </div>
                  </li>
                  <li className=" parent w-[350px] flex  items-start gap-4 ">
                    <div className="space-y-3">
                      <a href="" className="font-bold text-[16px]  ">
                        <span>Our Journey</span>{" "}
                        <RiArrowDropRightLine className="inline-block parent-hover:translate-x-16" />{" "}
                      </a>

                      <p className="text-[12px] text-[#BEC5FF]">
                        Commit to safety of our community
                      </p>
                    </div>
                  </li>
                  <li className=" parent w-[350px] flex  items-start gap-4 ">
                    
                    <div className="space-y-3">
                      <a href="" className="font-bold text-[16px]  ">
                        <span>Leadership Team </span>{" "}
                        <RiArrowDropRightLine className="inline-block parent-hover:translate-x-16" />{" "}
                      </a>

                      <p className="text-[12px] text-[#BEC5FF]">
                        Empowring the next generation of cyber heros
                      </p>
                    </div>
                  </li>
                  <li className=" parent w-[350px] flex  items-start gap-4 ">
                    <div className="space-y-3">
                      <a href="" className="font-bold text-[16px]  ">
                        <span>Advisors</span>{" "}
                        <RiArrowDropRightLine className="inline-block parent-hover:translate-x-16" />{" "}
                      </a>

                      <p className="text-[12px] text-[#BEC5FF]">
                        Commit to safety of our community
                      </p>
                    </div>
                  </li>
                  <li className=" parent w-[350px] flex  items-start gap-4 ">
                    
                    <div className="space-y-3">
                      <a href="" className="font-bold text-[16px]  ">
                        <span>Carrer </span>{" "}
                        <RiArrowDropRightLine className="inline-block parent-hover:translate-x-16" />{" "}
                      </a>

                      <p className="text-[12px] text-[#BEC5FF]">
                        Empowring the next generation of cyber heros
                      </p>
                    </div>
                  </li>
                  <li className=" parent w-[350px] flex  items-start gap-4 ">
                    <div className="space-y-3">
                      <a href="" className="font-bold text-[16px]  ">
                        <span>Awards</span>{" "}
                        <RiArrowDropRightLine className="inline-block parent-hover:translate-x-16" />{" "}
                      </a>

                      <p className="text-[12px] text-[#BEC5FF]">
                        Commit to safety of our community
                      </p>
                    </div>
                  </li>
                </div>
              </div>

              <div
                className={`${
                  isMenuOpen && currentSelection === "About us"
                    ? " flex flex-col text-white px-12 py-5 text-base font-light mt-5 "
                    : "hidden"
                }`}
              >
                <ul>
                  <li className="py-6">
                    <a href="">Our Story</a>
                  </li>
                  <li className="py-6">
                    <a href="">Our Journey</a>
                  </li>
                  <li className="py-6">
                    <a href="">Leadership Team</a>
                  </li>
                  <li className="py-6">
                    <a href=""> Advisors</a>
                  </li>
                  <li className="py-6">
                    <a href=""> Carrers</a>
                  </li>
                  <li className="py-6">
                    <a href="">Awards</a>
                  </li>
                </ul>
              </div>
            </li>
            <li onClick={() => setCurrentSelection("Blog")}>
              <div
                className={`${
                  isMenuOpen
                    ? "font-bold text-white px-6 py-5 text-xl"
                    : "font-light  underline "
                }`}
              >
                Blog
              </div>
            </li>
          </ul>
          <div
            className={`${
              isMenuOpen
                ? "flex w-[90%] pl-6 mt-20 justify-between items-center"
                : "hidden "
            }`}
          >
            <button className="border-[#4858E8] border-[1px] border-l-4   text-[#4858E8] hover:bg-[#E3E9FF]  hover:text-[#0E0E30] hover:border-0 text-sm font-bold py-3 px-7 ">
              GET IN TOUCH
            </button>
            <div
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              <RxCross1 className="text-[#E3E9FF] text-3xl font-bold" />
            </div>
          </div>
        </nav>
        <div className="sm:block hidden">
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
