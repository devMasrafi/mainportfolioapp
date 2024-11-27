import Image from "next/image";
import React from "react";

const MyProjects = () => {
  return (
    <main className="container mx-auto">
      <section className="lg:mt-[30rem] lg:mb-[29rem] ">
        <div>
          <div className="lg:flex lg:flex-wrap lg:gap-x-24 lg:gap-y-14 justify-center ">
            <div className="lg:w-[35rem] ">
              <h2 className="lg:text-5xl capitalize font-bold ">my projects</h2>
              <button className=" lg:mt-3 lg:py-3 cursor-pointer">
                view more
              </button>
            </div>

            {/* 1st */}
            <div className="relative lg:h-[24rem] lg:w-[23rem] ">
              <div className="lg:top-[-9rem] bg-darkBlue/70 text-skyblue/80 lg:px-4 lg:py-3 lg:rounded-md">
                <div className="  lg:h-[24rem] lg:w-[21rem]">
                  <div className="lg:h-[70%]">
                    <img
                      className="lg:h-full lg:rounded-md object-cover"
                      src="/images/projectImages/project-2-Banner.jpg"
                      alt="banner image"
                    />
                  </div>
                  <div className="capitalize lg:mt-3 ">
                    <h2>project name: Travel Des</h2>
                    <p>making: NextJS tailwindCSS Framer-Motion ShadCn </p>
                  </div>
                </div>
              </div>
            </div>
            {/* 2nd */}
            <div className="relative lg:h-[36rem] lg:w-[39rem] ">
              <div className="lg:top-[-6rem] lg:px-4 lg:py-3 bg-darkBlue/70 text-skyblue/80 lg:rounded-xl">
                <div className="lg:w-[37rem] lg:h-[36rem] ">
                  <div className="lg:h-[80%] ">
                    <img
                      className="lg:h-full object-cover lg:rounded-md "
                      src="/images/projectImages/project-3-Banner.jpg"
                      alt="banner image"
                    />
                  </div>
                  <div className=" capitalize lg:mt-4">
                    <h2>project name: Meddical</h2>
                    <p>making: ReactJs tailwindCSS Framer-Motion </p>
                  </div>
                </div>
              </div>
            </div>
            {/* 3rd */}
            <div className="relative lg:w-[25rem] lg:h-[29rem]">
              <div className=" right-[-14rem] top-0 lg:px-4  text-skyblue/80 ">
                <div className="lg:w-[25rem] lg:h-[29rem]  bg-darkBlue/70 lg:py-3 lg:px-5 lg:rounded-lg">
                  <div className="lg:h-[80%] ">
                    <img
                      className=" lg:h-full object-cover lg:rounded-md "
                      src="/images/projectImages/project-1-Banner.jpg"
                      alt="banner image"
                    />
                  </div>
                  <div className=" lg:mt-4 capitalize ">
                    <h2>project name: finsweet</h2>
                    <p>making: HTML tailwindCSS </p>
                  </div>
                </div>
                {/* 2nd */}
              </div>
            </div>
            {/* 4th */}
            <div className="lg:px-4 lg:py-4 bg-darkBlue/70 text-skyblue/70 rounded-xl ">
              <div className="lg:w-[36rem] lg:h-[26rem] ">
                <div className="lg:h-[80%] ">
                  <img
                    className="lg:h-full object-cover lg:rounded-md "
                    src="/images/projectImages/project-mainBanner.jpg"
                    alt="banner image"
                  />
                </div>
                <div className="capitalize lg:mt-5 ">
                  <h2>project name: product card</h2>
                  <p>making: HTML CSS </p>
                </div>
              </div>
            </div>

            {/* 5th */}
            {/* <div className="">
              <div className=" ">
                <div>
                  <img
                    className=" "
                    src="/images/projectImages/project-mainBanner.jpg"
                    alt="banner image"
                  />
                </div>
                <div className="">
                  <h2>project name: finsweet</h2>
                  <p>making: HTML tailwindCSS </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </main>
  );
};

export default MyProjects;
