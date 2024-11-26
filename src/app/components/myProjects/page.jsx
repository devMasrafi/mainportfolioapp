import Image from "next/image";
import React from "react";

const MyProjects = () => {
  return (
    <main className="container mx-auto">
      <section>
        <div>
          <div className="">
            <div className="">
              <h2 className="lg:text-3xl capitalize font-bold ">my projects</h2>
              <h3 className=" lg:mt-3 lg:py-3 cursor-pointer">view more</h3>
            </div>

            {/* 1st */}
            <div className="">
              <div className="">
                <div className="">
                  <img
                    className=""
                    src="/images/projectImages/project-3-Banner.jpg"
                    alt="banner image"
                  />
                </div>
                <div className="">
                  <h2>project name: Travel Des</h2>
                  <p>making: NextJS tailwindCSS Framer-Motion ShadCn </p>
                </div>
              </div>
            </div>
            {/* 2nd */}
            <div>
              <div className="">
                <div>
                  <img
                    className=""
                    src="/images/projectImages/project-2-Banner.jpg"
                    alt="banner image"
                  />
                </div>
                <div className="">
                  <h2>project name: Meddical</h2>
                  <p>making: ReactJs tailwindCSS Framer-Motion </p>
                </div>
              </div>
            </div>
            {/* 3rd */}
            <div className=" ">
              <div className=" ">
                <div>
                  <img
                    className=" "
                    src="/images/projectImages/project-1-Banner.jpg"
                    alt="banner image"
                  />
                </div>
                <div className="">
                  <h2>project name: finsweet</h2>
                  <p>making: HTML tailwindCSS </p>
                </div>
              </div>
              {/* 2nd */}
            </div>


            {/* 4th */}
            <div className="">
              <div className="">
                <div className="">
                  <img
                    className=" "
                    src="/images/projectImages/project-4-banner.jpg"
                    alt="banner image"
                  />
                </div>
                <div className="">
                  <h2>project name: product card</h2>
                  <p>making: HTML CSS </p>
                </div>
              </div>
            </div>
            {/* 5th */}
            <div className="">
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
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MyProjects;
