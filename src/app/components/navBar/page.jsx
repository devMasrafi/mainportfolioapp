"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [scrollChange, setScrollChange] = useState(false);

  useEffect(() => {
    const handelScroll = () => {
      setScrollChange(window.scrollY > 500);
    };

    window.addEventListener("scroll", handelScroll);

    return () => {
      window.removeEventListener("scroll", handelScroll);
    };
  });

  return (
    <nav
      className={`sticky top-0 z-50 py-6 transition-all duration-500 ease-in-out ${
        scrollChange ? "bg-gray-800 text-mainWhite " : ""
      } `}
    >
      <div>
        <div className="container mx-auto flex items-center justify-between">
          {/* logo */}
          <div className="w-[8rem]">
            {scrollChange ? (
              <Link href="/">
                <img src="/images/devMasrafiSkyBlue.svg" alt="logo" />
              </Link>
            ) : (
              <Link href="/">
                <img src="/images/devMasrafi.svg" alt="logo" />
              </Link>
            )}
          </div>
          {/* nav links */}
          <div className="flex gap-x-5 items-center">
            <ul className=" flex gap-x-6 capitalize text-xl">
              <li>
                <Link href="/works">works</Link>
              </li>
              <li>
                <Link href="blog">blog</Link>
              </li>
            </ul>
            <button className="capitalize text-lg text-darkBlue bg-skyblue py-2 px-6 rounded-3xl hover:bg-darkBlue transition-all duration-300 ease-in-out hover:text-skyblue ">
              lets talk
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
