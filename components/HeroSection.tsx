"use client"; // this is a client component
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          {/* profile pic */}
          <Image
            src="/pic.jpg"
            alt=""
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          {/* about me text */}
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">
            Hi, I&#39;m Derick!
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m an aspiring{" "}
            <span className="font-semibold text-teal-600">
              Software Engineer{" "}
            </span>
            currently training as a Cadet Engineer under GCash.
          </p>
          {/* scroll to about section */}
          <div>
            <div>
              <Link
                to="about"
                className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                About Me
              </Link>
              {/* scroll to projects */}
              <Link
                to="projects"
                className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700 ml-4"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* go to About Section */}
      {/* <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div> */}
    </section>
  );
};

export default HeroSection;
