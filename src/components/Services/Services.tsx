import { motion } from "framer-motion";
import ServiceCard from "../ServiceCard";
import { SiMinds } from "react-icons/si";
import { RiSettingsLine } from "react-icons/ri";
import { RiGraduationCapLine } from "react-icons/ri";
import { RiCalendarTodoLine } from "react-icons/ri";
import { PiFolder } from "react-icons/pi";
import { PiNumberZeroBold } from "react-icons/pi";
import { TfiSupport } from "react-icons/tfi";

const serviceDetails = [
  {children: <SiMinds /> ,
    title: "Mindset Change Coaching",
    description:
      "Helping you overcome psychological barriers and behavioural patterns that may hinder your financial growth.",
    border: "md:border-r",
  },
  {children: < RiCalendarTodoLine />,
    title: "Customised Financial Planning",
    description:
      "Tailored financial plans and strategies to help you reach your specific goals.",
    border: "md:border-l",
  },
  {children: <PiFolder /> ,
    title: "Budgeting Guidance",
    description:
      "Assistance in creating and maintaining apersonalised budget to track expenses, identify areas for saving, and manage cash flow effectively.",
    border: "md:border-r",
  },
  {children: <PiNumberZeroBold /> ,
    title: "Debt Management",
    description: "Strategies and support for managing and reducing debt.",
    border: "md:border-l",
  },
  {children: <RiSettingsLine /> ,
    title: "Planning for the future",
    description:
      "Assistance in crafting a comprehensive retirement plan, including setting savings targets and evaluating retirement options.",
    border: "md:border-r",
  },
  {children: <RiGraduationCapLine /> ,
  title: "Educational Resources",
  description:
      "Access to resources covering various financial topics, such as money management and long-term financial planning.",
      border: "md:border-l",
  },
      {children: <TfiSupport />,
        title: "Accountability and Support",
        description:
          "Ongoing support to help you stay on track with your financial goals.",
        border: "border-b",
      },
];

const Services = () => {
  return (
    <section
     >
      <motion.div
         whileInView={{y: 0, opacity: 1}}
         initial={{ opacity: 0, y : 200 }}
         transition={{ duration: 1 }}
         viewport={{once: true}}
      className="grid md:grid-cols-2 gap-8 md:gap-0 items-stretch mx-auto w-full">
        {serviceDetails.map((detail, index) => {
          const {title, description, children, border} = detail
          const isLastElement = index === serviceDetails.length - 1;
          return (
            <ServiceCard
              key={index}
              title={title}
              description={description}
              child={children}
              isLastElement = {isLastElement}
              border={border}
              
            />
          );
        })}
      </motion.div>
    </section>
  );
};

export default Services;
