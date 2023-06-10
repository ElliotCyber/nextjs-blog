"use client";

import Link from "next/link";
import React from "react";
import Button from "./Button";
import { useState } from "react";
import Image from "next/image";
import DarModeToggle from "./DarModeToggle";
import { signIn, signOut, useSession } from "next-auth/react";

const links = [
  {
    id: 1,
    title: "home",
    path: "/",
  },
  {
    id: 2,
    title: "portfolio",
    path: "/portfolio",
  },
  {
    id: 3,
    title: "blog",
    path: "/blog",
  },
  {
    id: 4,
    title: "about",
    path: "/about",
  },
  {
    id: 5,
    title: "contact",
    path: "/contact",
  },
  {
    id: 1,
    title: "dashboard",
    path: "/dashboard",
  },
];
const Navbar = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const { data: session } = useSession();
  console.log(session);
  return (
    <nav className="justify-between flex w-full pt-3 h-[100px] items-center">
      <Link href="/" className="logo_text">
        Next Blog
      </Link>
      {/* Desktop Navigation */}
      <div className="sm:flex hidden items-center gap-4">
        <DarModeToggle />
        {links.map((link) => (
          <Link href={link.path} key={link.id} className="uppercase">
            {link.title}
          </Link>
        ))}
        <div className="sm:flex hidden items-center gap-4 relative">
          {session?.user && (
            <Image
              src={session?.user.image}
              width={37}
              height={37}
              className="rounded-full cursor-pointer"
              alt="profile"
              onClick={() => setToggleDropdown(!toggleDropdown)}
            />
          )}
          {toggleDropdown && (
            <div className="z-50 absolute right-0 top-full mt-3 w-20 p-5 rounded-lg bg-[#eee] min-w-[350px] flex flex-col gap-6 items-start shadow-2xl">
              <div className="flex items-center gap-1">
                <span>{session?.user.email}</span>
                <span className="text-gray-500 text-sm lowercase">
                  ({session?.user.name})
                </span>
              </div>
              <button className="red_btn w-full" onClick={signOut}>
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
        <div className="flex">
          <Image
            src={session?.user.image}
            width={37}
            height={37}
            className="rounded-full cursor-pointer"
            alt="profile"
            onClick={() => setToggleDropdown(!toggleDropdown)}
          />

          {toggleDropdown && (
            <div className="dropdown">
              {links.map((link) => (
                <Link
                  key={link.id}
                  href={link.path}
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(!toggleDropdown)}
                >
                  {link.title}
                </Link>
              ))}
              {session?.user ? (
                <Button
                  text="Sign Out"
                  url="#"
                  type="signout"
                  onClick={signOut}
                />
              ) : (
                <Button text="Sign In" url="#" type="signin" onClick={signIn} />
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
