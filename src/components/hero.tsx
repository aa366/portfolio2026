"use client";
import React from "react";
// import data from "@/data/home.json";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import Link from "next/link";

const Personality = () => {
  const titles = ["abdelwahab Anwr ", "Software Developer", "Financial Engineer", "Professional Accountant", "Business Lover", "Data Analyst"];
  const ctitle = "I am";
  const para =
    "Hard working Front-End Developer🤩 with expertise in building responsive, user-friendly web interfaces. Skilled in modern front-end technologies 💥 like Sass, Next JS, Tailwind, and frameworks such as React, focuses on creating seamless and visually appealing digital experiences. With a strong eye for design and performance optimization, 💛 ensures that applications are both functional and engaging for users.";
  const btns = [
    {
      name: "resume",
      src: "https://drive.google.com/file/d/1F5HMtHwTvk-CZYvFoEjdXVEMtC8dq2w6/view?usp=drive_link",
    }
  ];

  const img = "/me.jfif";
  const wavingHand = "/imgs/waving-hand.gif";
  const welcomMSG = "hey";

  return (
    <section className=" grid grid-cols-1 md:grid-cols-2 gap-[5%] w-fit  p-[2%] pt-0">
      {/* photo image */}
      <div className=" relative  flex justify-center items-center">
        {/* frame */}
        <div className=" animate-spining absolute -z-1  rounded-[100%] w-[70%] max-w-100 md:w-full   top-[50%] left-[50%] -translate-1/2 p-3 aspect-square bg-linear-to-r from-primary to-secondary " />

        <Link
          href={img}
          target="_blanck"
          className=" w-[70%] max-w-100 md:w-full  p-3"
        >
          <Image
            src={img}
            alt=""
            width={100}
            height={100}
            className=" w-full h-full rounded-[100%] aspect-square object-cover "
            unoptimized
          />
        </Link>
      </div>

      {/* details */}
      <div className="w-full p-3">
        <div className="inset-0  backdrop-blur-lg md:p-4 p-2 bg-primary/30 rounded-xl   dark:bg-none ">
          <div className="flex items-center gap-1 justify-self-center sm:justify-self-start">
            <Image
              unoptimized={true}
              alt="waving-hand"
              width={30}
              height={30}
              src={wavingHand}
            />
            <p className="text-lg md:text-xl mt-2 md:mt-1.5">{welcomMSG}</p>
          </div>

          <h1 className="text-3xl font-bold text-center text-primary/70 flex gap-2 flex-col sm:flex-row">
            <span>{ctitle}</span>
            <Typewriter
              options={{
                strings: titles,
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 50,
                wrapperClassName:
                  "text-primary text-shadow-md text-shadow-primary-foreground  capitalize text-[1.6rem] font-bold sm:text-3xl md:text-3xl font-medium",
                cursorClassName:
                  "text-primary font-bold  capitalize text-[1.5rem] sm:text-3xl md:text-3xl",
              }}
            />
          </h1>

          <p className="text-lg   font-bold text-balance text-center sm:text-[1.3rem]">
            {para}
          </p>
        </div>

        <div className="flex justify-between my-[3%] font-medium">
          {btns.map((ele) => {
            return (
              <a
                className="p-1 relative cursor-pointer w-fit flex  capitalize"
                href={ele.src}
                target="_blanck"
                key={ele.src}
              >
                <div className="absolute inset-0 bg-primary  rounded-lg" />

                <div className="px-8 py-2  rounded-[6px]  relative group transition duration-200  hover:bg-transparent">
                  {ele.name}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Personality;
