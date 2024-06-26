import { FC, useState } from "react";
import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Open_Sans } from "next/font/google";
import { usePathname } from "next/navigation";
import { AboutData, mobileNavLinks } from "@/lib/navbar";
import { boxVariants, opacityVarient } from "@/lib/animation";

interface MobileSidebar {
  isOpen: boolean;
  showAbout : boolean;
  setShowAbout : React.Dispatch<React.SetStateAction<boolean>>;
}

const openSans = Open_Sans({
  subsets: ["latin"]
})

const MobileSidebar: FC<MobileSidebar> = ({ isOpen }) => {
  const pathname = usePathname();
  const [showAbout, setShowAbout] = useState(false);
  return (
    <AnimatePresence>
      {isOpen && <motion.div
        variants={boxVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={cn("absolute bg-white w-full lg:hidden flex flex-col gap-7 pb-8 pt-4 md:px-24 px-6 z-20 ", openSans.className)}>
        <div onClick={() => setShowAbout(!showAbout)} className={cn("relative z-30 flex group text-xl font-medium hover:text-teal-500 text-black duration-150 delay-150 transition-all ", pathname === "/about" ? " fill-teal-500 text-teal-600" : "", showAbout ? "-translate-y-4 -translate-x-2 border-2  border-white border-b-black " : "")} >
          <h3>About DiAtom</h3>
          <svg xmlns="http://www.w3.org/2000/svg" className={cn("relative top-[1px] w-6 h-auto group-hover:fill-teal-500 duration-150 delay-150 transition-all", showAbout ? "-rotate-90" : "" )} viewBox="0 -960 960 960" ><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" /></svg>
        </div>
        <AnimatePresence>
          {showAbout ?
            <motion.div variants={opacityVarient}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.7, ease: 'easeInOut' }} className=" -translate-y-6 z-20   flex flex-col gap-6 w-full items-start  ">
              {AboutData.map(data => {
                return (
                  <div className="w-full" key={data.heading}>
                    <h1 className=" text-teal-600 text-lg mb-4 font-medium">{data.heading}</h1>
                    <div className="flex flex-col gap-5 text-xl font-medium text-gray-700">
                      {(data.links).map(link => {
                        return (
                          <Link href={link.href} key={link.name} className={cn("transition-all duration-150 delay-100 hover:text-teal-600", pathname === link.href ? "text-teal-600" : "")}>{link.name}</Link>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </motion.div>
            : <Links />}
        </AnimatePresence>
        <hr className="text-black fill-black " />
      </motion.div>
      }
    </AnimatePresence>
  )
}


const Links = () => {
  const pathname = usePathname();
  return (
    <>
      {mobileNavLinks.map((data) => {
        return (
          <Link key={data.name} href={data.href} className={cn("text-xl text-black font-medium hover:text-teal-600 duration-150 delay-150 transition-all ", pathname === data.href ? "text-teal-600" : "")} >{data.name}</Link>
        )
      })}
    </>

  )
}

export default MobileSidebar;
