import React from 'react'
import DestinationCard from '../cards/DestinationCard';
import Heading from '../Heading';
import {motion} from "framer-motion"

const DESTINATIONS_ARR = [
    {
        location: "Rome, Italy",
        price: "$5,42k",
        days: "10 Days Trip",
        image: "/assets/destination/01.png"
    },
    {
        location: "London, UK",
        price: "$4.2k",
        days: "12 Days Trip",
        image: "/assets/destination/02.png"
    },
    {
        location: "Full Europe",
        price: "$15k",
        days: "28 Days Trip",
        image: "/assets/destination/03.png"
    },
]

const TopSelling = () => {
  return (
    <section>
      <div className="max-w-6xl mx-auto p-4">
        <Heading title={"Top Destinations"} subtitle={"Top Selling"} />

        <div className="relative mt-[40px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="absolute -right-4 -bottom-1 invisible md:visible">
            <img src="/assets/spring.svg" alt="spring" />
          </div>
          {DESTINATIONS_ARR.map((destination, index) => (
            <DestinationCard destination={destination} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}



function SpringIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="98"
      height="254"
      fill="none"
      viewBox="0 0 98 254"
      {...props}
    >
      <motion.path
        
        stroke="#000000"
        d="M8.958 14.234C15.985 5.718 33.753-7.376 48.61 8.38c14.857 15.756-5.186 45.244-17.065 58.018-5.855 3.549-18.069 9.581-20.076 5.323-2.51-5.323-4.016-16.5 16.563-26.081 13.217-5.678 41.76-11.71 50.191 9.58 3.848 9.227 4.518 30.66-23.59 42.583l-35.134 15.436m0 0c-13.384.536-32.624-5.846-2.51-35.663 9.537-4.613 32.625-13.945 48.687-14.371 9.201 1.951 26.902 11.603 24.091 34.598.335 4.613-5.922 16.074-33.628 25.017-6.357 1.419-20.578 4.364-26.601 4.79l-21.583 3.194 11.544-17.565zm0 0c8.783-2.484 29.51-6.707 42.161-3.726 15.814 3.726 22.084.532 34.632 21.291 2.175 10.645.603 32.469-23.088 34.598-23.69 2.129-38.982-1.952-43.666-4.258v-19.695m0 0c17.232 1.597 54.207.426 64.245-17.033 4.852-12.419 5.22-37.791-32.123-39.92-9.034.355-28.308 1.49-33.126 3.193l1.004 37.792c17.567 1.597 54.508 9.155 61.735 26.614 3.848 10.113 5.12 31.404-20.578 35.662-9.537.355-31.119-.958-41.157-9.048m0-37.26v37.26m0-37.26c10.874 2.662 34.833 10.007 43.666 18.098 10.708 8.871 26.401 30.872 3.514 47.904-7.195 2.662-26.3 4.791-45.173-7.984m-2.007-20.758l2.007 20.758m-2.007-20.758c12.046 8.516 36.64 29.168 38.647 43.646.837 8.871-1.405 27.359-17.065 30.34-4.015.71-13.953.639-21.582-5.323l2.007-47.905"
      ></motion.path>
    </svg>
  );
}

export default TopSelling
