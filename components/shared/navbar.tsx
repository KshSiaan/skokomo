"use client";
import Image from "next/image";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Navbar() {
  return (
    <nav className="h-[128px] w-dvw bg-transparent px-[4%] gap-[10%] flex flex-row justify-center items-center">
      <div className="w-[200px] h-full py-3">
        <Image
          src="/logo.webp"
          height={520}
          width={357.72}
          alt="logo"
          className="h-full object-contain"
        />
      </div>
      <div className="w-1/2 flex flex-row justify-around items-center gap-[10%] font-semibold text-xl">
        <AnchorLink href="#home" className="hover:underline">
          Home
        </AnchorLink>
        <AnchorLink href="#founders" className="hover:underline">
          Founders
        </AnchorLink>
        <AnchorLink href="#product" className="hover:underline">
          Product
        </AnchorLink>
        <AnchorLink href="#contact" className="hover:underline">
          Contact Us
        </AnchorLink>
      </div>
      <div className="w-[200px] h-full"></div>
    </nav>
  );
}
