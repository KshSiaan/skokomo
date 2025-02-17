import Image from "next/image";
import Link from "next/link";
import React from "react";

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
      <div className="w-[200px] h-full"></div>
    </nav>
  );
}
