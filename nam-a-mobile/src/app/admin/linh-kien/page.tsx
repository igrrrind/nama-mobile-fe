import { ComponentTable } from "@/components/admin/tables/ComponentTable";
import { components, componentCategories } from "@/constants/adminData";
import { Button } from "@/components/ui/button";
import { PlusCircle, FolderPlus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import LinhKienModal from "@/components/admin/modals/LinhKienModal";
import { Model } from "@/types/model.interface";
import { modelService } from "@/lib/api/services/model.service";

// ✅ Make it async
export default async function SparePartsPage() {
  const res = await modelService.getModels();
  const models: Model[] = res.result?.data || [];

  const data = components;

  return (
    <div className="flex flex-1 h-full w-full">
      <div className="p-6 flex-1">
        {/* Header with Buttons */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <h1 className="text-2xl font-bold">Quản lý linh kiện</h1>
        </div>

        {/* Main content: Table + Side Categories */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Component Table */}
          <div className="flex-1">
            <ComponentTable data={data}>
              <div className="flex gap-2">
                <Button className="flex items-center gap-2 bg-primary text-white">
                  <FolderPlus className="w-5 h-5" />
                  Thêm phân loại
                </Button>
                <LinhKienModal 
                  componentCategories={componentCategories}
                  models={models}
                  description="Điền đầy đủ thông tin để đăng bán linh kiện"
                  title="Thêm linh kiện mới"
                >
                  <Button className="flex items-center gap-2 bg-primary text-white">
                    <PlusCircle className="w-5 h-5" />
                    Thêm linh kiện mới
                  </Button>
                </LinhKienModal>
              </div>
            </ComponentTable>
          </div>

          {/* Categories Sidebar */}
        </div>
      </div>
      <div className="md:w-64 bg-white min-h-full p-4 rounded-md shadow">
        <h2 className="text-lg font-semibold mb-4">Phân loại linh kiện</h2>
        <div className="flex flex-wrap gap-2">
          {componentCategories.map((category) => (
            <Badge
              key={category.id}
              variant="outline"
              className="hover:bg-muted cursor-pointer rounded-2xl"
            >
              {category.name}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
