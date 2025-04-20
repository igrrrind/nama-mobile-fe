"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/shared/DataTable";
import { Banner } from "@/types";

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
}

export function BannerTable({ data }: BannerTableProps) {
  return <DataTable columns={columns} data={data} />;
}