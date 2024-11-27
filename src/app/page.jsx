'use client'

import Image from "next/image";
import WebDefaultBgColor from "./components/webDefaultColor/page";
import MyProjects from "./components/myProjects/page";
import AboutMe from "./components/aboutMe/page";
import FaqSection from "./components/faqSection/page";

export default function Home() {
  return (
    <main>
      {/* hero */}
      <div>
        <div>
          <div className="text-center uppercase md:mt-[12rem] lg:mt-[15rem] lg:mb-[10rem] ">
            <h2 className=" text-6xl font-bold italic ">
              web developer
            </h2>
            <p className="relative text-lg underline underline-offset-[0.5rem] my-3">
              lets give your imagination a way to make reality
            </p>
            <h2 className=" text-6xl font-bold italic ">and designer</h2>
          </div>
        </div>
      </div>

      {/* skill motion bar */}

      {/* projects */}
      {/* <div className="lg:h-screen lg:mt-[18rem] ">
        <MyProjects />
      </div> */}

      {/* about me */}
      <div className="">
        <AboutMe />
      </div>

      <div>
          <FaqSection/>
      </div>
    </main>
  );
}
