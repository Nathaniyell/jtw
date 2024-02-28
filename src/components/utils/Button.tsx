import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";

type BtnProps ={
  href: string,
  btnText: string
  className?: string,

}

const Button = ({href, btnText, className}:BtnProps) => {
  return (
    <Link
          
            href={href}
                        className={`rounded-lg flex items-center gap-2 bg-titles p-2 text-center transition-all duration-200 uppercase ${className ? className : "justify-center text-white w-full py-3 hover:text-titles hover:bg-white"}`}
            // style={{display: "block"}}
          >
            <span>{btnText}</span>
            <BsArrowUpRight className="self-start" />
          </Link>
  
  )
}

export default Button