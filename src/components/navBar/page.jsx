"use client";

import { useEffect, useState } from "react";
import CommonBtn from "../commonButton/page";
import Link from "next/link";

const NavBar = () => {
  const [scrollValue, setScrollValue] = useState(false);

  useEffect(() => {
    const handelScroll = () => {
      setScrollValue(window.scrollY > 600);
    };

    window.addEventListener("scroll", handelScroll);

    return () => {
      window.removeEventListener("scroll", handelScroll);
    };
  });

  return (
    <main
      className={` sticky top-0 z-50 lg:py-3 transition-all duration-600 ease-in-out ${
        scrollValue ? "bg-gray-800" : "bg-transparent"
      }`}
    >
      <section className="container mx-auto flex justify-between">
        <div>
          {scrollValue ? (
            <Link href="/">
              <img src="/images/devMasrafiwhite.svg" alt="logo" />
            </Link>
          ) : (
            <Link href="/">
              <img src="/images/devMasrafi.svg" alt="logo" />
            </Link>
          )}
        </div>
        <div className="flex lg:gap-x-8 items-center">
          <ul className="flex lg:gap-x-6 lg:text-xl lg:uppercase  ">
            <li className={`lg:italic lg:font-semibold hover:lg:not-italic ${
              scrollValue ? 'text-white' : ''
            } `}>
              works
            </li>
            <li className={`lg:italic lg:font-semibold hover:lg:not-italic ${
              scrollValue ? 'text-white' : ''
            } `}>
              blog
            </li>
          </ul>
          <button
            className={`lg:py-2 lg:px-6 lg:rounded-lg lg:text-xl lg:uppercase lg:font-semibold hover:bg-darkBlue transition-all duration-300 ease-in-out hover:text-skyblue ${
              scrollValue ? "bg-skyblue text-darkBlue " : "text-darkBlue"
            }  `}
          >
            lets talk
          </button>
        </div>
      </section>
    </main>
  );
};

export default NavBar;
