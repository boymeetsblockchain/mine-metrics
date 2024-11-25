"use client";
import { prata } from "@/font";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Grid, LayoutGrid, X } from "lucide-react";
import { useState } from "react";
import { useSession } from "next-auth/react";
const navbarArray = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Services",
    link: "#services",
  },
  {
    name: "Contact us",
    link: "#contact",
  },
];

export const Navbar = () => {
  const [mobile, setMobile] = useState<boolean>(false);
  const { data } = useSession();
  return (
    <nav className="mx-auto flex max-w-7xl items-center z-10 sticky  justify-between py-4 px-6 lg:px-8">
      {/* Logo */}
      <div className="flex items-center">
        {/* <Image src={"/logo.jpg"} height={40} width={40} alt="logo" /> */}
        <h1
          className={cn(
            " text-lg md:text-2xl  font-bold text-black",
            prata.className
          )}
        >
          Mine Metrics
        </h1>
      </div>

      {/* Navbar Links */}
      <div className="hidden md:flex space-x-8 text-base font-medium text-gray-700">
        {navbarArray.map((item) => (
          <p
            key={item.name}
            className="hover:text-white px-2 py-1.5 rounded-lg hover:bg-blue-500 transition-colors"
          >
            <Link href={item.link}>{item.name}</Link>
          </p>
        ))}
      </div>

      {/* Login and Sign-up Buttons */}
      {data ? (
        <Button
          asChild
          className="border hidden md:flex bg-blue-500 text-white border-gray-500  hover:bg-gray-700 hover:text-white transition-colors"
        >
          <Link href={"/dashboard"}>DashBoard</Link>
        </Button>
      ) : (
        <div className="  hidden md:flex space-x-4">
          <Button
            asChild
            variant={"outline"}
            className="border bg-blue-500 text-white border-gray-500  hover:bg-gray-700 hover:text-white transition-colors"
          >
            <Link href={"/login"}> Login</Link>
          </Button>
          <Button
            asChild
            variant={"ghost"}
            className="border  bg-blue-500 text-white border-gray-500  hover:bg-gray-700 hover:text-white transition-colors"
          >
            <Link href={"/register"}> Sign Up</Link>
          </Button>
        </div>
      )}

      {/* Mobile Hamburger Button */}
      <div className="flex md:hidden">
        {mobile ? (
          <X
            className="cursor-pointer "
            onClick={() => setMobile((prev) => !prev)}
          />
        ) : (
          <LayoutGrid
            className="cursor-pointer"
            onClick={() => setMobile((prev) => !prev)}
          />
        )}
      </div>

      {/* Mobile Menu */}
      {mobile && (
        <div className="absolute top-16 left-0 w-full bg-white  z-10">
          <ul className="space-y-4 py-6 px-4 text-center">
            {navbarArray.map((item) => (
              <li
                key={item.name}
                className="hover:text-white p-1.5 text-sm  rounded-lg hover:bg-blue-500 transition-colors"
                onClick={() => setMobile(false)} // Close the mobile menu on click
              >
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
            {data ? (
              <Button
                asChild
                className="border border-gray-500 bg-blue-500 text-white hover:bg-gray-700 hover:text-white transition-colors"
              >
                <Link href={"/dashboard"}>DashBoard</Link>
              </Button>
            ) : (
              <div className="flex flex-col items-center space-y-4 mt-4">
                <Button
                  asChild
                  variant={"outline"}
                  className="border border-gray-500 bg-blue-500 text-white hover:bg-gray-700 hover:text-white transition-colors"
                >
                  <Link href={"/login"}> Login</Link>
                </Button>
                <Button
                  asChild
                  variant={"ghost"}
                  className="border border-gray-500 bg-blue-500 text-white hover:bg-gray-700 hover:text-white transition-colors"
                >
                  <Link href={"/register"}> Sign Up</Link>
                </Button>
              </div>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};
