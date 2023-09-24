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
      className="px-3 sm:px-0 w-full mx-auto py-4 border-b-[2px] sticky top-0 backdrop-blur-3xl z-50"
      id="to_top"
    >
      <nav className="relative max-w-7xl mx-auto flex justify-between items-center">
        <li className="flex justify-center items-center gap-4">
          <Link className="font-black text-2xl uppercase" href={"/"}>
            TOPU
          </Link>
          <ModeToggle />

        </li>

        <li className="hidden sm:flex justify-center items-center gap-8">
          <Link href={"/"}>Home</Link>
          <Link href={"/template"}>Template</Link>
          <HireNowButton />
        </li>

        <div className="sm:hidden">
          <Button onClick={() => setIsOpen(true)} variant="outline">
            Menu
          </Button>
        </div>

        <div
          className={`${!isOpen ? "translate-x-[150%]" : ""
            } flex flex-col absolute h-[100vh] w-[100vw] left-[-0.75rem] top-[-1rem] mx-auto justify-start pt-16 bg-white dark:bg-black z-50`}
        >
          <div className="relative gap-8 flex flex-col items-center justify-center ">
            <Button
              className="absolute z-[999] bg-white dark:bg-black dark:text-white text-black  font-semibold top-[-20%] right-[10%]"
              onClick={() => setIsOpen(false)}
              variant="outline"
            >
              Close
            </Button>

            <h3 className="font-bold text-4xl">Go To</h3>
            <Button
              onClick={() => setIsOpen(false)}
              variant={"ghost"}
              className="p-0 m-0"
              type="submit"
            >
              <Link href={"/"}>Home </Link>
            </Button>

            <Link
              onClick={() => setIsOpen(false)}
              className="flex justify-center items-center"
              href={"/template"}
            >
              Template
              <ArrowSVG />
            </Link>

            <HireNowButton onClick={() => setIsOpen(true)} />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
