import React from "react";
import { FaTelegramPlane, FaTwitter } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <div className="container relative z-10 mx-auto px-6 max-w-[1280px] py-16 lg:py-24">
        <div className="flex flex-wrap items-center justify-between gap-8 lg:flex-nowrap">
          <div className="relative">
            <img
              src="/about.png"
              loading="eager"
              className="max-w-[500px] w-full relative z-10"
            />
            {/* <img
              src="/about-gra.svg"
              className=" absolute w-[1200px] h-[1200px] top-1/2 -translate-y-1/2"
            /> */}
            <div className="bg-[#38AC1C] absolute h-[300px] top-1/2 -translate-y-1/2 w-[300px] rounded-full filter blur-[500px]" />
          </div>
          <div>
            <h2 className="text-center">SafeGrow</h2>
            <div className="text-center max-w-[700px] mx-auto leading-7 text-lg mt-2">
              A human-focused technology and innovation business expanding
              blockchain technologies for a brighter tomorrow.
            </div>
            <div className="flex justify-center mt-8">
              <a
                // rel="noreferrer"
                target="_blank"
                href="/whitepaper.pdf"
                className="gradient py-2 px-4 sm:px-8 rounded-xl   flex gap-4 items-center"
              >
                <span className="text-black font-bold text-xs sm:text-lg">
                  Moonpaper
                </span>
                <img src="/whitepaper.png" className="w-8 sm:w-8" />
              </a>
            </div>
            {/* <div className="flex items-center gap-4 justify-center mt-6">
              <a className="h-14 text-3xl w-14 flex items-center justify-center gradient rounded-full">
                <FaTelegramPlane />
              </a>
              <a className="h-14 text-3xl w-14 flex items-center justify-center gradient rounded-full">
                <FaTwitter />
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
