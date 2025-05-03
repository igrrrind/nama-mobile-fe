"use client";
import { ReactNode, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormModal } from "@/components/shared/FormModal";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Product } from "@/types/product.interface";
import { Loader2, Save, X, Image as ImageIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";

// You may want to pass these as props for dynamic options
import { colors, conditions, storages } from "@/constants/adminData";
import { CustomSelect } from "@/components/shared/CustomSelect";
import { Model } from "@/types/model.interface";

const formSchema = z.object({
  name: z.string().min(1, "Tên thiết bị không được để trống"),
  price: z.coerce.number().min(0, "Giá phải lớn hơn hoặc bằng 0"),
  stock: z.coerce.number().min(0, "Tồn kho phải lớn hơn hoặc bằng 0"),
  colorId: z.string().min(1, "Vui lòng chọn màu sắc"),
  modelId:  z.string().min(1, "Vui lòng chọn mẫu thiết bị"),
  conditionId: z.string().min(1, "Vui lòng chọn trạng thái"),
  storageId: z.string().min(1, "Vui lòng chọn dung lượng"),
  image: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function UsedDevicesModal({
  children,
  existingProduct,
  models,
  onSubmitSuccess,
}: {
  children: ReactNode;
  existingProduct?: Product;
   models: Model[];
  onSubmitSuccess?: (data: FormData) => void;
}) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(
    existingProduct?.image ?? null
  );

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
    //   name: existingProduct?.name ?? "",
      price: existingProduct?.price ?? 0,
      stock: existingProduct?.stock ?? 0,
      colorId: existingProduct?.colorId ?? "",
      modelId: existingProduct?.modelId ?? "",
      conditionId: existingProduct?.conditionId ?? "",
      storageId: existingProduct?.storageId ?? "",
      image: existingProduct?.image ?? "",
    },
  });

  const generateProductName = (modelId: string, storageId: string, colorId: string, conditionId: string): string => {
    if (!modelId || !storageId || !colorId || !conditionId) {
      return "Chọn các thông số để xem tên thiết bị";
    }
    
    const model = models.find(m => m.id === modelId);
    const storage = storages.find(s => s.id === storageId);
    const color = colors.find(c => c.id === colorId);
    const condition = conditions.find(c => c.id === conditionId);
    
    let name = "";
    
    if (model) name += model.name;
    if (storage) name += name ? ` ${storage.name}` : storage.name;
    if (color) name += name ? ` ${color.name}` : color.name;
    if (condition) name += name ? ` (${condition.name})` : condition.name;
    
    return name || "Chưa đủ thông tin";
  };
  
  // Update preview when image URL changes
  const handleImageChange = (url: string) => {
    form.setValue("image", url);
    setPreviewImage(url);
  };

  const onSubmit = async (data: FormData) => {
    try {
      setLoading(true);
      // Simulate API request
      await new Promise((r) => setTimeout(r, 1000));
      
      if (onSubmitSuccess) {
        onSubmitSuccess(data);
      }
      
      setOpen(false);
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    form.reset();
    setOpen(false);
  };

  const FormComponent = (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left column: Basic info */}
          <div className="space-y-4">
            <h3 className="font-medium">Thông tin cơ bản</h3>
            <Separator className="my-2" />
            
            <FormItem>
              <FormLabel>Tên thiết bị</FormLabel>
              <FormControl>
                <Input 
                  readOnly 
                  value={generateProductName(form.watch("modelId"), form.watch("storageId"), form.watch("colorId"), form.watch("conditionId"))}
                  className="bg-gray-50 cursor-not-allowed"
                />
              </FormControl>
              <FormDescription>Tên thiết bị được tạo tự động</FormDescription>
            </FormItem>

            <FormField
              control={form.control}
              name="modelId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mẫu thiết bị</FormLabel>
                  <FormControl>
                    <CustomSelect
                      value={field.value}
                      onChange={field.onChange}
                      placeholder="Chọn mẫu thiết bị..."
                      options={models?.map((model) => ({
                        value: model.id,
                        label: model.name ?? "",
                      }))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="grid grid-cols-2 gap-4">
  <FormField
    control={form.control}
    name="price"
    render={({ field }) => (
      <FormItem className="flex flex-col">
        <FormLabel>Giá (VNĐ)</FormLabel>
        <FormControl>
          <Input
            type="text"
            inputMode="numeric"
            placeholder="Nhập giá"
            {...field}
            onChange={(e) => field.onChange(e.target.value)}
          />
        </FormControl>
        <FormMessage className="min-h-[1.25rem]" />
      </FormItem>
    )}
  />

  <FormField
    control={form.control}
    name="stock"
    render={({ field }) => (
      <FormItem className="flex flex-col">
        <FormLabel>Tồn kho</FormLabel>
        <FormControl>
          <Input
            type="text"
            inputMode="numeric"
            placeholder="Nhập số lượng"
            {...field}
            onChange={(e) => field.onChange(e.target.value)}
          />
        </FormControl>
        <FormMessage className="min-h-[1.25rem]" />
      </FormItem>
    )}
  />
</div>

          </div>
          
          {/* Right column: Specifications */}
          <div className="space-y-4">
            <h3 className="font-medium">Thông số kỹ thuật</h3>
            <Separator className="my-2" />
            
            <FormField
              control={form.control}
              name="colorId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Màu sắc</FormLabel>
                  <FormControl>
                    <CustomSelect
                      value={field.value}
                      onChange={field.onChange}
                      placeholder="Chọn màu sắc..."
                      options={colors.map((color) => ({
                        value: color.id,
                        label: color.name ?? "",
                      }))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="conditionId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Trạng thái</FormLabel>
                  <FormControl>
                    <CustomSelect
                      value={field.value}
                      onChange={field.onChange}
                      placeholder="Chọn trạng thái..."
                      options={conditions.map((condition) => ({
                        value: condition.id,
                        label: condition.name ?? "",
                      }))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="storageId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Dung lượng</FormLabel>
                  <FormControl>
                    <CustomSelect
                      value={field.value}
                      onChange={field.onChange}
                      placeholder="Chọn dung lượng..."
                      options={storages.map((storage) => ({
                        value: storage.id,
                        label: storage.name ?? "",
                      }))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        
        {/* Image section */}
        <div className="space-y-4">
          <h3 className="font-medium">Hình ảnh sản phẩm</h3>
          <Separator className="my-2" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>URL hình ảnh</FormLabel>
                  <FormControl>
                    <div className="flex space-x-2">
                      <Input 
                        placeholder="Nhập URL hình ảnh" 
                        value={field.value || ""}
                        onChange={(e) => handleImageChange(e.target.value)}
                      />
                    </div>
                  </FormControl>
                  <FormDescription>Nhập URL hình ảnh đại diện cho sản phẩm</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Card className="p-4 flex flex-col items-center justify-center">
              {previewImage ? (
                <div className="relative w-full">
                  <img 
                    src={previewImage} 
                    alt="Product preview" 
                    className="object-contain w-full h-40 rounded-md" 
                    onError={() => setPreviewImage(null)}
                  />
                  <Button
                    type="button"
                    size="sm"
                    variant="destructive"
                    className="absolute top-2 right-2"
                    onClick={() => {
                      setPreviewImage(null);
                      form.setValue("image", "");
                    }}
                  >
                    <X size={16} />
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-40 w-full border-2 border-dashed rounded-md text-gray-400">
                  <ImageIcon size={48} />
                  <p className="mt-2 text-sm">Xem trước hình ảnh</p>
                </div>
              )}
            </Card>
          </div>
        </div>
        
        <div className="flex justify-end space-x-4 pt-4">
          <Button
            type="button"
            variant="outline"
            onClick={closeModal}
            disabled={loading}
          >
            Hủy
          </Button>
          <Button type="submit" disabled={loading} className="min-w-[100px]">
            {loading ? (
              <div className="flex items-center">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Đang lưu...
              </div>
            ) : (
              <div className="flex items-center">
                <Save className="mr-2 h-4 w-4" />
                Lưu
              </div>
            )}
          </Button>
        </div>
      </form>
    </Form>
  );

  return (
    <FormModal
      open={open}
      setOpen={setOpen}
      title={existingProduct ? "Chỉnh sửa thiết bị" : "Thêm thiết bị cũ"}
      trigger={children}
      FormComponent={FormComponent}
    />
  );
}