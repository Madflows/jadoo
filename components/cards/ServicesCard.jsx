import React, { useEffect } from 'react'



const ServicesCard = ({service}) => {
  return (
    <article className="relative group card">
      <div className="w-[100px] absolute bottom-[50px] left-[50px] group-hover:-bottom-4 group-hover:-left-4 transition-all h-[100px] rounded-[10px] rounded-tl-[30px] rounded-bl-none bg-jellyBean"></div>

      <div className="flex relative bg-white shadow-sm min-h-[350px] group-hover:shadow-lg py-6 px-4 rounded-[36px] flex-col items-center gap-4">
        <div className="w-[150px] h-[150px] grid place-items-center">
          <img
            width={"70"}
            height={"70"}
            src={service.icon}
            alt={service.title}
          />
        </div>
        <span className="font-g-sans font-semibold text-primary text-xl">
          {service.title}
        </span>
        <p className="font-medium text-center text-normal text-[#5E6282]">
          {service.description}
        </p>
      </div>
    </article>
  );
}

export default ServicesCard
