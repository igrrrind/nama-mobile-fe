"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Component } from "@/types";
import { DataTable } from "@/components/shared/DataTable";

const columns: ColumnDef<Component>[] = [
  {
    accessorKey: "id",
    header: "Mã linh kiện",
  },
  {
    accessorKey: "name",
    header: "Tên linh kiện",
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

interface ComponentTableProps {
  data: Component[];
}

export function ComponentTable({ data }: ComponentTableProps) {
  return <DataTable columns={columns} data={data} />;
} 