"use client";
import Services from "@/components/Services/Services";
import Space from "@/components/Space";
import Button from "@/components/utils/Button";
import blackman from "../../../public/images/blackman.png";
import blackwoman from "../../../public/images/blackgirl.png";
import olaide from "../../../public/images/finalJtw.png";
import olaideAbout from "../../../public/images/olaide_about.png";
import Image from "next/image";
import { HiOutlineChevronDoubleDown } from "react-icons/hi2";
import Reviews from "@/components/utils/Reviews";

const page = () => {
  const teamDetails = [
    {
      image: olaide,
      title: "Lead Coach",
      name: "Olaide Olunloyo",
    },
    {
      image: blackman,
      title: "Lorem Title",
      name: "Lorem Man",
    },
    {
      image: blackwoman,
      title: "Lorem Title",
      name: "Lorem Woman",
    },
  ];

  return (
    <div className="w-[90%] mx-auto">
      <div className="p-2 md:p-8 grid grid-cols-1 md:grid-cols-2 items-center lg:w-[80%] mx-auto mb-8 gap-4 md:gap- md:mb-0">
        <h1 className="text-5xl md:text-7xl font-bold lg:w-4/5 ">About Us</h1>
        <p className="w-full">
          At Journey to wealth, we help unlock your financial potential. Our
          expert coaches craft personalized strategies for your unique goals,
          from budgeting and debt-management to wealth creation and retirement
          planning. embrace control with our expert guidance, ongoing support,
          and educational resources. Let&apos;s conquer your financial journey,
          together
        </p>
      </div>
      <div className="flex md:flex-row flex-col rounded-xl">
        <div className="flex-1 h-full xl:flex-initial xl:placeholder:w-fit">
          <Image
            src={olaideAbout}
            className="md:rounded-tl-xl md:rounded-bl-xl object-cover"
            alt="Olaide About"
          />
        </div>
        <div className="flex-1 xl:flex-initial text-white xl:w-4/5 bg-stone-900 md:rounded-tr-xl md:rounded-br-xl relative">
          <div className="p-4 md:p-0 gap-8 md:gap-0 md:w-[80%] mx-auto flex flex-col justify-around h-full">
            <h1 className="text-3xl md:text-4xl text-[#E09706]">
              How do we deliver?
            </h1>
            <p className="lg:leading-relaxed">
              Our expert coaches create tailored plans to fit your unique goals,
              offering unwavering support and guidance every step of the way.
              Ditch generic advice and experience financial freedom – it&apos;s
              time to build the life you deserve.
            </p>

            <Button
              className="md:w-5/6 lg:w-2/5 justify-center h-fit w-full text-white"
              btnText="Book a call"
              href="https://calendly.com/thaniessy/consultation-with-journey-to-wealth"
            />
          </div>
        </div>
      </div>
      <Space border="md:hidden lg:block md:h-[2rem]" />
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 md:justify-between p-2 mx-auto h-[8rem] w-full">
        <h5 className="text-3xl md:text-4xl">What you will get</h5>
        <HiOutlineChevronDoubleDown className="text-3xl md:text-4xl lg:text-5xl" />
      </div>
      <Services />
      <Space />
      <h5 className="md:w-[88%] mx-auto text-center text-3xl md:text-4xl mb-10 text-backgrounds text-opacity-75">
        Here&apos;s what our clients say about us
      </h5>
      <Reviews />
      <Space />
      <section>
        <h4 className="text-3xl md:text-4xl h-full lg:w-1/2 mx-auto w-full py-2 px-4 md:px-8 mb-10 text-center">
          Our Team
        </h4>

        <div className="grid grid-cols-1 gap-28 md:gap-0 md:rounded-xl items-stretch md:grid-cols-3 w-11/12 mx-auto">
          {teamDetails.map((member) => {
            return (
              <div key={member.name} className="relative flex-1">
                <Image
                  className="h-full object-cover aspect-square"
                  src={member.image}
                  alt={member.name}
                />
                <div className="text-left bg-black opacity-80 mx-auto px-4 text-white">
                  <p className="text-2xl">{member.name}</p>
                  <p className="italics">{member.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <Space />
    </div>
  );
};

export default page;
