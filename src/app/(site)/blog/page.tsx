import { BlogData } from "@/lib/blog";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="w-full padding-x lg:pt-20 lg:pb-12 pt-10 pb-6 flex flex-col">
        <h1 className="md:text-7xl text-4xl monts lg:mb-10 mb-6 font-medium">
          The Blog...
        </h1>
        {BlogData.map((blog) => {
          return (
            <Link
              href={blog.href}
              className="w-full  flex flex-col justify-start md:gap-6 gap-2  md:py-8 py-4 group"
              key={blog.id}
            >
              <div className="flex w-full lg:gap-16 gap-2 ">
                <div className="md:grow flex flex-col w-full gap-4">
                  <div className="flex md:gap-3 gap-2 items-end">
                    <img
                      src={blog.authorImg}
                      alt="logo"
                      className="w-6 rounded-full"
                    />
                    <p className="text-gray-700 text-md">{blog.author}</p>
                    <p className="text-gray-600 text-sm">{blog.date}</p>
                  </div>
                  <h1 className="lg:text-xl md:text-lg text-md font-bold open-sans  ">
                    {blog.title}
                  </h1>
                  <p className="flex-none text-md monts max-md:hidden">
                    {blog.description}
                  </p>
                  <div className="flex gap-2 flex-wrap ">
                    <p className="px-2 py-1 rounded-xl flex items-center justify-center bg-gray-100 text-gray-800 text-xs border-white border group-hover:border-gray-200 group-hover:bg-gray-200 duration-100 delay-100 transition-all ease-out">
                      {blog.tag}
                    </p>
                    <p className="px-2 py-1 text-gray-600 inline text-sm">
                      {blog.time} min read
                    </p>
                  </div>
                </div>
                <div className="md:flex-none flex items-center overflow-hidden  justify-center">
                  <img
                    src={blog.blogImg}
                    alt="blogbg"
                    className="max-h-60 lg:min-w-52 md:min-w-28  max-w-40 object-center transition duration-300 ease-in-out group-hover:scale-125"
                  />
                </div>
              </div>
              <hr className="mt-4" />
            </Link>
          );
        })}
      </section>
    </>
  );
}
