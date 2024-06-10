import BlogCard from "@/components/BlogCard";
import { BlogData } from "@/lib/blog";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section  className="w-full padding-x lg:pt-20 lg:pb-12 pt-10 pb-6 flex flex-col monts">
        <p className="text-md font-medium text-center mb-2">the blog</p>
        <h1 className="md:text-6xl text-4xl monts mb-6 font-semibold text-center">
          Writings from our team
        </h1>
        <p className="text-center ">
          The latest industry news, interviews, technologies and resources.
        </p>
        <Link href="/blog/sample" className="flex flex-col justify-end items-start p-8 gap-3 relative w-full mt-10 mb-14 h-[70vh] max-h-[38rem] group monts text-white overflow-clip">
          <img
            src="/bg/blogbg2.jpg"
            className="w-full h-full object-cover object-center absolute inset-0 -z-50 group-hover:scale-105 transition-all duration-200 ease-in-out"
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/70 transition-all ease-in-out duration-150 delay-150 -z-30"
            aria-hidden="true"
          />
          <div className="w-full ">
            <p className="font-semibold text-sm inline">John doe</p>
            <p className="font-bold text-xl inline mx-2">.</p>
            <p className="font-semibold inline text-sm">10 May 2024</p>
          </div>
          <h3 className="text-2xl font-semibold w-full">
            The Future of Respiratory Care
          </h3>
          <h4 className="text-gray-200 w-full">
            cumque nihil impedit quo minus id quod maxime placeat facere
            possimus, omnis voluptas assumenda est.
          </h4>
          <p className="text-[12px] border-[1.8px] rounded-2xl inline px-2 py-1  border-white ">
            Technology
          </p>
        </Link>
        <div className="w-full grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 justify-center">
          {BlogData.map((blog) => {
            return <BlogCard blog={blog} key={blog.id} />;
          })}
        </div>
      </section>
    </>
  );
}
