"use client";
import { BlogData } from "@/lib/blog";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { IoMdArrowDown } from "react-icons/io";

const Blog = () => {
  return (
    <div className={cn("padding-x w-full py-12 open-sans")}>
      <div className="flex justify-between items-center mb-16">
        <h3 className="text-4xl font-medium">Learn more about us</h3>
        <Link
          href="/blog"
          className="font-medium text-teal-600 text-lg hover:text-teal-400 duration-200 delay-150 transition-all"
        >
          See All Blogs
        </Link>
      </div>
      <div className="w-full grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {BlogData.slice(0, 3).map((blog) => {
          return (
            <Link
              href={blog.href}
              className="flex-col flex relative gap-1 group "
              key={blog.id}
            >
              <div className="overflow-hidden">
                <img
                  src={blog.blogImg}
                  alt="blog"
                  className="max-w-full transition duration-300 ease-in-out group-hover:scale-110"
                />
              </div>
              <div className="w-full mt-8 relative">
                <p className="font-semibold text-sm inline monts">john doe</p>
                <p className="font-bold text-xl inline mx-1 ">.</p>
                <p className="font-semibold inline text-sm monts">
                  20 May 2024
                </p>
              </div>
              <div className="flex justify-between monts ">
                <h3 className="text-xl font-semibold ">
                  Migrating to Linear 101
                </h3>
                <div className="-rotate-90 ">
                  <IoMdArrowDown className="-rotate-45 text-xl group-hover:text-2xl transition-all delay-100 duration-200" />
                </div>
              </div>
              <p className="mt-1 ">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum.
              </p>
              <div className="monts font-semibold mt-1">
                <p className="text-[10px] border-[1.7px] rounded-xl inline px-2 py-1  border-black">Technology</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
