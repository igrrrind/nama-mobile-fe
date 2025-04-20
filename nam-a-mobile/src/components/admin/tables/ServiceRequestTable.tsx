"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ServiceRequest } from "@/types";
import { DataTable } from "@/components/shared/DataTable";

const columns: ColumnDef<ServiceRequest>[] = [
  {
    accessorKey: "id",
    header: "Mã yêu cầu",
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
    accessorKey: "requestDate",
    header: "Ngày yêu cầu",
    cell: ({ row }) => {
      const date = new Date(row.getValue("requestDate"));
      return date.toLocaleDateString("vi-VN");
    },
  },
  {
    accessorKey: "estimatedCompletionDate",
    header: "Ngày hoàn thành dự kiến",
    cell: ({ row }) => {
      const date = new Date(row.getValue("estimatedCompletionDate"));
      return date.toLocaleDateString("vi-VN");
    },
  },
  {
    accessorKey: "status",
    header: "Trạng thái",
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
];

interface ServiceRequestTableProps {
  data: ServiceRequest[];
}

  export function ServiceRequestTable({ data }: ServiceRequestTableProps) {
  return <DataTable columns={columns} data={data} />;
} 