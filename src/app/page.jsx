import Image from "next/image";
import WebDefaultBgColor from "./components/webDefaultColor/page";
import MyProjects from "./components/myProjects/page";

export default function Home() {
  return (
    <main>
      {/* hero */}
      <div>
        <div>
          <div className="text-center uppercase mt-[8rem] ">
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
      <MyProjects/>
    </main>
  );
}
