"use client"
import { cn } from "@/lib/utils";
import Lottie from "lottie-react";
import { Open_Sans } from "next/font/google";
import { Suspense } from "react";
import Loading from "../assets/loading.json"
import VideoBG from "@/components/VideoBG";


const openSans = Open_Sans({
  subsets: ["latin"]
})

const Hero = () => {
  return (
    <div className={cn("-z-50 lg:h-[70vh] h-[93vh] relative", openSans.className)}>
      <div className="w-full h-full bg-ovelay_black absolute top-0 -z-30"></div>
      <Suspense fallback={
        <div className="w-full h-full flex justify-center items-center">
          <Lottie animationData={Loading} loop={true} />
        </div>
      }>
        <VideoBG src="/bg/background.mp4"/>
      </Suspense>
      <div className="padding-x h-full py-20 flex items-end max-lg:items-center ">
        <h2 className="lg:text-7xl md:text-6xl text-4xl text-white font-semibold lg:max-w-4xl ">Applying the power of Science and Technology</h2>
      </div>
    </div>
  )
}

export default Hero;
