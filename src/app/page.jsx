import Image from "next/image";
import WebDefaultBgColor from "./components/webDefaultColor/page";
import MyProjects from "./components/myProjects/page";
import AboutMe from "./components/aboutMe/page";

export default function Home() {
  return (
    <main>
      {/* hero */}
      <div>
        <div>
          <div className="text-center uppercase lg:mt-[15rem] ">
            <h2 className=" text-6xl font-bold italic ">your imagination</h2>
            <p className="relative text-lg underline underline-offset-[0.5rem] my-3">
              lets give your imagination a way to make reality
            </p>
            <h2 className=" text-6xl font-bold italic ">my creation</h2>
          </div>
        </div>
      </div>

      {/* skill motion bar */}

    {/* projects */}


      {/* about me */}
      <div className="mt-[40rem]">
        <AboutMe />
      </div>

      <div>
        something else
      </div>

      {/* projects */}
      {/* <MyProjects/> */}
    </main>
  );
}
