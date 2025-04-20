"use client";

import { ColumnDef } from "@tanstack/react-table";
import { User } from "@/types";
import { DataTable } from "@/components/shared/DataTable";

const columns: ColumnDef<User>[] = [
  {
    accessorKey: "id",
    header: "Mã người dùng",
  },
  {
    accessorKey: "fullName",
    header: "Họ tên",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phoneNumber",
    header: "Số điện thoại",
  },
  {
    accessorKey: "role",
    header: "Vai trò",
  },
  {
    accessorKey: "status",
    header: "Trạng thái",
  },
  {
    accessorKey: "dateOfBirth",
    header: "Ngày sinh",
    cell: ({ row }) => {
      const date = new Date(row.getValue("dateOfBirth"));
      return date.toLocaleDateString("vi-VN");
    },
  },
];

interface UserTableProps {
  data: User[];
}

export function UserTable({ data }: UserTableProps) {
  return <DataTable columns={columns} data={data} />;
} 