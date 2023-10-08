import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BiSolidMap, BiLogoFacebook } from "react-icons/bi";
import { BsInstagram, BsTwitter ,BsArrowRightShort } from "react-icons/bs";
const Hero = () => {
  return (
    <section className="max-w-[1260px] sm:mx-auto  mx-0 md:px-7 my-48">
      <div className="flex sm:flex-row flex-col contact-form justify-between gap-18 sm:p-9">
        <div className="flex flex-col p-8">
          <h1 className="text-white text-[1.8rem]">Get in Touch</h1>
          <div className="mt-[16px] text-[#BEC5FF]">
            <p>Reach out to us. We can make something awesome together</p>
          </div>

          <div className="max-w-[300px] mt-[54px]">
            <div className="mt-[24px] flex   items-start align-middle  gap-6 ">
              <AiOutlineMail className="text-[20px] text-[#4858E8]" />
              <a className="text-white " href="">
                info@primefort.net
              </a>
            </div>

            <div className="mt-[24px] flex   items-start align-middle  gap-6 ">
              <BiSolidMap className="text-[40px] text-[#4858E8]" />
              <a className="text-white" href="">
                Raheja Towers, Unit, 812, Alpha wing, No, 177 Anna Salai,
                Chennai - 600002
              </a>
            </div>

            <ul className="mt-[74px] md:mt-[250px] max-w-[180px] justify-between items-center flex text-[#BEC5FF]">
              <li>
                <a href="https://www.facebook.com/PrimeFort/">
                  <BiLogoFacebook className="text-[32px]" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/primefortoffl">
                  <BsTwitter className="text-[32px]" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/prime_fort/">
                  <BsInstagram className="text-[32px]" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border border-[#4858E8] sm:w-[50%] p-[12px]">
          <div className="bg-[#E3E9FF] px-[60] py-[66] ">
            <form className="px-[60px] py-[66px]" action="">
              <div className="label-form ">
                <label for="name">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value=""
                    placeholder="Enter your full name"
                    required="true"
                    spellcheck="false"
                  />
                  <span>Full Name</span>
                </label>
              </div>
              <div className="label-form pt-8">
                <label for="email">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value=""
                    placeholder="Enter your email address"
                    required=""
                    spellcheck="false"
                  />
                  <span>Email</span>
                </label>
              </div>

              <div className="label-form pt-8">
                <label for="subject">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value=""
                    placeholder="Enter the subject of your message"
                    required=""
                    spellcheck="false"
                  />
                  <span>Subject</span>
                </label>
              </div>

              <div className="label-form pt-8">
                <label for="message">
                  <textarea
                    id="message"
                    name="message"
                    required=""
                    spellcheck="false" 
                    rows="6"
                    className="bg-[#E3E9FF] w-full "
                  ></textarea>
                  <span>Message</span>
                </label>
              </div>

              <div className="label-form pt-8">
          <button type="submit"
            className="border-[#4858E8]  flex items-center gap-4 border-[1px] border-l-4   text-[#4858E8] hover:bg-[#E3E9FF]  hover:text-[#0E0E30] hover:border-[#0E0E30] text-sm font-bold py-2 px-6 "
          >
           SEND MESSAGE
           <BsArrowRightShort className="text-[36px] "/>
          </button>
        </div>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
