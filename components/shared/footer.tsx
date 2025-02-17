"use client";
import Image from "next/image";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Footer() {
  return (
    <footer>
      <div className="w-full flex flex-row justify-center items-center h-[124px] gap-4">
        <Image
          src="/logo.webp"
          height={520}
          width={357.72}
          alt="logo"
          className="h-[124px] w-[82px] object-contain"
        />
        <h1 className="text-3xl font-semibold">Gauntlet-42 LLC</h1>
      </div>
      <div className="w-1/2 flex flex-row justify-center items-center gap-[10%] font-semibold text-xl mx-auto pt-12">
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
      <div className="pt-12 pb-24 flex flex-row justify-center items-center gap-8 font-semibold text-xl mx-auto">
        <span className="text-2xl font-light">Follow us on: </span>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/svg/fb.svg"
            height={64}
            width={64}
            alt="Facebook"
            className="h-[48px] w-[48px] object-contain"
          />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/svg/insta.svg"
            height={64}
            width={64}
            alt="Instagram"
            className="h-[48px] w-[48px] object-contain"
          />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/svg/x.svg"
            height={64}
            width={64}
            alt="X (Twitter)"
            className="h-[48px] w-[48px] object-contain"
          />
        </a>
      </div>
      <p
        className="py-6 text-center font-light text-lg"
        style={{ boxShadow: "-0px 2px 5px #fff" }}
      >
        All copyright reserved © 2025 Gauntlet42 LLC
      </p>
    </footer>
  );
}
