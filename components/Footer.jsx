import Link from 'next/link';
import React from 'react'
import {FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";

const FOOTER_LINKS = [
  {
    title: "Company",
    contents: [
      {
        name: "About"
      },
      {
        name: "Careers"
      },
      {
        name: "Mobile"
      },
    ]
  },
  {
    title: "Contact",
    contents: [
      {
        name: "Help/FAQ"
      },
      {
        name: "Press"
      },
      {
        name: "Affiliates"
      },
    ]
  },
  {
    title: "More",
    contents: [
      {
        name: "Airline Fees"
      },
      {
        name: "Airline"
      },
      {
        name: "Low fare tips"
      },
    ]
  },
]

export  const Footer = () => {
  return (
    <footer className="py-10 p-4 pt-[5rem]">
      <div className="max-w-6xl xl:max-w-8xl mx-auto gap-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
        <div className="flex flex-col items-start gap-8">
          <h4 className="text-primary leading-none font-medium text-[44px]">
            Jadoo.
          </h4>
          <p className="max-w-[200px] text-lightGray text-[13px] font-medium">
            Book your trip in minute, get full Control for much longer.
          </p>
        </div>
        <div className="contents">
          {FOOTER_LINKS.map((item, index) => (
            <FooterList item={item} key={index} />
          ))}
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-8">
            <button className="w-[45px] h-[45px] rounded-full bg-white shadow-md flex items-center justify-center hover:bg-conicGradient hover:text-white transition-all">
              <FaFacebook className="text-lg" />
            </button>
            <button className="w-[45px] h-[45px] rounded-full bg-white shadow-md flex items-center justify-center hover:bg-conicGradient hover:text-white transition-all">
              <FaInstagram className="text-lg" />
            </button>
            <button className="w-[45px] h-[45px] rounded-full bg-white shadow-md flex items-center justify-center hover:bg-conicGradient hover:text-white transition-all">
              <FaTwitter className="text-lg" />
            </button>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-xl font-medium text-lightGray">
              Discover our app
            </p>
            <div className="flex gap-4 items-center">
              <Link href={"/"}>
                <img src="/assets/icons/icon-google.png" alt="Get on google" />
              </Link>
              <Link href={"/"}>
                <img src="/assets/icons/icon-play.png" alt="Get on google" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center flex-col gap-4 mt-12">
        <p className="text-lightGray text-sm font-medium">
          All rights reserved @jadoo.co
        </p>
        <p className="text-lightGray text-sm font-medium">
          Built by{" "}
          <Link
            href={"https://madflows.dev"}
            target="_blank"
            className="underline"
          >
            Madflows.
          </Link>
        </p>
      </div>
    </footer>
  );
}


function FooterList({item}) {
  return (
    <div className="flex flex-col items-start gap-8">
      <h4 className="font-bold text-[21px] text-[#080809]">{item.title}</h4>
      <div className="text-lightGray flex flex-col gap-4 items-start">
        {item.contents.map((link, index) => (
          <Link
            href={"/"}
            key={index}
            className="font-medium text-lg hover:opacity-80 transition"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
