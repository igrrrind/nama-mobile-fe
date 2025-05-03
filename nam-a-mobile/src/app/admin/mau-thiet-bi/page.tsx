import { ModelType } from "@/types/enums";
import { ModelTable } from "@/components/admin/tables/ModelTable";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { modelService } from "@/lib/api/services/model.service";
import { Model } from "@/types/model.interface";
import BrandModal from "@/components/admin/modals/BrandModal";
import ModelModal from "@/components/admin/modals/ModelModal";
import { Badge } from "@/components/ui/badge";

// Mock data for each type (replace with real data)
const modelData = {
  [ModelType.Điện_thoại]: [
    { id: "1", name: "iPhone 15", brandName: "Apple" },
  ],
  [ModelType.Linh_kiện]: [
    { id: "2", name: "Pin iPhone", brandName: "Pin" },
  ],
  [ModelType.Phụ_kiện]: [
    { id: "3", name: "Ốp lưng", brandName: "Ốp"},
  ],
  [ModelType.Đồng_hồ]: [
    { id: "4", name: "Apple Watch", brandName: "Apple" },
  ],
  [ModelType.Máy_tính]: [
    { id: "5", name: "MacBook Air", brandName: "Apple" },
  ],
};

// Mock brand data (replace with real data if available)
const brandData = [
  { id: "b1", name: "Apple" },
  { id: "b2", name: "Samsung" },
  { id: "b3", name: "Xiaomi" },
];

export default async function ModelPage() {
  const res = await modelService.getModels();
  const models: Model[] = res.result?.data || [];

  return (
    <div className="flex flex-1 h-full w-full">
      <div className="p-6 flex-1">
        <h1 className="text-2xl font-bold mb-6">Quản lý các mẫu thiết bị</h1>
        <Tabs defaultValue={ModelType.Điện_thoại.toString()}>
          <TabsList className="space-x-2">
            <TabsTrigger value={ModelType.Điện_thoại.toString()}>Điện thoại</TabsTrigger>
            <TabsTrigger value={ModelType.Linh_kiện.toString()}>Linh kiện</TabsTrigger>
            <TabsTrigger value={ModelType.Phụ_kiện.toString()}>Phụ kiện</TabsTrigger>
            <TabsTrigger value={ModelType.Đồng_hồ.toString()}>Đồng hồ</TabsTrigger>
            <TabsTrigger value={ModelType.Máy_tính.toString()}>Máy tính</TabsTrigger>
          </TabsList>
          {Object.values(ModelType).map((type) => (
            <TabsContent key={type} value={type.toString()}>
              <ModelTable data={models} type={type as ModelType}>
                <div className="flex gap-2">
                  <BrandModal>
                    <Button variant={"secondary"} className="flex items-center gap-2">
                      <PlusCircle className="w-5 h-5" />
                      Thêm nhãn hiệu
                    </Button>
                  </BrandModal>
                  <ModelModal brands={brandData}>
                    <Button className="flex items-center gap-2 bg-primary text-white">
                      <PlusCircle className="w-5 h-5" />
                      Thêm mẫu thiệt bị mới
                    </Button>
                  </ModelModal>
                </div>
              </ModelTable>
            </TabsContent>
          ))}
        </Tabs>
      </div>
      {/* Brand Sidebar */}
      <div className="md:w-64 bg-white min-h-full p-4 rounded-md shadow">
        <h2 className="text-lg font-semibold mb-4">Nhãn hiệu</h2>
        <div className="flex flex-wrap gap-2">
          {brandData.map((brand) => (
            <Badge
              key={brand.id}
              variant="outline"
              className="hover:bg-muted cursor-pointer rounded-2xl"
            >
              {brand.name}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}