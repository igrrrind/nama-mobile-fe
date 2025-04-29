"use client";

import { useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/shared/DataTable";
import { Search } from "lucide-react";
import { Component } from "@/types";

const columns: ColumnDef<Component>[] = [
  { accessorKey: "id", header: "Mã linh kiện" },
  { accessorKey: "name", header: "Tên linh kiện" },
  { accessorKey: "description", header: "Mô tả" },
  {
    accessorKey: "componentCategory.name",
    header: "Loại linh kiện",
    cell: ({ row }) => {
      const category = row.original.componentCategory;
      return category ? category.name : "Không có";
    },
  },
  {
    accessorKey: "price",
    header: "Giá",
    cell: ({ row }) => {
      const amount = row.getValue("price") as number;
      return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(amount);
    },
  },
  { accessorKey: "stock", header: "Tồn kho" },
  { accessorKey: "rating", header: "Đánh giá" },
  { accessorKey: "reviews", header: "Số lượt đánh giá" },
];

interface ComponentTableProps {
  data: Component[];
  children: React.ReactNode
}

export function ComponentTable({ data, children }: ComponentTableProps) {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", search);
    // You could also apply actual filtering logic here if needed
  };

  return (
    <div className="flex flex-col gap-4">
      <div onSubmit={handleSearch} className="flex  items-center gap-2">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            type="text"
            placeholder="Tìm kiếm linh kiện..."
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
