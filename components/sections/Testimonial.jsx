import React, { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { RoughNotation } from "react-rough-notation";

const TESTIMONIES = [
  {
    name: "Mike Taylor",
    position: "Lahore, Pakistan",
    body: "“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”",
    image: "/assets/testimonies/01.png",
  },
  {
    name: "Sarah Connor",
    position: "Head of Operations",
    body: "“After going through a number of sites, I had to settle for Jadoo because honestly it was a no brainer trying someone else.”",
    image: "/assets/testimonies/02.png",
  },
  {
    name: "Chris Thomas",
    position: "CEO of Red Button",
    body: "“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”",
    image: "/assets/testimonies/03.png",
  },
];

const Testimonial = () => {
  const [activeTestimony, setActiveTestimony] = useState(3);
  return (
    <section className="px-4 md:px-10">
      <div className="max-w-6xl pb-[350px] lg:pb-[200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex flex-col items-start justify-between gap-4">
          <div className="w-full flex flex-col">
            <p className="uppercase mx-auto lg:mx-0 font-semibold text-lg text-lightGray">
              Testimonials
            </p>
            <h2 className="text-primary max-w-[60vw] mx-auto lg:mx-0 lg:max-w-[400px] text-center lg:text-start">
              What People Say About Us.
            </h2>
          </div>

          <div className="flex w-fit md:w-full mx-auto items-center mt-[3rem] gap-[26px]">
            <StepBtn
              step={1}
              activeStep={activeTestimony}
              setStep={setActiveTestimony}
            />
            <StepBtn
              step={2}
              activeStep={activeTestimony}
              setStep={setActiveTestimony}
            />
            <StepBtn
              step={3}
              activeStep={activeTestimony}
              setStep={setActiveTestimony}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-baseline gap-[3rem]">
          <div className="w-full max-w-lg relative">
            {TESTIMONIES.map((testimony, index) => (
              <TestimonyCard
                key={index}
                step={index + 1}
                activeTestimony={activeTestimony}
                testimony={testimony}
              />
            ))}
          </div>
          <div className="flex items-end relative">
            <div className="grid grid-cols-2 md:grid-cols-1  mx-[2rem] h-[200px]">
              <button
                onClick={() => {
                  setActiveTestimony(
                    activeTestimony != 3 ? activeTestimony + 1 : 1
                  );
                }}
                disabled={activeTestimony == 3}
                className="text-lg focus:ring-2 focus:ring-offset-2 ring-slate-400 transition bg-slate-100 h-10 w-10 rounded-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed text-primary"
              >
                <FaChevronUp />
              </button>
              <button
                onClick={() => {
                  setActiveTestimony(
                    activeTestimony != 1 ? activeTestimony - 1 : 3
                  );
                }}
                disabled={activeTestimony == 1}
                className="text-lg focus:ring-2 focus:ring-offset-2 ring-slate-400 bg-slate-100 h-10 w-10 rounded-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed text-primary"
              >
                <FaChevronDown />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function StepBtn({step, setStep, activeStep}) {
    return (
      <button
        onClick={() => setStep(step)}
        className={`w-[12px] h-[12px] rounded-full transition-all ${
          step == activeStep
            ? "bg-[#39425D]"
            : "bg-[#E5E5E5] hover:bg-[#39425d7c]"
        }`}
      ></button>
    );
}


function TestimonyCard({ testimony, activeTestimony, step }) {
  let status =
    step === activeTestimony
      ? "active"
      : activeTestimony + 1 != 4 &&
        step > activeTestimony &&
        step - activeTestimony == 1
      ? "inactive"
      : activeTestimony + 1 == 4 && step == 1
      ? "inactive"
      : "complete";

  return (
    <div className="absolute">
      <motion.article
        animate={status}
        variants={{
          active: {
            scale: 1,
            transition: { delay: 0, duration: 0.3 },
            opacity: 1,
          },
          inactive: {
            scale: 1,
            transition: { delay: 0, duration: 0.3 },
            opacity: 1,
            zIndex: -40,
            y: "70px",
            x: "40px",
          },
          complete: {
            opacity: 0,
          },
        }}
        className="relative p-4"
      >
        <img
          src={testimony.image}
          className="absolute top-0 -left-2"
          alt={testimony.name}
        />
        <div
          className={`bg-white py-7 px-6 pt-[4rem] rounded-[10px] 
          ${status == "active" && "shadow-testimonial"} 
          ${status == "inactive" && "border-2 hidden md:flex border-[#F7F7F7]"} 
          flex flex-col gap-8`}
        >
          <p className="text-lightGray">{testimony.body}</p>
          <div className="flex flex-col gap-2  w-fit">
            <RoughNotation type="underline" show={status == "active"}>
              <h5 className="font-semibold text-lightGray">{testimony.name}</h5>
            </RoughNotation>
            <p className="text-sm text-lightGray">{testimony.position}</p>
          </div>
        </div>
      </motion.article>
    </div>
  );
}

export default Testimonial;
