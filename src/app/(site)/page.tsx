import Accordian from "@/sections/Accordian";
import Blog from "@/sections/Blog";
import Features from "@/sections/Features";
import Hero from "@/sections/Hero";
import Products from "@/sections/Products";

export default function Home() {
  return (
    <>
      <Hero />
      <Accordian/>
      <Products />
      <Features/> 
      <Blog />
    </>
  );
}
