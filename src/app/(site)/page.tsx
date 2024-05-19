import Accordian from "@/pages/Accordian";
import Blog from "@/pages/Blog";
import Features from "@/pages/Features";
import Hero from "@/pages/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <Accordian/>
      <Features/> 
      <Blog />
    </>
  );
}
