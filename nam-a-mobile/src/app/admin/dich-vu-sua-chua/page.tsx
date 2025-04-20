import { ServiceTable } from "@/components/admin/tables/ServiceTable";
import { services } from "@/constants/adminData";

export default function RepairServicesPage() {
  // In a real app, this would be an API call or database query
  const data = services;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Quản lý dịch vụ sửa chữa</h1>
      <ServiceTable data={data} />
    </div>
  );
} 