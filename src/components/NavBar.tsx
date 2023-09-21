import Link from "next/link";
import React from "react";
import HireButton from "./HireButton";
import { ModeToggle } from "./ThemeToggle";

type Props = {};

function NavBar({ }: Props) {
  return (
    <header className="w-full mx-auto py-4 border-b-[2px]" id="to_top">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <li className="flex justify-center items-center gap-4">
          <Link className="font-black text-2xl uppercase" href={'/'}>TOPU</Link>
          <ModeToggle />
        </li>
        <li className="flex justify-center items-center gap-8">
          <Link href={'/'}>Home</Link>
          <Link href={'/'}>Contact</Link>
          <Link href={'/template'}>Template</Link>
          <Link href={'/'}>About</Link>
          <HireButton />
        </li>
      </nav>
    </header>
  );
}

export default NavBar;
