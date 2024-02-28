import { motion } from "framer-motion";
import { twMerge } from 'tailwind-merge'

type cardProps = {
title: string,
description: string,
child: any
isLastElement: boolean,
border: string

}
const ServiceCard = ({title, description, isLastElement, child, border}: cardProps) => {
  return (
   <motion.div
  
   className={twMerge(`grid p-4 lg:p-8 grid-cols-1 border md:border-0 md:border-b border-backgrounds border-opacity-40 w-full mx-auto gap-6 ${isLastElement && "md:col-span-2 md:place-items-center"}`, border)}>
    <div className="py-2 grid grid-cols-1 place-items-center w-[20%] text-2xl text-titles">{child}</div>
    <p className="text-xl">{title}</p>
    <p className={`md:w-5/6 text-backgrounds ${isLastElement && "md:mx-auto md:text-center"}`}>{description}</p>
   </motion.div>
  )
}

export default ServiceCard 