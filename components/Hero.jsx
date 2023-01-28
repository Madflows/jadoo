import React, { Fragment } from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <Fragment>
      <Navbar />

      <div className="grid grid-cols-1 md:grid-cols-2 mt-[2rem] p-4 gap-8 relative max-w-6xl xl:max-w-8xl mx-auto">
        <div data-aos={"fade-right"} className="flex flex-col gap-4 items-center md:items-start">
          <p className="text-jellyBean text-center md:text-left uppercase text-[14px] md:text-[20px] font-bold">
            Best Destinations around the world
          </p>
          <h1>
            Travel,{" "}
            <span className="relative">
              enjoy
              <img
                src="/assets/spray.svg"
                className="absolute right-0 h-3"
                alt=""
                style={{ top: "88px" }}
              />
            </span>{" "}
            <br />
            and live a new <br />
            and full life
          </h1>
          <p className="text-base text-center md:text-left text-[#5E6282] font-medium max-w-md">
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>
          <div className="flex items-center gap-4 mt-4">
            <button className="font-g-sans-medium hover:scale-100 active:scale-95 transition-all will-change-transform text-xl scale-95 bg-orange font-medium text-white rounded-md py-2 px-5 bg-">
              Find out more
            </button>
            <button className=" flex items-center gap-3 hover:scale-100 active:scale-95 transition-all will-change-transform text-xl scale-95 ">
              <div className="w-10 h-10 grid place-items-center rounded-full bg-jellyBean ">
                <img src="/assets/play-icon.svg" alt="play icon" />
              </div>
              <p className="font-g-sans-medium font-medium text-[#5E6282] text-[17px]">
                Play Demo
              </p>
            </button>
          </div>
        </div>
        <div data-aos="fade-left">
          <img src="/assets/traveller.webp" alt="traveller" />
        </div>
      </div>
    </Fragment>
  );
};

export default Hero;
