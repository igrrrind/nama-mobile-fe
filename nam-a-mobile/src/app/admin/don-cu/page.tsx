import { OrderTable } from "@/components/admin/tables/OrderTable";
import { orders } from "@/constants/adminData";
import { OrderStatus } from "@/types/enums";

export default function OldOrdersPage() {
  // In a real app, this would be an API call or database query
  const data = orders.filter(order => order.status === OrderStatus.Hoàn_thành);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Quản lý đơn cũ</h1>
      <OrderTable data={data} />
    </div>
  );
} 