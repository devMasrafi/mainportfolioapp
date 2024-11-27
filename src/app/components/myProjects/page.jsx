"use client";

import { useState } from "react";

const VerticalSlider = () => {
  const sliderDetails = [
    {
      image: "/images/projectImages/project-1-Banner.jpg",
      projectName: "Project 1",
    },
    {
      image: "/images/projectImages/project-2-Banner.jpg",
      projectName: "Project 2",
    },
    {
      image: "/images/projectImages/project-3-Banner.jpg",
      projectName: "Project 3",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < sliderDetails.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : sliderDetails.length - 1
    );
  };

  return (
    <main className=" h-screen bg-darkBlue text-mainWhite overflow-hidden">
      <section className="container mx-auto py-[3rem] ">
        {sliderDetails.map((item, index) => {
          return (
            <div key={index} className="lg:my-[8rem] ">
              <img src={item.image} alt={item.projectName} />
            </div>
          );
        })}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4">
        <button
          className="px-4 py-2 bg-white text-black rounded-md"
          onClick={handlePrev}
        >
          Up
        </button>
        <button
          className="px-4 py-2 bg-white text-black rounded-md"
          onClick={handleNext}
        >
          Down
        </button>
      </div>
      </section>
    </main>
  );
};

export default VerticalSlider;
