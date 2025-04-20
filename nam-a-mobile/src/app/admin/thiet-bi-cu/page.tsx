import { ProductTable } from "@/components/admin/tables/ProductTable";
import { products } from "@/constants/adminData";

export default function UsedDevicesPage() {
  // In a real app, this would be an API call or database query
  const data = products;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Quản lý thiết bị cũ</h1>
      <ProductTable data={data} />
    </div>
  );
} 