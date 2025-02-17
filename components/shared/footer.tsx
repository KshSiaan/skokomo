import Image from "next/image";
import Link from "next/link";
import React from "react";

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
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/founders" className="hover:underline">
          Founders
        </Link>
        <Link href="/product" className="hover:underline">
          Product
        </Link>
        <Link href="/contact" className="hover:underline">
          Contact Us
        </Link>
      </div>
      <div className="pt-12 pb-24 flex flex-row justify-center items-center gap-8 font-semibold text-xl mx-auto">
        <span className="text-2xl font-light">Follow us on: </span>
        <Image
          src="/svg/fb.svg"
          height={64}
          width={64}
          alt="ico"
          className="h-[48px] w-[48px] object-contain"
        />
        <Image
          src="/svg/insta.svg"
          height={64}
          width={64}
          alt="ico"
          className="h-[48px] w-[48px] object-contain"
        />
        <Image
          src="/svg/x.svg"
          height={64}
          width={64}
          alt="ico"
          className="h-[48px] w-[48px] object-contain"
        />
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
