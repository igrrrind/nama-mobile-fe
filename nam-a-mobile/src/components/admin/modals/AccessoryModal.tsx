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
import { AccessoryCategory } from "@/types/accessory-category.interface";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Loader2,
  Save,
  X,
  Image as ImageIcon,
  MessageCircleWarningIcon,
} from "lucide-react";
import { Accessory } from "@/types";
import { Model } from "@/types/model.interface";
import { CustomSelect } from "@/components/shared/CustomSelect";
import { TabsContent } from "@radix-ui/react-tabs";
import { DEFAULT_VIETNAMESE_CONTENT, RTFEditor } from "@/components/shared/RTFEditor";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const formSchema = z.object({
  name: z.string().min(1, "Tên phụ kiện không được để trống"),
  price: z.coerce.number().min(0, "Giá phải lớn hơn hoặc bằng 0"),
  stock: z.coerce.number().min(0, "Tồn kho phải lớn hơn hoặc bằng 0"),
  modelId: z.string().min(1, "Vui lòng chọn mẫu thiết bị"),
  accessoryCategoryId: z.string().min(1, "Vui lòng chọn phân loại"),
  description: z.string().optional(),
  image: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

interface AccessoryModalProps {
  title: string;
  description: string;
  children: ReactNode;
  models: Model[];
  accessoryCategories: AccessoryCategory[];
  existingAccessory?: Accessory;
}

export default function AccessoryModal({
  title,
  description,
  models,
  children,
  accessoryCategories,
  existingAccessory,
}: AccessoryModalProps) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(
    existingAccessory?.image ?? null
  );

  const [editorContent, setEditorContent] = useState(
    existingAccessory?.description ?? ""
  );

  const form = useForm<FormData>({
    mode: "onChange",
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: existingAccessory?.name ?? "",
      price: existingAccessory?.price ?? 0,
      stock: existingAccessory?.stock ?? 0,
      modelId: existingAccessory?.modelId ?? undefined,
      accessoryCategoryId: existingAccessory?.accessoryCategoryId ?? "",
      description: existingAccessory?.description ?? DEFAULT_VIETNAMESE_CONTENT,
      image: existingAccessory?.image ?? "",
    },
  });

  // Update preview when image URL changes
  const handleImageChange = (url: string) => {
    form.setValue("image", url);
    setPreviewImage(url);
  };

  const handleEditorChange = (content: string) => {
    setEditorContent(content);
    form.setValue("description", content);
  };

  const onSubmit = async (data: FormData) => {
    data.description = editorContent;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setOpen(false);
    form.reset();
  };

  const closeModal = () => {
    form.reset();
    setOpen(false);
  };

  const FormComponent = (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <Tabs defaultValue="basic" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="basic">
              <MessageCircleWarningIcon />
              Thông tin cơ bản
            </TabsTrigger>
            <TabsTrigger value="description">
              Mô tả riêng cho linh kiện
            </TabsTrigger>
          </TabsList>

          {/* Basic Info Tab */}
          <TabsContent value="basic" className="mt-4 space-y-4">
            <div className="grid grid-cols-1 gap-6">
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tên phụ kiện</FormLabel>
                      <FormControl>
                        <Input placeholder="Nhập tên phụ kiện" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-2 gap-4">
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

                  <FormField
                    control={form.control}
                    name="accessoryCategoryId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phân loại</FormLabel>
                        <FormControl>
                          <CustomSelect
                            value={field.value}
                            onChange={field.onChange}
                            placeholder="Chọn phân loại..."
                            options={accessoryCategories?.map((cat) => ({
                              value: cat.id,
                              label: cat.name ?? "",
                            }))}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
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
            </div>

            {/* Image section */}
            <div className="space-y-4">
              <h3 className="font-medium">Hình ảnh phụ kiện</h3>
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
                      <FormDescription>
                        Nhập URL hình ảnh đại diện cho phụ kiện
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Card className="p-4 flex flex-col items-center justify-center">
                  {previewImage ? (
                    <div className="relative w-full">
                      <img
                        src={previewImage}
                        alt="Accessory preview"
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
          </TabsContent>
          <TabsContent value="description" className="mt-4 h-[400px]">
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="h-full">
                  <FormControl>
                    <RTFEditor
                      initialContent={field.value || ""}
                      onUpdate={handleEditorChange}
                      className="h-full"
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
          </TabsContent>
        </Tabs>

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
      title={title}
      description={description}
      trigger={children}
      FormComponent={FormComponent}
    />
  );
}
