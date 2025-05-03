"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Product } from "@/types";
import { DataTable } from "@/components/shared/DataTable";
import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "id",
    header: "Mã sản phẩm",
  },
  {
    accessorKey: "name",
    header: "Tên sản phẩm",
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
  {
    accessorKey: "condition.name",
    header: "Tình trạng",
  },
  {
    accessorKey: "stock",
    header: "Tồn kho",
  },
  {
    accessorKey: "rating",
    header: "Đánh giá",
  },
  {
    accessorKey: "reviews",
    header: "Số lượt đánh giá",
  },
];

interface ProductTableProps {
  data: Product[];
  children: React.ReactNode
}

export function ProductTable({ data, children }: ProductTableProps) {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", search);
    // You could also apply actual filtering logic here if needed
  };

  return (
    <div className="flex flex-col gap-4">
      <div onSubmit={handleSearch} className="flex  items-center gap-2">
        <div className="relative w-full">
          <Input
            type="text"
            placeholder="Tìm kiếm thiết bị..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-2"
          />
        </div>
        <Button onClick={handleSearch} className="rounded-none"><Search/></Button>
        <div>{children}</div>
      </div>
      

      <DataTable columns={columns} data={data} />
    </div>
  );
}