"use client";
import BlogCard from "@/components/BlogCard";
import { BlogData } from "@/lib/blog";
import { cn } from "@/lib/utils";
import Link from "next/link";

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
      <div className="w-full grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 justify-center">
        {BlogData.slice(0, 3).map((blog) => {
          return <BlogCard blog={blog} key={blog.id} />;
        })}
      </div>
    </div>
  );
};

export default Blog;
