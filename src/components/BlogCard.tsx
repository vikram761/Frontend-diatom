import { blog } from "@/lib/blog";
import Link from "next/link";
import { IoMdArrowDown } from "react-icons/io";

const BlogCard = ({ blog }: { blog: blog }) => {
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
      <div className="w-full mt-6 relative monts">
        <p className="font-semibold text-sm inline">{blog.author}</p>
        <p className="font-bold text-xl inline mx-2">.</p>
        <p className="font-semibold inline text-sm">{blog.date}</p>
      </div>
      <div className="flex justify-between monts ">
        <h3 className="text-xl font-semibold ">{blog.title}</h3>
        <div className="min-w-6 flex justify-end">
          <IoMdArrowDown className="-rotate-[135deg] text-xl group-hover:text-2xl transition-all delay-100 duration-200" />
        </div>
      </div>
      <p className="mt-1 ">{blog.description}</p>
      <div className="monts font-semibold mt-2">
        <p className="text-[10px] border-[1.7px] rounded-xl inline px-2 py-1  border-black">
          {blog.tag}
        </p>
      </div>
    </Link>
  );
};

export default BlogCard;
