import React from "react";
import logo from "../assets/logo.png";
import {  BiLogoFacebook } from "react-icons/bi";
import { BsInstagram, BsTwitter ,BsArrowRightShort } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="pt-[120px] bg-[#07071B] text-white w-full">
      <div className="flex sm:flex-row flex-col justify-between gap-16 sm:gap-0 sm:mx-[150px] mx-[20px]  items-center">
        <div className="flex flex-col ">
          {" "}
          <a href="/" className=" text-xl font-bold ">
            <img src={logo} alt="logo" className="w-40  " />
          </a>
          <p className="sm:max-w-[380px] mt-9 text-[10px] sm:text-[12px]">
            Primefort is a global provider of IT security solutions that solve
            real business issues. Our dedicated team of security engineers
            offers solutions to customers throughout the world for securing
            innovation
          </p>
        </div>
        <div className="sm:block hidden">
          <h1 className="text-[#4858E8] font-bold mb-[24px]">Services</h1>
          <p className="underline mb-3 font-thin text-[12px]">
            Web Application Penetration Testing{" "}
          </p>
          <p className="underline mb-3 font-thin text-[12px] ">
            Mobile Application Penetration Testing
          </p>
          <p className="underline mb-3 font-thin text-[12px] ">
            Network Penetration Testing{" "}
          </p>
          <p className="underline mb-3 font-thin text-[12px] ">
            Cloud Security{" "}
          </p>
          <p className="underline mb-3 font-thin text-[12px] ">Compliance</p>
          <p className="underline mb-3 font-thin text-[12px] ">SOC</p>
        </div>
        <div className="sm:block hidden">
          <h1 className="text-[#4858E8] font-bold mb-[24px]">About Us</h1>
          <p className="underline mb-3 font-thin text-[12px] ">Our Story</p>
          <p className="underline mb-3 font-thin text-[12px] ">Our Journey</p>
          <p className="underline mb-3 font-thin text-[12px] ">
            Leadership Team{" "}
          </p>
          <p className="underline mb-3 font-thin text-[12px] ">Advisors </p>
          <p className="underline mb-3 font-thin text-[12px] ">Careers </p>
          <p className="underline mb-3 font-thin text-[12px] "> Awards</p>
        </div>
        <div className="sm:pt-[20px] ">
          <div className=" mb-8  ">
            <a
              href="/services#let-chat"
              className="border-[#4858E8] border-[1px] border-l-4   text-[#4858E8] hover:bg-[#E3E9FF]  hover:text-[#0E0E30] hover:border-0 text-sm font-bold py-3 px-7 "
            >
              CONTACT US
            </a>
          </div>
          <ul className="max-w-[180px] justify-between items-center flex mb-3 text-white">
              <li>
                <a href="https://www.facebook.com/PrimeFort/">
                  <BiLogoFacebook className="text-[24px]" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/primefortoffl">
                  <BsTwitter className="text-[24px]" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/prime_fort/">
                  <BsInstagram className="text-[24px]" />
                </a>
              </li>
            </ul>
            <h1 className="text-[#4858E8] font-bold text-[10px] sm:text-[12px]hover:cursor-pointer">Headquarter</h1>
            <p className=" mb-[24px] font-thin text-[10px] sm:text-[12px] w-[300px] hover:cursor-pointer"> Raheja Towers, Unit, 812, Alpha wing, No, 177 Anna Salai, Chennai - 600002</p>
            <h1 className="text-[#4858E8] font-bold text-[10px] sm:text-[12px] hover:cursor-pointer">Email</h1>
            <p className=" mb-[24px] font-thin text-[10px] sm:text-[12px] hover:cursor-pointer"> info@primefort.net</p>
        </div>
      </div>
      <div className="items-center justify-center flex flex-col font-thin  text-[10px] sm:text-[12px] gap-4 mt-6 pb-4" >
        <p>Privacy Policy | Terms and Conditions</p>
        <p>© Copyright - Primefort Private Limited</p>
      </div>
    </div>
  );
};

export default Footer;
