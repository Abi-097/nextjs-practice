"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavbar = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="relative w-full h-24 shadow-xl bg-white">
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
        <Link href="/">
          <Image
            src="/next.svg"
            alt="vercel"
            width="200"
            height="200"
            className="cursor-pointer"
            priority
          />
        </Link>
        <div className="hidden md:flex">
          <ul className="hidden md:flex">
            <Link href="/about">
              <li className="ml-10 uppercase hover:border-b text-xml">
                {" "}
                why us
              </li>
            </Link>
            <li className="relative">
              <button
                onClick={handleMenuToggle}
                className="ml-10 uppercase hover:border-b text-xml flex items-center cursor-pointer focus:outline-none"
              >
                Course
                {isMenuOpen ? (
                  <ChevronUpIcon className="w-4 h-4 ml-1" />
                ) : (
                  <ChevronDownIcon className="w-4 h-4 ml-1" />
                )}
              </button>
              {isMenuOpen && (
                <ul className="absolute left-0 mt-2 space-y-2 bg-white border border-gray-200 shadow-md rounded-md focus:outline-none">
                  <Link href="/course/maths">
                    <button>
                      <li className="uppercase block px-4 py-2 text-xml text-gray-700 hover:bg-gray-100 items-center cursor-pointer ">
                        Maths
                      </li>
                    </button>
                  </Link>
                  {/* Add more sub-menu items here as needed */}
                </ul>
              )}
            </li>
            <Link href="/contact">
              <li className="ml-10 uppercase hover:border-b text-xml">
                Contact
              </li>
            </Link>
            <Link href="/blog">
              <li className="ml-10 uppercase hover:border-b text-xml"> Blog</li>
            </Link>
            <Link href="/service">
              <li className="ml-10 uppercase hover:border-b text-xml">
                {" "}
                Services
              </li>
            </Link>
          </ul>
        </div>
        <div onClick={handleNavbar} className="md:hidden cursor-pointer pl-24 ">
          {menuOpen ? (
            <CloseRoundedIcon size={25} />
          ) : (
            <MenuRoundedIcon size={25} />
          )}
        </div>
      </div>
      <div
        className={
          menuOpen
            ? "relative top-25 w-[100%] md:hidden h-[auto] bg-[#ecf0f3] p-10 ease-in duration-500 overflow-hidden transition-height duration-500 ease-in-out"
            : "fixed left-0 top-[-100%] p-10 ease-in duration-500"
        }
      >
        <div className="flex-col py-2">
          <ul>
            <Link href="/about">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
              >
                Home
              </li>
            </Link>
            <li className="py-4 cursor-pointer">
              <div onClick={handleMenuToggle}>Course</div>
              {isMenuOpen && (
                <ul className="ml-4">
                  <Link href="/course/maths">
                    <li
                      className="py-2 cursor-pointer"
                      onClick={() => setMenuOpen(false)}
                    >
                      Maths
                    </li>
                  </Link>
                  {/* Add more sub-menu items for Course as needed */}
                </ul>
              )}
            </li>
            <Link href="/about">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
              >
                car
              </li>
            </Link>
            <Link href="/about">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
              >
                car
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
