import React from 'react'

const Heading = ({title, subtitle}) => {
  return (
    <div className="flex flex-col items-center py-8">
      <span className="text-[#5E6282] uppercase font-semibold text-lg ">
        {subtitle}
      </span>
      <h2 className="text-[#14183E] capitalize text-center">{title}</h2>
    </div>
  );
}

export default Heading
