import classNames from "classnames";
import React from "react";


const STEPS_ARR = [
  {
    title: "Choose Destination",
    icon: "/assets/icons/icon-destination.svg",
    color: "#F0BB1F",
  },
  {
    title: "Make Payment",
    icon: "/assets/icons/icon-payment.svg",
    color: "#F15A2B",
  },
  {
    title: "Reach Airport on Selected Date",
    icon: "/assets/icons/icon-airport.svg",
    color: "#006380",
  },
];

const BookingSteps = () => {
  return (
    <section className="py-10 p-4 md:p-0">
      <div className="max-w-6xl xl:max-w-8xl p-4 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex flex-col items-center lg:items-start gap-4">
          <p className="font-semibold text-lg text-center lg:text-left text-lightGray">
            Easy and Fast
          </p>
          <h2 className="text-center lg:text-left">
            Book Your Next Trip
            <br className="hidden md:block" />{" "}
            In 3 Easy Steps
          </h2>

          <div className="flex flex-col gap-8 items-start">
            {STEPS_ARR.map((step, index) => (
              <Step key={index} index={index} step={step} />
            ))}
          </div>
        </div>
        <div className="flex items-center justify-end">
          <img src="/assets/step-image-2.png" alt="Wahala" />
        </div>
      </div>
    </section>
  );
};



function Step({step, index}) {
    return (
      <article className="flex items-center gap-4 max-w-md">
        <div
          className={`min-w-[48px] min-h-[48px] flex items-center justify-center rounded-[13px] ${
            index == 0
              ? "bg-orange"
              : index == 1
              ? "bg-jellyBean"
              : "bg-[#006380]"
          }`}
        >
          <img width={"22"} height={"22"} src={step.icon} alt={step.title} />
        </div>
        <div className="text-lightGray flex flex-col items-start gap-2">
          <p className="font-bold text-[#5E6282] leading-[124.5%]">
            {step.title}
          </p>
          <p className="leading-[124.5%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
            tortor tempus.
          </p>
        </div>
      </article>
    );
}



export default BookingSteps;
