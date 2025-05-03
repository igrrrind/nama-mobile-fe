"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/shared/DataTable";
import { Banner } from "@/types";
import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const columns: ColumnDef<Banner>[] = [
  {
    accessorKey: "id",
    header: "Mã banner",
  },
  {
    accessorKey: "name",
    header: "Tên banner",
  },
  {
    accessorKey: "imageUrl",
    header: "Hình ảnh",
  },
  {
    accessorKey: "redirectUrl",
    header: "Đường dẫn",
  },
];

interface BannerTableProps {
  data: Banner[];
  children?: React.ReactNode;
}

export function BannerTable({ data, children }: BannerTableProps) {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", search);
    // You could also apply actual filtering logic here if needed
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            type="text"
            inputMode="search"
            placeholder="Tìm kiếm banner..."
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