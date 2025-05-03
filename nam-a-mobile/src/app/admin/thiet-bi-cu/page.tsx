import { ProductTable } from "@/components/admin/tables/ProductTable";
import { products, colors, conditions, storages } from "@/constants/adminData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Palette, Layers, HardDrive, PlusCircle } from "lucide-react";

import ColorModal from "@/components/admin/modals/ColorModal";
import ConditionModal from "@/components/admin/modals/ConditionModal";
import StorageModal from "@/components/admin/modals/StorageModal";
import UsedDevicesModal from "@/components/admin/modals/UsedDevicesModal";
import { modelService } from "@/lib/api/services/model.service";
import { Model } from "@/types/model.interface";

export default async function UsedDevicesPage() {
  const res = await modelService.getModels();
  const models: Model[] = res.result?.data || [];
  const data = products;

  return (
    <div className="flex flex-1 h-full w-full">
      <div className="p-6 flex-1">
        {/* Header with action buttons */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <h1 className="text-2xl font-bold">Quản lý thiết bị cũ</h1>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
          <ProductTable data={data}>
          <div className="flex gap-2">
            <ColorModal>
            <Button variant={"secondary"} className="flex items-center gap-2">
            <PlusCircle className="w-5 h-5" />
                Màu
              </Button>
            </ColorModal>

            <ConditionModal>
            <Button  variant={"secondary"} className="flex items-center gap-2">
                <PlusCircle className="w-5 h-5" />
                Trạng thái
              </Button>
            </ConditionModal>

            <StorageModal>
             <Button variant={"secondary"} className="flex items-center gap-2">
                <PlusCircle className="w-5 h-5" />
                Định dạng dung lượng
              </Button>
            </StorageModal>
            <UsedDevicesModal models={models}>
              <Button className="flex items-center gap-2">
                <PlusCircle className="w-5 h-5" />
                Thêm thiết bị
              </Button>
            </UsedDevicesModal>
          </div>
          </ProductTable>
          </div>
        </div>

        {/* Main content */}
      </div>

      {/* Sidebar */}
      <div className="md:w-64 bg-white min-h-full p-4 rounded-md shadow">
        <h2 className="text-lg font-semibold mb-3">Màu sắc</h2>
        <div className="flex flex-wrap gap-2 mb-4">
          {colors.map((color) => (
            <Badge key={color.id} variant="outline" className="rounded-2xl cursor-pointer hover:bg-muted">
              {color.name}
            </Badge>
          ))}
        </div>

        <h2 className="text-lg font-semibold mb-3">Trạng thái</h2>
        <div className="flex flex-wrap gap-2 mb-4">
          {conditions.map((condition) => (
            <Badge key={condition.id} variant="outline" className="rounded-2xl cursor-pointer hover:bg-muted">
              {condition.name}
            </Badge>
          ))}
        </div>

        <h2 className="text-lg font-semibold mb-3">Dung lượng</h2>
        <div className="flex flex-wrap gap-2">
          {storages.map((storage) => (
            <Badge key={storage.id} variant="outline" className="rounded-2xl cursor-pointer hover:bg-muted">
              {storage.name}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
