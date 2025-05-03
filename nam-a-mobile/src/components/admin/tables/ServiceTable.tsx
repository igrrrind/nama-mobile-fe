"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Service } from "@/types";
import { DataTable } from "@/components/shared/DataTable";
import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const columns: ColumnDef<Service>[] = [
  { accessorKey: "id", header: "Mã dịch vụ" },
  { accessorKey: "name", header: "Tên dịch vụ" },
  { accessorKey: "price", header: "Giá" },
  { accessorKey: "rating", header: "Đánh giá" },
  { accessorKey: "reviews", header: "Số lượt đánh giá" },
];

interface ServiceTableProps {
  data: Service[];
  children?: React.ReactNode;
}

export function ServiceTable({ data, children }: ServiceTableProps) {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", search);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            type="text"
            inputMode="search"
            placeholder="Tìm kiếm dịch vụ..."
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