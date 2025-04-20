"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Product } from "@/types";
import { DataTable } from "@/components/shared/DataTable";

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
}

export function ProductTable({ data }: ProductTableProps) {
  return <DataTable columns={columns} data={data} />;
} 