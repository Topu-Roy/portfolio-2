"use client";

import Link from "next/link";
import React, { useState } from "react";
import { ModeToggle } from "./ThemeToggle";
import HireNowButton from "./HireNowButton";
import { Button } from "./ui/button";
import ArrowSVG from "../../public/icons/Arrow";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 mx-auto w-full border-b-[2px] px-3 py-4 backdrop-blur-3xl xl:px-0"
      id="to_top"
    >
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between">
        <li className="flex items-center justify-center gap-4">
          <Link className="text-2xl font-black uppercase" href={"/"}>
            TOPU
          </Link>
          <ModeToggle />
        </li>

        <li className="hidden items-center justify-center gap-8 sm:flex">
          <Link href={"/"}>Home</Link>
          <Link href={"/template"}>Template</Link>
          <HireNowButton />
        </li>

        <div className="sm:hidden">
          <Button onClick={() => setIsOpen(true)} variant="outline">
            Menu
          </Button>
        </div>


        {/* Mobile slider */}
        <div
          className={`${!isOpen ? "translate-x-[150%]" : ""
            } absolute transition-transform duration-200 left-[-0.75rem] top-[-1rem] z-[100] mx-auto flex h-[100vh] w-[100vw] flex-col justify-start bg-white px-3 py-4 dark:bg-black`}
        >
          <div className="w-full flex justify-end items-center">
            <Button
              className="bg-white font-semibold  text-black dark:bg-black dark:text-white"
              onClick={() => setIsOpen(false)}
              variant="outline"
            >
              Close
            </Button>
          </div>
          <div className="flex flex-col items-center justify-center gap-8 ">

            <h3 className="text-4xl font-bold">Go To</h3>
            <Button
              onClick={() => setIsOpen(false)}
              variant={"ghost"}
              type="submit"
            >
              <Link href={"/"}>Home </Link>
            </Button>

            <Button
              onClick={() => setIsOpen(false)}
              variant={"ghost"}
              type="submit"
            >
              <Link
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center"
                href={"/template"}
              >
                Template
                <ArrowSVG />
              </Link>
            </Button>

            <HireNowButton onClick={() => setIsOpen(true)} />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
