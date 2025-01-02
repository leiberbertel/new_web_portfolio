"use client";
import React, { useState } from "react";
import Contact from "./Contact";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useValueStore } from "@/store/valueStore";

function NavBar() {
  const { contactState, setContactState } = useValueStore((state) => ({
    contactState: state.contactState,
    setContactState: state.setContactState,
  }));

  const pathname = usePathname();
  const [selectedSection] = useState<string>(pathname);

  const links = [
    {
      label: "About",
      link: true,
      path: "/about",
    },
    {
      label: "Projects",
      link: false,
      path: "/projects",
    },
    {
      label: "Contact",
      link: false,
      path: { pathname },
      action: true,
    },
  ];

  return (
    <header className="w-[100%] m-auto">
      <div className="hidden md:flex justify-between">
        <div className="flex fixed top-8 left-1/2 text-xl transform -translate-x-1/2 bg-opacity-70 gap-3 h-16 items-center p-2 rounded-[50px] transition-all duration-[500ms] bg-black">
          {links.map(({ label, path, action }) => {
            if (action) {
              return (
                <button
                  key={label}
                  onClick={() => setContactState(true)}
                  className="list-none text-white font-bold p-3 px-10"
                >
                  {label}
                </button>
              );
            } else {
              return (
                <Link
                  key={label}
                  href={path}
                  className={
                    path === selectedSection
                      ? "list-none text-white font-bold bg-[#505050] p-3 px-10 rounded-[50px]"
                      : "list-none text-white font-bold p-3 px-10"
                  }
                >
                  {label}
                </Link>
              );
            }
          })}
        </div>
      </div>
      <div className="md:hidden flex justify-between">
        <div className="flex fixed top-2 justify-center transform -translate-x-1/2 bg-opacity-70 h-16 items-center p-2 rounded-[50px] transition-all duration-[500ms] bg-black">
          {links.map(({ label, path, action }) => {
            if (action) {
              return (
                <button
                  key={label}
                  onClick={() => setContactState(true)}
                  className="list-none text-white font-bold py-2 px-3"
                >
                  {label}
                </button>
              );
            } else {
              return (
                <Link
                  key={label}
                  href={path}
                  className={
                    path === selectedSection
                      ? "list-none text-white font-bold bg-[#505050] py-2 px-3 rounded-[50px]"
                      : "list-none text-white font-bold py-2 px-3"
                  }
                >
                  {label}
                </Link>
              );
            }
          })}
        </div>
      </div>
      <div
        style={{ transition: "all 0.5s" }}
        className={
          contactState
            ? "fixed z-10 top-0 left-0 flex justify-center px-4 items-center h-screen w-screen bg-black bg-opacity-70"
            : "hidden"
        }
      >
        <Contact />
      </div>
    </header>
  );
}

export default NavBar;
