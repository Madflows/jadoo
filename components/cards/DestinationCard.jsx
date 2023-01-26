import React from 'react'

const DestinationCard = ({destination}) => {
  return (
    <article className="w-full max-w-[314px] rounded-[24px] overflow-hidden mx-auto relative bg-white cursor-pointer hover:shadow-2xl shadow-md flex flex-col gap-4">
      <img src={destination.image} alt={destination.location} />
      <div className="bg-white p-4 pb-8 flex flex-col gap-4">
        <div className="flex w-full text-lightGray font-medium items-center justify-between">
          <p className="text-lg">{destination.location}</p>
          <p className="text-lg">{destination.price}</p>
        </div>
        <div className="flex items-center gap-2 text-lightGray font-medium">
          <img src="/assets/nav-icon.svg" alt="Days" />
          <p className="text-lg">{destination.days}</p>
        </div>
      </div>
    </article>
  );
}

export default DestinationCard
