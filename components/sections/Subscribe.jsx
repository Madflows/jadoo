import React from "react";

const Subscribe = () => {
  return (
    <section>
      <div
        style={{
          background: "url(/assets/conespring.png) repeat #F6F3FD",
        }}
        className="max-w-6xl mx-auto rounded-[20px] py-[40px] md:py-[60px] md:rounded-tl-[129px] p-4 flex flex-col gap-8 items-center"
      >
        <h4 className="text-[20px] sm:text-[33px] text-lightGray sm:leading-[55px] font-semibold text-center max-w-3xl">
          Subscribe to get information, latest news and other interesting offers
          about Jadoo
        </h4>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-[626px] mx-auto">
          <label className="h-[68px] p-4 px-6 bg-white w-full max-w-lg rounded-[10px] flex items-center gap-4">
            <img src="/assets/icons/mail-icon.svg" alt="mail" />
            <input
              type="text"
              placeholder="Your email"
              className="h-full w-full placeholder:text-[#39425D] outline-none border-none"
            />
          </label>
          <button className="bg-jellyBean w-full sm:max-w-[180px] h-[68px] rounded-[10px] font-medium text-white flex items-center justify-center">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;