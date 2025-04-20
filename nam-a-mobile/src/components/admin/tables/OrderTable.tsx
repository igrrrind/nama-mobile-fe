"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Order } from "@/types";
import { DataTable } from "@/components/shared/DataTable";

const columns: ColumnDef<Order>[] = [
  {
    accessorKey: "id",
    header: "Mã đơn hàng",
  },
  {
    accessorKey: "customer.fullName",
    header: "Tên khách hàng",
  },
  {
    accessorKey: "customer.phoneNumber",
    header: "Số điện thoại",
  },
  {
    accessorKey: "orderDate",
    header: "Ngày đặt hàng",
    cell: ({ row }) => {
      const date = new Date(row.getValue("orderDate"));
      return date.toLocaleDateString("vi-VN");
    },
  },
  {
    accessorKey: "pickupDate",
    header: "Ngày nhận hàng",
    cell: ({ row }) => {
      const date = new Date(row.getValue("pickupDate"));
      return date.toLocaleDateString("vi-VN");
    },
  },
  {
    accessorKey: "totalPrice",
    header: "Tổng tiền",
    cell: ({ row }) => {
      const amount = row.getValue("totalPrice") as number;
      return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(amount);
    },
  },
  {
    accessorKey: "status",
    header: "Trạng thái",
  },
];

interface OrderTableProps {
  data: Order[];
}

export function OrderTable({ data }: OrderTableProps) {
  return <DataTable columns={columns} data={data} />;
} 