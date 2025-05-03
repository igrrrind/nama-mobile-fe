import { ServiceTable } from "@/components/admin/tables/ServiceTable";
import { services } from "@/constants/adminData";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { modelService } from "@/lib/api/services/model.service";
import { Model } from "@/types/model.interface";
import ServiceModal from "@/components/admin/modals/ServiceModal";

export default async function ServiceManagementPage() {
  const res = await modelService.getModels();
  const models: Model[] = res.result?.data || [];  const data = services;

  return (
    <div className="flex flex-1 h-full w-full">
      <div className="p-6 flex-1">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <h1 className="text-2xl font-bold">Quản lý dịch vụ sửa chữa</h1>
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <ServiceTable data={data}>
              <div className="flex gap-2">
                <ServiceModal models={models}>
                  <Button className="flex items-center gap-2 bg-primary text-white">
                    <PlusCircle className="w-5 h-5" />
                    Thêm dịch vụ mới
                  </Button>
                </ServiceModal>
              </div>
            </ServiceTable>
          </div>
        </div>
      </div>
    </div>
  );
}