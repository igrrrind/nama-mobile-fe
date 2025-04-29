"use client";

import { ModelType } from "@/types/enums";
import { DataTable } from "@/components/shared/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import { Model } from "@/types/model.interface";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

// Example columns for each model type
const columnsMap: Record<ModelType, ColumnDef<Model>[]> = {
  [ModelType.Điện_thoại]: [
    { accessorKey: "id", header: "Mã điện thoại" },
    { accessorKey: "name", header: "Tên điện thoại" },
    { accessorKey: "brandName", header: "Hãng" },
  ],
  [ModelType.Linh_kiện]: [
    { accessorKey: "id", header: "Mã linh kiện" },
    { accessorKey: "name", header: "Tên linh kiện" },
    { accessorKey: "brandName", header: "Hãng" },
  ],
  [ModelType.Phụ_kiện]: [
    { accessorKey: "id", header: "Mã phụ kiện" },
    { accessorKey: "name", header: "Tên phụ kiện" },
    { accessorKey: "brandName", header: "Hãng" },
  ],
  [ModelType.Đồng_hồ]: [
    { accessorKey: "id", header: "Mã đồng hồ" },
    { accessorKey: "name", header: "Tên đồng hồ" },
    { accessorKey: "brandName", header: "Hãng" },  
],
  [ModelType.Máy_tính]: [
    { accessorKey: "id", header: "Mã máy tính" },
    { accessorKey: "name", header: "Tên máy tính" },
    { accessorKey: "brandName", header: "Hãng" }, 
 ],
};

interface ModelTableProps {
  type: ModelType;
  data: Model[];
  children: React.ReactNode
}

export function ModelTable({ type, data, children }: ModelTableProps) {
  const columns = columnsMap[type];
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
            placeholder="Tìm kiếm mẫu thiết bị"
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