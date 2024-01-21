"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Typography,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
const navListMenuItems = [
  {
    title: "Click me",
    href: "/clickme",
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems.map(({ title, href }) => (
    <Link href={href}>
      <MenuItem>
        <Typography variant="h6" color="blue-gray" className="mb-1">
          {title}
        </Typography>
      </MenuItem>
    </Link>
  ));

  return (
    <React.Fragment>
      <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography as="a" href="#" variant="small" className="font-normal">
            <MenuItem className="hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full">
              <div className="h-[18px] w-[18px] text-blue-gray-500" />
              Pages
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid">
          <ul className="col-span-4 flex w-full flex-col gap-1">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <MenuItem className="flex items-center gap-2 font-medium text-blue-gray-900 lg:hidden">
        <div className="h-[18px] w-[18px] text-blue-gray-500" /> Pages
      </MenuItem>
      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
        {renderItems}
      </ul>
    </React.Fragment>
  );
}

const Navbar = () => {
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
            <Link href="/service">
              <li className="ml-10 uppercase hover:border-b text-xml">
                <NavListMenu />
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
