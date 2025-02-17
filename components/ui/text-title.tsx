import React from "react";

export default function TextTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mb-12">
      <h2 className="text-center text-4xl font-semibold">{children}</h2>
      <div
        className="absolute -bottom-2 left-0 h-2/3 w-full -z-10 bg-contain bg-no-repeat bg-center"
        style={{ backgroundImage: "url('/images/underline.svg')" }}
      ></div>
    </div>
  );
}
