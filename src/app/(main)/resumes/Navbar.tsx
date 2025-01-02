"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { ThemeToggle } from "@/components/ThemeToggle";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";

function Navbar() {
  const { theme } = useTheme();

  return (
    <header className="body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href={"/"}
          className="flex title-font font-medium items-center mb-4 md:mb-0"
        >
          <Image
            src={"/assets/logo.png"}
            alt="logo"
            width={35}
            height={35}
            className="w-10 h-10"
          />
          <span className="ml-3 text-xl">Resume Builder</span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link href={"/"} className="mr-5">
            Home
          </Link>
          <Link href={"/"} className="mr-5">
            About
          </Link>
          <Link href={"/"} className="mr-5">
            Contact
          </Link>
          <Link href={"/"} className="mr-5">
            FAQs
          </Link>
        </nav>
        <div className="flex items-center gap-3 border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0">
          <ThemeToggle />
          <UserButton
            appearance={{
              baseTheme: theme === "dark" ? dark : undefined,
              elements: {
                avatarBox: {
                  width: 35,
                  height: 35,
                },
              },
            }}
          />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
