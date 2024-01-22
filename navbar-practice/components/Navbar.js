"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Typography,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="fixed w-full h-24 shadow-xl bg-white">
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
        <div>
          <ul className="hidden sm:flex">
            <Link href="/about">
              <li className="ml-10 uppercase hover:border-b text-xml">
                {" "}
                why us
              </li>
            </Link>
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
            <Menu open={isMenuOpen} onClickOutside={() => setIsMenuOpen(false)}>
              <li
                onClick={handleMenuToggle}
                className="ml-10 uppercase hover:border-b text-xml flex items-center cursor-pointer"
              >
                Course
                {isMenuOpen ? (
                  <ChevronUpIcon className="w-4 h-4 ml-1" />
                ) : (
                  <ChevronDownIcon className="w-4 h-4 ml-1" />
                )}
              </li>

              <MenuList>
                <MenuItem>
                  <Link href="/maths">
                    <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Maths
                    </div>
                  </Link>
                </MenuItem>
                {/* Add more sub-items as needed */}
              </MenuList>
            </Menu>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
