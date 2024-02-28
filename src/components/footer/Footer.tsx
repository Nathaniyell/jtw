"use client";
import React, { useState, useEffect } from "react";
import { BsArrowBarUp } from "react-icons/bs";
import { SiFacebook, SiInstagram } from "react-icons/si";
import { VscMail } from "react-icons/vsc";
import Logo from "../../../public/images/JTWC_logo.png";
import Link from "next/link";
import Button from "../utils/Button";
import Image from "next/image";
import money from "../../../public/images/money.png";
import Space from "@/components/Space";
import { motion } from "framer-motion";

function Footer() {
  const [isMoveToVisble, setIsMoveToVisble] = useState(false);

  const year = new Date().getFullYear();

  const moveTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
    
  };

  const scrolling = () =>
    window.scrollY > 100 ? setIsMoveToVisble(true) : setIsMoveToVisble(false);

  useEffect(() => {
    window.onscroll = scrolling;

    return window.removeEventListener("scroll", scrolling);
  }, []);

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ delay: 2, duration: 1 }}
    >
      <section id="book-appointment" className="w-[90%] mx-auto">
        <div className="flex flex-col md:flex-row items-stretch justify-stretch">
          <div className="flex-1 w-fit xl:flex-initial">
            <Image
              src={money}
              alt="money"
              className="rounded-tl-xl rounded-tr-xl md:rounded-tl-xl md:rounded-bl-xl md:rounded-tr-none"
            />
          </div>
          <div className="flex-1 xl:w-3/5 rounded-br-xl rounded-bl-xl md:rounded-bl-none md:rounded-tr-xl md:rounded-br-xl bg-stone-800 grid grid-cols-1 place-items-center gap-10 lg:p-10 p-3">
            <h5 className="text-3xl md:text-4xl text-white text-opacity-80">
              You can&apos;t afford this or that? Join us today
            </h5>
            <div className="w-full self-end">
              <Button
                btnText="Book a Call"
                href="https://calendly.com/thaniessy/consultation-with-journey-to-wealth"
                className="py-4 justify-center mx-auto text-white md:w-3/5"
              />
            </div>
          </div>
        </div>
      </section>
      <Space />
      <div className="px-4 py-14 bg-stone-900 text-white shadow-transparent shadow-2xl">
        <footer className="grid grid-cols-1 gap-16 md:items-stretch md:gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="md:w-full md:p-2 ">
            <Link href="/" className="inline w-1/2 lg:w-1/4">
              <Image className="object-cover" src={Logo} alt="logo" />
            </Link>
          </div>
          <div className="lg:w-4/5 md:ml-[3.5rem] md:p-2">
            <h4 className="font-semibold text-[#E09706] text-3xl md:text-4xl">
              Quick Links
            </h4>
            <div className="text-white text-base mt-6 flex flex-col justify-between gap-6  capitalize">
              <Link href="/about" className="hover:underline hover:text-titles">
                <span>about</span>
              </Link>
              <Link
                href="/#services"
                className="hover:underline hover:text-titles"
              >
                <span>our services</span>
              </Link>
              <Link
                href="#book-appointment"
                className="hover:underline hover:text-titles"
              >
                <span>book an appointment</span>
              </Link>
            </div>
          </div>
          <div className="w-4/5 md:w-11/12 flex flex-col justify-between gap-4 lg:justify-self-end md:p-2">
            <h4 className="font-semibold text-[#E09706] text-3xl md:text-4xl capitalize ">
              connect with us
            </h4>
            <p>
              We are active on social media. <br /> Follow us on the platforms
              below to see our posts and be a part of our online family
            </p>
            <div className="text-[#E09706] text-2xl md:text-xl flex justify-between mt-4 md:mt-0">
              <div className="flex gap-5">
                <Link
                  className="p-4 lg:p-2 rounded-full grid place-items-center hover:scale-125 transition-all duration-200"
                  href="mailto:journeytowealth8@gmail.com"
                >
                  <VscMail />
                </Link>
                <Link
                  className="p-4 lg:p-2 rounded-full grid place-items-center hover:scale-125 transition-all duration-200"
                  href="https://www.instagram.com/journeytowealth.me/"
                  target="_blank"
                >
                  <SiInstagram />
                </Link>
                <Link
                  className="p-4 lg:p-2 rounded-full grid place-items-center hover:scale-125 transition-all duration-200"
                  href="/"
                >
                  <SiFacebook />
                </Link>
              </div>
            </div>
          </div>
          <button
            onClick={moveTop}
            className={`${
              isMoveToVisble ? "scale-100 opacity-100" : "scale-0 opacity-0"
            } fixed bottom-5 right-5 bg-titles bg-opacity-70 hover:bg-opacity-100 text-slate-700 p-2 rounded-full z-[10000] outline-0 transition-all duration-300`}
          >
            <BsArrowBarUp className="text-2xl" />
          </button>
        </footer>
        <div className="text-center mt-14 pt-10 text-white text-opacity-40 border-t border-t-white">
          <span>
            Copyright &copy; All rights reserved by Journey to Wealth {year}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default Footer;
