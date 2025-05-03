"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Accessory } from "@/types";
import { DataTable } from "@/components/shared/DataTable";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const columns: ColumnDef<Accessory>[] = [
  {
    accessorKey: "id",
    header: "Mã phụ kiện",
  },
  {
    accessorKey: "name",
    header: "Tên phụ kiện",
  },
  {
    accessorKey: "description",
    header: "Mô tả",
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
    accessorKey: "category",
    header: "Danh mục",
  },
  {
    accessorKey: "stock",
    header: "Tồn kho",
  },
];

interface AccessoryTableProps {
  data: Accessory[];
  children?: React.ReactNode
}

export function AccessoryTable({ data, children }: AccessoryTableProps) {
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
            inputMode="search"
            placeholder="Tìm kiếm phụ kiện..."
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