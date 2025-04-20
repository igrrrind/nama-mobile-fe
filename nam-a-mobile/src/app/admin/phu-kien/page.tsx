import { AccessoryTable } from "@/components/admin/tables/AccessoryTable";
import { accessories } from "@/constants/adminData";

export default function AccessoriesPage() {
  // In a real app, this would be an API call or database query
  const data = accessories;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Quản lý phụ kiện</h1>
      <AccessoryTable data={data} />
    </div>
  );
} 