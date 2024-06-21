import BlogTable from "@/components/BlogTable";
import { blog } from "@/lib/blog";
import Link from "next/link";

const fetchData = async () => {
  try {
    const backend = process.env.NEXT_PUBLIC_BACKEND_URL;
    const res = await fetch(`${backend}/blog/`, {
      next: { revalidate: 0 },
    });
    if (!res.ok) {
      throw new Error("Failed to fetch");
    }
    const resData: { status: string; response: blog[] } = await res.json();
    if (resData.status === "failed") {
      throw new Error("Failed to fetch");
    }
    if (resData.response.length === 0) {
      throw new Error("No Blog Found");
    }
    return resData.response;
  } catch (err) {
    console.error(err);
    return null;
  }
};
export default async function Home() {
  const data = await fetchData();

  if (!data) {
    return (
      <div className="padding-x">
        <div className="flex justify-between items-center">
          <h2 className="md:text-5xl text-3xl font-bold">Blogs</h2>
          <Link
            href="/admin/blog/new"
            className="px-6 py-3 bg-black rounded-xl hover:bg-gray-700 transition-all duration-100 ease-in-out text-white text-lg"
          >
            Add
          </Link>
        </div>
        <div className="w-full flex items-center justify-center mt-20">
          No Blog found...
        </div>
      </div>
    );
  }
  return (
    <div className="padding-x monts">
      <div className="flex justify-between items-center">
        <h2 className="md:text-5xl text-3xl font-bold">Blogs</h2>
        <Link
          href="/admin/blog/new"
          className="px-6 py-3 bg-black rounded-xl hover:bg-gray-700 transition-all duration-100 ease-in-out text-white text-lg"
        >
          Add
        </Link>
      </div>
      <BlogTable data={data} />
    </div>
  );
}
