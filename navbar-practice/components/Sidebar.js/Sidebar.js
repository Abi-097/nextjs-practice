"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdDashboard } from "react-icons/md";
import { IoMailSharp } from "react-icons/io5";
import { IoIosContact } from "react-icons/io";
import { RiContactsBook2Fill } from "react-icons/ri";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import { useRouter } from "next/router";
const sidebarItems = [
  {
    name: "Home",
    href: "/",
    icon: <MdDashboard />,
  },
  {
    name: "About",
    href: "/about",
    icon: <RiContactsBook2Fill />,
  },
  {
    name: "Mails",
    href: "/mail",
    icon: <IoMailSharp />,
  },
  {
    name: "Contact",
    href: "/contact",
    icon: <IoIosContact />,
  },
];
const Sidebar = () => {
  // const router = useRouter();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const CollapsedHandler = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="sidebar_wrapper">
      <button className="btn" onClick={CollapsedHandler}>
        {isCollapsed ? <IoIosArrowForward /> : <IoIosArrowBack />}
      </button>

      <aside className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
        <div className="sidebar_top">
          <Image
            src="/sidebar.png"
            width={80}
            height={80}
            alt="logo"
            className="sidebar_logo"
          />
          <p className="sidebar_logo-name">The Phoenix</p>
        </div>
        <ul className="sidebar_list">
          {sidebarItems.map((props, index) => (
            <li className="side_item  " key={index}>
              <Link className="sidebar_link" href={props.href}>
                <span className="sidebar_icon">{props.icon}</span>
                <span className="sidebar_name">{props.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
