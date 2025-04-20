import { BannerTable } from "@/components/admin/tables/BannerTable";
import { banners } from "@/constants/adminData";

export default function BannersPage() {
  // In a real app, this would be an API call or database query
  const data = banners;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Quản lý banner</h1>
      <BannerTable data={data} />
    </div>
  );
} 