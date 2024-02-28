"use client";
import Services from "@/components/Services/Services";
import { motion } from "framer-motion";
import Image from "next/image";
import HeroImg from "../../public/images/finalJtw.png";
import happyman from "../../public/images/happyman.png";
import Button from "@/components/utils/Button";
import { HiOutlineChevronDoubleDown } from "react-icons/hi2";
import Reviews from "@/components/utils/Reviews";
import Space from "@/components/Space";
import wave from "../../public/images/wave.png";

export default function Home() {
  return (
    <main style={{ overflow: "hidden" }}>
      <div className="flex flex-col-reverse mx-auto w-[90%] md:flex-row md:items-center justify-between gap-4 md:gap-10 relative">
        <motion.div
          animate={{ x: 0, opacity: 1 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="p-4 md:w-2/3 lg:w-2/5 mx-auto grid grid-cols-1 gap-6"
        >
          <h1 className="text-[3rem] md:text-[2.5rem]">
            The Journey to Wealth Starts with you!
          </h1>

          <div className="mb-6">
            <p
              className="text-lg text-backgrounds
            "
            >
              We believe the journey to living a life of abundance starts with
              you! Our tailored coaching services are designed to provide you
              with the knowledge, tools, and support needed to take control of
              your mindset and finances
            </p>
          </div>
          <Button
            href="https://calendly.com/thaniessy/consultation-with-journey-to-wealth"
            btnText="booka a call"
            className="p-4 justify-center mx-auto text-white md:w-3/5"
          />
        </motion.div>
        <motion.div
          animate={{ x: 0, opacity: 1 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="md:w-3/5 lg:w-2/5"
        >
          <Image
            className="h-full w-full object-cover"
            src={HeroImg}
            alt="Hero"
          />
        </motion.div>
      </div>
      <section className="relative">
        <div className="bg-titles text-white relative flex flex-col">
          <div className="w-[90%] mx-auto relative grid lg:grid-cols-2 place-items-center pt-[2rem] lg:pb-[8rem]">
            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ delay: 0.5, duration: 1 }}
              viewport={{ once: true }}
              className="self-end md:w-3/5 mx-auto lg:w-full lg:mx-0"
            >
              <Image src={happyman} alt="your win" className="object-cover" />
            </motion.div>
            <motion.aside
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ delay: 0.5, duration: 1 }}
              viewport={{ once: true }}
              className="p-2 md:p-4 grid grid-cols-1 gap-3 md:gap-4 mx-auto lg:pb-8"
            >
              <h1 className="text-3xl md:text-4xl font-bold">
                Your win is our greatest achievement
              </h1>
              <p className="pb-4 leading-[2rem]">
                At Journey to Wealth, we champion your financial freedom.
                Ditching cookie-cutter plans, we craft personalized coaching
                built around your unique goals and dreams. Whether you&apos;re
                battling debt, saving for a vacation, or planning for
                retirement, our judgment-free approach empowers you to take
                control. We believe everyone deserves financial peace of mind,
                and that&apos;s why we provide collaborative coaching sessions,
                actionable strategies, and unwavering support every step of the
                way. Are you ready to build the life you deserve? Let&apos;s
                embark on your financial journey together. Schedule a free
                consultation today!
              </p>
            </motion.aside>
          </div>
          {/* <div className="absolute -bottom-2 min-w-full  hidden lg:block">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,256L48,218.7C96,181,192,107,288,90.7C384,75,480,117,576,165.3C672,213,768,267,864,261.3C960,256,1056,192,1152,176C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
          </div> */}
          <Image
            src={wave}
            className="absolute -bottom-2 min-w-full  hidden lg:block"
            alt="wave"
          />
        </div>
        <Space border="md:hidden lg:block" />
        <div className="!w-[90%] mx-auto" id="services">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 md:justify-between p-2 mx-auto h-[8rem]">
            <h5 className="text-3xl md:text-4xl">What you will get</h5>
            <HiOutlineChevronDoubleDown className="text-3xl md:text-4xl lg:text-5xl" />
          </div>
          <Services />
        </div>
        <Space />
        <div className="px-8 w-full mx-auto">
          <h5 className="md:w-[88%] mx-auto text-center text-3xl md:text-4xl mb-10 text-backgrounds text-opacity-75">
            Here&apos;s what our clients say about us
          </h5>
          <Reviews />
        </div>
      </section>
    </main>
  );
}
