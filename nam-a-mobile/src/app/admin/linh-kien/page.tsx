import { ComponentTable } from "@/components/admin/tables/ComponentTable";
import { components } from "@/constants/adminData";

export default function SparePartsPage() {
  // In a real app, this would be an API call or database query
  const data = components;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Quản lý linh kiện</h1>
      <ComponentTable data={data} />
    </div>
  );
} 