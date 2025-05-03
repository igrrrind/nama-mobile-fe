import { AccessoryTable } from "@/components/admin/tables/AccessoryTable";
import { accessories, accessoryCategories } from "@/constants/adminData";
import { Button } from "@/components/ui/button";
import { PlusCircle, FolderPlus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import AccessoryCategoryModal from "@/components/admin/modals/AccessoryCategoryModal";
import AccessoryModal from "@/components/admin/modals/AccessoryModal";
import { modelService } from "@/lib/api/services/model.service";
import { Model } from "@/types/model.interface";
// import AccessoryModal from "@/components/admin/modals/AccessoryModal"; // Uncomment if you have this modal

export default async function AccessoriesPage() {
  const res = await modelService.getModels();
  const models: Model[] = res.result?.data || [];
  const data = accessories;

  return (
    <div className="flex flex-1 h-full w-full">
      <div className="p-6 flex-1">
        {/* Header with Buttons */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <h1 className="text-2xl font-bold">Quản lý phụ kiện</h1>
        </div>

        {/* Main content: Table + Side Categories */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Accessory Table */}
          <div className="flex-1">
            <AccessoryTable data={data}>
              <div className="flex gap-2">
               <AccessoryCategoryModal>
                <Button variant={"secondary"} className="flex outline items-center gap-2">
                  <FolderPlus className="w-5 h-5" />
                  Thêm phân loại
                </Button>
              </AccessoryCategoryModal>
                
                <AccessoryModal
                  models={models}
                  accessoryCategories={accessoryCategories}
                  description="Điền đầy đủ thông tin để đăng bán phụ kiện"
                  title="Thêm phụ kiện mới"
                >
                  <Button className="flex items-center gap-2 bg-gradient-to-r from-primary to-primary/80 text-white">
                    <PlusCircle className="w-5 h-5" />
                    Thêm phụ kiện mới
                  </Button>
                </AccessoryModal>
               
              </div>
            </AccessoryTable>
          </div>

          {/* Categories Sidebar */}
        </div>
      </div>
      <div className="md:w-64 bg-white min-h-full p-4 rounded-md shadow">
        <h2 className="text-lg font-semibold mb-4">Phân loại phụ kiện</h2>
        <div className="flex flex-wrap gap-2">
          {accessoryCategories.map((category) => (
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