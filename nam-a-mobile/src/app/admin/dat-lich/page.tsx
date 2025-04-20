import { ServiceRequestTable } from "@/components/admin/tables/ServiceRequestTable";
import { serviceRequests } from "@/constants/adminData";

export default function ServiceRequestsPage() {
  // In a real app, this would be an API call or database query
  const data = serviceRequests;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Quản lý đặt lịch</h1>
      <ServiceRequestTable data={data} />
    </div>
  );
} 