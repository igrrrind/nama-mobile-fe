"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Accessory } from "@/types";
import { DataTable } from "@/components/shared/DataTable";

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
}

export function AccessoryTable({ data }: AccessoryTableProps) {
  return <DataTable columns={columns} data={data} />;
} 