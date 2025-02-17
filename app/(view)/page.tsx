import Intro from "@/components/shared/intro";
import TextTitle from "@/components/ui/text-title";
import { MailIcon, PhoneIcon, SendHorizonal } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Home() {
  const intr = {
    founder: {
      name: "Alexander Ali",
      role: ["Co-founder", "CTO"],
      image: "/images/ca.webp",
      description:
        "A technology company lives and dies by the abilities of its CTO. Gauntlet is no exception to this, and as such counts itself lucky to have Alex Ali at the technical helm. Alex has spent his career developing innovative software solutions to some of the most complex problems the defense sector has to offer.",
      career:
        "Alex has spent his career developing high-efficiency software across the spectrum of languages, frameworks, and underlying software objectives. During his tenure at Electric Boat, he has developed software to simulate, model, and test the function of submarine nuclear power plants as well as lead several teams of software developers in developing state-of-the-art testing suites for some of the most complex hardware involved in the function of US submarines. Alex has developed applications and products at every stage of the design pipeline, from initial concept to sunsetting, and has brought his acumen in product development to bear for Gauntlet.",
    },
  };
  const intrB = {
    founder: {
      name: "Samuel Kokomoor",
      role: ["Co-founder", "CFO"],
      image: "/images/cb.webp",
      description:
        "At the head of finance and operations, we find Sam Kokomoor. Sam began his career in defense developing hardware and algorithms to support the function of Americas submarine fleet, developing the technical and organizational know-how to take even the most complex task (such as the development of a nuclear submarine) and deliver quality results in time and under budget.",
      career:
        "Sam began his career at Electric Boat, working with a certain enterprising senior developer with whom he would go on to found Gauntlet-42. With three degrees in Electrical Engineering, Computer Engineering, and Computer Science, Sam spent his tenure at EB working across the spectrum of product development tasks; from purchasing and budgeting, to cybersecurity compliance and implementation, to product hardware design, to more traditional software design, Sam utilized all his acumen to create sophisticated product test apparatuses. Most recently Sam has worked for MIT Lincoln Labs, developing advanced sensor algorithms to increase the accuracy and fidelity of US RADAR technology. Sam brings a bit of everything to the table and is excited to leverage all his acumen for Gauntlet-42.",
    },
  };

  return (
    <main className="">
      <div id="hero" className="py-20 px-[16%]">
        <div
          className="rounded-3xl w-full h-[400px] bg-primary-foreground mx-auto bg-cover flex flex-col justify-center items-center"
          style={{ backgroundImage: "url('/images/header-bg.svg')" }}
        >
          <h1 className="text-4xl font-semibold">Gauntlet-42</h1>
          <h3 className="text-2xl">
            Intelligent Software Solutions for the Municipal World
          </h3>
        </div>
      </div>
      <div className="pb-20 grid grid-cols-2 gap-2 items-center px-[16%]">
        <div className="py-[10%]">
          <h2 className="text-4xl">What is Gauntlet-42 ?</h2>
          <p className="mt-4">
            At its fundament, Gauntlet- 42 is a software- development company.
            Gauntlet-42 seeks to provide low-cost software solutions to the
            municipal world. Simply put, we seek to bring the construction,
            surveying, property management, and development sectors into the
            21st century. We&apos;re here to put the tools of the digital world
            in your hands so you can work smarter, not harder. Look, it&apos;s
            no secret to anyone familiar with small-business, government
            contracting, municipal development, or property management, that the
            software tools of the industry are slow, clunky, unintuitive, and
            often make jobs far harder than they need to be.
          </p>
        </div>
        <div className="flex justify-end items-end">
          <div
            className="w-4/5 aspect-square rounded-3xl bg-center"
            style={{ backgroundImage: "url('/images/h-img1.webp')" }}
          ></div>
        </div>
      </div>
      <div id="founders" className="pb-24">
        <TextTitle>Meet Our Founders</TextTitle>
        <Intro data={intr} />
        <Intro data={intrB} />
      </div>
      <div id="product" className="py-20 px-[7%]">
        <TextTitle>Our Product</TextTitle>
        <div className="pt-20 pb-6 grid grid-cols-7 gap-12">
          <div className="col-span-4">
            <Image
              src="/images/prod-a.webp"
              height={1480}
              width={3500}
              alt="thumbnail"
              className="rounded-3xl"
            />
            <h2 className="text-4xl font-semibold mt-6">What is Spyglass ?</h2>
            <p className="py-4 text-lg">
              Simply put, Spyglass is a search engine. A search engine contoured
              specifically to the needs of of the surveyor, property manager,
              construction company, or any other business that requires
              municipal data aggregation. We take the tedious task of digging
              through municipal websites, embedded town GISes, and in the worst
              case, actual town record vaults, and we automate it for you. With
              one simple address entry, Spyglass finds the plat map, tax map,
              locus deed, abutting deeds, satellite imagery, topographical data
              and mre to come for a given property.
            </p>
            <p className="py-4 text-lg">
              Beyond data aggregation, Spyglass serves as your remote repository
              for any and all job documentation. Everything found for a given
              property is readily available to be viewed within spyglass. And if
              you decide there&apos;s anything left out, or more you like to
              add, Spyglass facilitates remote storage of any additional site
              documentation you may see fit to include in a packet. Spyglass is
              your one-stop shop Your filing cabinet, your personal researcher,
              your job packet. Anywhere you have a device and a wi-fi
              connection, Spyglass provides all the functionality you need so
              that you can focus on surveying, not paperwork.
            </p>
          </div>
          <div className="col-span-3">
            <Image
              src="/images/prod-b.webp"
              height={1602}
              width={1242}
              alt="thumbnail"
              className="rounded-3xl"
            />
          </div>
        </div>
        <div className="grid grid-cols-7 gap-12">
          <div className="col-span-4">
            <h2 className="text-2xl flex flex-row justify-start items-center gap-2">
              <Image
                src="/svg/target.svg"
                height={64}
                width={64}
                alt="target-ico"
                className="size-8"
              />{" "}
              Our Mission
            </h2>
            <p className="text-lg pt-4">
              Spyglass is a cutting-edge automated software tool that aims to
              revolutionize surveying and property management. By leveraging AI
              and machine learning, we gather and compile relevant public
              records, empowering our users to streamline their workflows, save
              valuable time, and optimize costs for every job. We are committed
              to putting the latest and greatest technology to work for you,
              striving for efficiency, accuracy, and success in all your
              endeavors.
            </p>
          </div>
          <div className="col-span-3">
            <h2 className="text-2xl flex flex-row justify-start items-center gap-2">
              <Image
                src="/svg/coverage.svg"
                height={64}
                width={64}
                alt="target-ico"
                className="size-8"
              />{" "}
              Our Coverage
            </h2>
            <p className="text-lg pt-4">
              Our services currently cover the towns highlighted in green on the
              map. We&apos;re committed to growing and improving, and we&apos;re
              actively working to expand our coverage. Have a town you want that
              we don’t have? Tell us! We prioritize our customers interests
              above all else.
            </p>
          </div>
        </div>
        <div id="contact" className="py-20 pt-[200px]">
          <TextTitle>Contact Us</TextTitle>

          <div className="w-full grid grid-cols-2 gap-6">
            <div
              className="w-full relative rounded-[32px]"
              style={{ boxShadow: "1px -1px 2px 0px #3b82f6" }}
            >
              <div
                className="absolute bg-blue-500 bottom-3 left-3 h-32 w-32 -z-10 translate-y-1/2 -translate-x-1/2 rounded-full"
                // style={{
                //   background:
                //     "radial-gradient(circle, rgba(59,130,246,0.3) 0%, rgba(59,130,246,0) 70%)",
                // }}
              />
              <div
                className=" w-full overflow-visible rounded-[32px] p-8 text-center backdrop-blur-lg"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                }}
              >
                {/* Blue glow effect */}

                {/* Content */}
                <div className="relative space-y-6 text-white w-full py-8">
                  <div className="space-y-1">
                    <h2 className="text-2xl font-semibold">Samuel Kokomoor</h2>
                    <p className="text-zinc-400">Co-founder/CFO</p>
                  </div>

                  <div className="space-y-4 w-2/3 mx-auto">
                    <div className="flex items-center gap-3">
                      <PhoneIcon className="h-5 w-5" />
                      <span>(860) 389-5347</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MailIcon className="h-5 w-5" />
                      <span>skokomoor@gauntlet42.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="w-full relative rounded-[32px] shadow-purple-500"
              style={{ boxShadow: "-1px -1px 2px 0px #a855f7" }}
            >
              <div
                className="absolute bg-purple-500 -top-12 -right-12 h-32 w-32 -z-10 rounded-full"

                // style={{
                //   background:
                //     "radial-gradient(circle, rgba(59,130,246,0.3) 0%, rgba(59,130,246,0) 70%)",
                // }}
              />
              <div
                className=" w-full overflow-visible rounded-[32px] p-8 text-center backdrop-blur-lg"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                }}
              >
                {/* Blue glow effect */}

                {/* Content */}
                <div className="relative space-y-6 text-white w-full py-8">
                  <div className="space-y-1">
                    <h2 className="text-2xl font-semibold">Alexander Ali</h2>
                    <p className="text-zinc-400">Co-founder/CTO</p>
                  </div>

                  <div className="space-y-4 w-2/3 mx-auto">
                    <div className="flex items-center gap-3">
                      <PhoneIcon className="h-5 w-5" />
                      <span>(401) 218-9286</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MailIcon className="h-5 w-5" />
                      <span>aali@gauntlet42.com </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="relative w-full h-[360px] bg-pink-50 rounded-3xl"></div> */}
          </div>
        </div>
        <div className="py-20 flex flex-row justify-between items-start gap-6">
          <div className="">
            <h2 className="text-5xl text-primary">
              Lets Talk About{" "}
              <span className="!text-blue-500">
                Your <br />
                Problem
              </span>
            </h2>
            <p className="text-2xl pt-4">
              Have questions on your mind about us ? <br /> Feel free to
              acknowledge us
            </p>
          </div>
          <div className="flex-grow">
            <textarea
              rows={4}
              className="w-full border-primary border rounded-xl py-6 px-8 text-lg bg-transparent"
              placeholder="type here.."
            />
            <div className="flex flex-row justify-end items-start pt-4">
              <button
                className="flex justify-center items-center gap-2 px-10 py-3 rounded-xl"
                style={{
                  boxShadow: "5px 5px 5px #444 inset, 5px 5px 10px #000",
                }}
              >
                Send <SendHorizonal />
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
