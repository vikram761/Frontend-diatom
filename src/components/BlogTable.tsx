"use client"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { blog } from "@/lib/blog";
import { FC } from "react";
import { formatDate } from "./BlogCard";
import { FaRegTrashAlt } from "react-icons/fa";
import { useToast } from "./ui/use-toast";

interface blogTable {
  data: blog[];
}

export const BlogTable: FC<blogTable> = ({ data }) => {
  const { toast } = useToast();
  const handleDelete = async (blogData: blog) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/blog/${blogData.id}`,
        {
          method: "DELETE",
          credentials: "include",
        },
      );
      if (!res.ok) throw new Error("Failed to delete");
      
      data = data.filter((item) => item.id !== blogData.id)

      toast({
        title: "blog deleted successfully",
      });
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Unable to delete",
      });
    }
  };

  return (
    <Table className="mt-10">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[50px]">S.NO</TableHead>
          <TableHead>Title</TableHead>
          <TableHead className="text-center w-[100px]">Author</TableHead>
          <TableHead className="text-center w-[100px]">Created at</TableHead>
          <TableHead className="text-center w-[100px]">Delete</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item, idx) => {
          return (
            <TableRow key={idx}>
              <TableCell className="w-[50px] text-center py-4">
                {idx + 1}
              </TableCell>
              <TableCell className="truncate">{item.heading}</TableCell>
              <TableCell className="text-center w-[100px]">
                {item.author}
              </TableCell>
              <TableCell className="text-center w-[150px]">
                {formatDate(item.created_at)}
              </TableCell>
              <TableCell className="text-center w-[100px] flex items-center justify-center py-4">
                <FaRegTrashAlt
                  className="w-5 h-5 hover:text-red-600 transition-all duration-100 ease-in-out cursor-pointer"
                  onClick={() => handleDelete(item)}
                />
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default BlogTable;
