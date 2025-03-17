"use client";
import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    const windowListener = () => {
      window.scrollY > 80 ? setToggle(true) : setToggle(false);
    };

    window.addEventListener("scroll", windowListener);

    return () => {
      window.removeEventListener("scroll", windowListener);
    };
  }, []);

  return (
    <div
      className={`w-full flex justify-between items-center h-[100px] px-26 fixed bg-white z-10 top-0 transition ${
        toggle && "shadow-lg"
      }`}
    >
      <div className="flex gap-10">
        <p className="text-md hover:cursor-pointer">Projects</p>
        <p className="text-md hover:cursor-pointer">Services</p>
      </div>
      <p className="text-[20px] font-semibold text-[#B8E900] ms-[80px] hover:cursor-pointer">
        COCONOID
      </p>
      <div className="flex items-center gap-10">
        <p className="text-md underline decoration-[#B8E900] decoration-4 underline-offset-6 cursor-pointer">
          Home
        </p>
        <div className="flex items-center gap-2 px-4 py-1 border-2 rounded-[30px] border-[#B8E900] transition-all hover:px-6 gap-3 rounded-[40px] cursor-pointer">
          <p className="text-md">Contact Us</p>
          <Icon icon="cil:arrow-right" width={20} />
        </div>
      </div>
    </div>
  );
}
