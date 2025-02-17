import React from "react";
import Image from "next/image";

interface Founder {
  name: string;
  role: string[];
  image: string;
  description: string;
  career: string;
}

interface IntroData {
  founder: Founder;
}

interface IntroProps {
  data: IntroData;
}

export default function Intro({ data }: IntroProps) {
  return (
    <div className="">
      <div className="h-[400px]"></div>{" "}
      {/* This div seems unnecessary, consider removing it */}
      <div className="h-[400px] grid grid-cols-7 w-full bg-white text-black items-center">
        <div className="col-span-2 flex justify-center items-center relative">
          <div className="absolute -top-[400px] left-1/2 transform -translate-x-1/2">
            {" "}
            {/* Centering fix */}
            <Image
              src={data.founder.image}
              height={800}
              width={400}
              alt={data.founder.role.join(", ")}
              className="h-[400px] object-contain rounded-3xl"
            />
            <div className="text-center">
              <h3 className="text-3xl font-semibold">{data.founder.name}</h3>
              {data.founder.role.map((role, index) => (
                <h4 key={index} className="text-xl font-semibold">
                  {role}
                </h4>
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-5">
          <h4 className="text-lg p-4 pl-0 w-2/3 font-semibold">
            {/* Removed! and added pl-0 */}
            {data.founder.description}
          </h4>
          <p>{data.founder.career}</p>
        </div>
      </div>
    </div>
  );
}
