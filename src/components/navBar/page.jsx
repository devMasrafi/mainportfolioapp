"use client";

import { useEffect, useState } from "react";
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
      <nav className="container mx-auto flex justify-between">
        {/* Logo Section */}
        <div>
          {scrollValue ? (
            <Link href="/">
              <img
                src="/images/devMasrafiwhite.svg"
                alt="Developer Masrafi logo - white"
              />
            </Link>
          ) : (
            <Link href="/">
              <img src="/images/devMasrafi.svg" alt="Developer Masrafi logo" />
            </Link>
          )}
        </div>

        {/* Links */}
        <div className="flex lg:gap-x-8 items-center font-RaleWayFont">
          <ul className="flex lg:gap-x-6 lg:text-xl ">
            <li
              className={`cursor-pointer lg:font-semibold ${
                scrollValue ? "text-white" : ""
              }`}
            >
              works
            </li>
            <li
              className={`cursor-pointer lg:font-semibold ${
                scrollValue ? "text-white" : ""
              }`}
            >
              blog
            </li>
          </ul>
          <button
            className={`lg:py-2 lg:px-6 lg:rounded-lg lg:text-xl lg:font-semibold hover:bg-darkBlue transition-all duration-300 ease-in-out hover:text-skyblue ${
              scrollValue ? "bg-skyblue text-darkBlue" : "text-darkBlue"
            }`}
          >
            lets talk
          </button>
        </div>
      </nav>
    </main>
  );
};

export default NavBar;
