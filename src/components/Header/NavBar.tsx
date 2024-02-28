"use client";

// import React from 'react';
import { VscMenu, VscClose } from "react-icons/vsc";
import { BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";
import { useGlobalContext } from "@/context";
import Logo from "../utils/Logo";
import { usePathname, useRouter } from "next/navigation";
import logo from "../../../public/images/JTWC_logo.png";
import Image from "next/image";
import { useEffect } from "react";

export default function NavBar() {
  const { isMenuClicked, isScrolled, setIsMenuClicked, setIsScrolled } = useGlobalContext();
  const pathName = usePathname();
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuClicked((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 24) {
        console.log(window.scrollY)
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
  
    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);
  
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolled]);
  

  return (
    <div className={`bg-white ${
      isScrolled && "fixed top-0 z-50 left-0 right-0 "
    }  z- lg:before:h-[90px] w-full fixed top-0 left-0  z-50 right-0 `}>
    <nav
      className={`text-stone-900 w-full flex items-center justify-between transition-all duration-200 bg-white md:w-[90%] mx-auto`}
    >
      <header className="container mx-auto p-4 md:px-2 lg:p-4 flex flex-col md:flex-row md:items-center md:justify-between w-full gap-4 md:gap-2 lg:gap-4">

        <div className="h-full w-full flex items-center justify-between md:justify-start md:w-1/2">
         
            <Link onClick={() => setIsMenuClicked(false)} href="/" className="inline w-1/3 sm:w-1/4 lg:w-1/4">
              <Image
                className="object-cover"
                src={logo}
                alt="logo"
              />
              {/* <Logo /> */}
            </Link>
       

          <button
            className="opacity-70 hover:opacity-100 text-2xl md:hidden"
            onClick={toggleMenu}
          >
            {isMenuClicked ? <VscClose /> : <VscMenu />}
          </button>
        </div>

        <aside
          className={`${
            !isMenuClicked
              ? "left-full md:left-0 -z-10 opacity-10 md:opacity-100 md:z-50"
              : "left-0 md:top-0 opacity-100"
          } bg-white md:bg-transparent fixed md:relative top-[70px] md:top-0 flex flex-col md:flex-row justify-between p-4 md:p-2 gap-8 sm:p-6 w-full md:text-[1rem] lg:gap-0 md:w-5/6 lg:w-[45%] text-lg transition-all duration-500 md:transition-none capitalize text-stone-900`}
        >
          <Link
            onClick={() => setIsMenuClicked(false)}
            href="/"
            className={`${
              pathName === "/" ? "text-titles" : "text-stone-900 hover:text-titles"
            } flex items-center gap-2 w-fit px-0 ${
              isMenuClicked && "border-b-stone-900 border-b w-full pb-4 pl-2"
            }`}
          >
            <span>home</span>
          </Link>
          <Link
            onClick={() => setIsMenuClicked(false)}
            href="/about"
            className={`${
              pathName === "/about"
                ? "text-titles"
                : "text-stone-900 hover:text-titles"
            } flex items-center gap-2 w-fit px-0 ${
              isMenuClicked && "border-b-stone-900 border-b w-full pb-4 pl-2"
            }`}
          >
            <span>about</span>
          </Link>

          <Link
            onClick={() => setIsMenuClicked(false)}
            href="/#services"
            className={`${
              pathName === "/#services"
                ? "text-titles"
                : "text-stone-900 hover:text-titles"
            } flex items-center gap-2 w-fit px-0 ${
              isMenuClicked && "border-b-stone-900 border-b w-full pb-4 pl-2"
            }`}
          >
            <span>services</span>
          </Link>

          {/* <Link
            onClick={() => setIsMenuClicked(false)}
            href="/#contact"
            className="hover:text-titles flex items-center gap-2 w-fit px-2 md:px-0"
          >
            <IoMdCall />
            <span>contact us</span>
          </Link> */}
          <Link
            onClick={() => setIsMenuClicked(false)}
            href="https://calendly.com/thaniessy/consultation-with-journey-to-wealth"
            target="_blank"
            className={`text-white bg-titles flex items-center justify-center gap-1 p-2 text-center w-full lg:w-2/5 transition-all duration-200 uppercase rounded-lg hover:text-titles hover:bg-white hover:border-titles`}
          >
            <span>book a call</span>
            <BsArrowUpRight className="self-start" />
          </Link>
        </aside>
      </header>
    </nav>
    </div>
  );
}
