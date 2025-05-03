"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Blog } from "@/types/blog.interface";
import { DataTable } from "@/components/shared/DataTable";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const columns: ColumnDef<Blog>[] = [
  { 
    accessorKey: "title", 
    header: "Bài viết",
    cell: ({ row }) => {
        const title = String(row.getValue("title"))
        // const img = String(row.getValue("imageUrl"))
        return (
            <div className="max-h-[300px] flex space-x-2 overflow-hidden">
                <Image src={"https://picsum.photos/400/300"} alt={title} height={100} width={100}/>
                <p className="text-foreground truncate">{title}</p>
            </div>
        )

    } 
},
  { accessorKey: "author", header: "Tác giả" },
  { accessorKey: "createdAt", header: "Ngày tạo" },
  { accessorKey: "isActive", header: "Trạng thái", cell: ({ row }) => row.getValue("isActive") ? "Hiện" : "Ẩn" },
];

interface BlogTableProps {
  data: Blog[];
  children?: React.ReactNode;
}

export function BlogTable({ data, children }: BlogTableProps) {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    // Implement search/filter logic if needed
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            type="text"
            inputMode="search"
            placeholder="Tìm kiếm bài viết..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button onClick={handleSearch}>Tìm kiếm</Button>
        <div>{children}</div>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}