"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Service } from "@/types";
import { DataTable } from "@/components/shared/DataTable";

const columns: ColumnDef<Service>[] = [
  {
    accessorKey: "id",
    header: "Mã dịch vụ",
  },
  {
    accessorKey: "serviceName",
    header: "Tên dịch vụ",
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
    accessorKey: "rating",
    header: "Đánh giá",
  },
  {
    accessorKey: "reviews",
    header: "Số lượt đánh giá",
  },
];

interface ServiceTableProps {
  data: Service[];
}

export function ServiceTable({ data }: ServiceTableProps) {
  return <DataTable columns={columns} data={data} />;
} 