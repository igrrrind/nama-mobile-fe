"use client";
import { useState, ReactNode } from "react";
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
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2, Save, Plus, Trash2 } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { RTFEditor, DEFAULT_VIETNAMESE_CONTENT } from "@/components/shared/RTFEditor";
import { Model } from "@/types/model.interface";
import { Service } from "@/types";
import { CustomSelect } from "@/components/shared/CustomSelect";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const formSchema = z.object({
  serviceName: z.string().min(1, "Tên dịch vụ không được để trống"),
  description: z.string().optional(),
  prices: z
    .array(
      z.object({
        modelId: z.string().min(1, "Chọn mẫu thiết bị"),
        price: z.coerce.number().min(0, "Giá phải lớn hơn hoặc bằng 0"),
      })
    )
    .min(1, "Cần ít nhất một giá cho mẫu thiết bị"),
});

type FormData = z.infer<typeof formSchema>;

interface ServiceModalProps {
  children: ReactNode;
  models: Model[];
  existingService?: Service;
  onSubmitSuccess?: (data: FormData) => void;
}

export default function ServiceModal({
  children,
  models,
  existingService,
  onSubmitSuccess,
}: ServiceModalProps) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [editorContent, setEditorContent] = useState(
    existingService?.description ?? DEFAULT_VIETNAMESE_CONTENT
  );

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      serviceName: existingService?.serviceName ?? "",
      description: existingService?.description ?? DEFAULT_VIETNAMESE_CONTENT,
      prices: existingService?.prices ?? [
        { modelId: "", price: 0 }
      ],
    },
  });

  const handleEditorChange = (content: string) => {
    setEditorContent(content);
    form.setValue("description", content);
  };

  const handleAddPrice = () => {
    const prices = form.getValues("prices") || [];
    form.setValue("prices", [...prices, { modelId: "", price: 0 }]);
  };

  const handleRemovePrice = (idx: number) => {
    const prices = form.getValues("prices") || [];
    form.setValue(
      "prices",
      prices.filter((_, i) => i !== idx)
    );
  };

  const onSubmit = async (data: FormData) => {
    data.description = editorContent;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setOpen(false);
    form.reset();
    if (onSubmitSuccess) onSubmitSuccess(data);
  };

  const closeModal = () => {
    form.reset();
    setOpen(false);
  };

  const modelsWithoutExistingOptions = (currentId: string) => {
    const prices = form.getValues("prices");
    return models.filter(
      (model) =>
        model.id === currentId || !prices.some((price) => price.modelId === model.id)
    );
  };

  const FormComponent = (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <Tabs defaultValue="basic" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="basic">Thông tin cơ bản</TabsTrigger>
            <TabsTrigger value="description">Mô tả</TabsTrigger>
          </TabsList>

          {/* Basic Info Tab */}
          <TabsContent value="basic" className="mt-4 space-y-4">
            <FormField
              control={form.control}
              name="serviceName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tên dịch vụ</FormLabel>
                  <FormControl>
                    <Input placeholder="Nhập tên dịch vụ" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Card className="p-4">
              <FormLabel className="font-semibold mb-2 block">Bảng giá & thời gian bảo hành theo mẫu thiết bị</FormLabel>
              <FormField
                control={form.control}
                name="prices"
                render={({ field }) => (
                  <div className="space-y-3">
                    {field.value.map((item, idx) => (
                      <div key={idx} className="flex flex-col md:flex-row gap-2 items-center">
                        <div className="w-full md:w-1/2">
                          <CustomSelect
                            value={item.modelId}
                            onChange={val => {
                              const prices = [...field.value];
                              prices[idx].modelId = val;
                              field.onChange(prices);
                            }}
                            placeholder="Chọn mẫu thiết bị"
                            options={modelsWithoutExistingOptions(item.modelId).map((m) => ({
                              value: m.id,
                              label: m.name ?? "",
                            }))}
                          />
                        </div>
                        <div className="relative w-full md:w-32">
                          <Input
                            type="text"
                            inputMode="numeric"
                            placeholder="Giá"
                            value={item.price}
                            onChange={e => {
                              const prices = [...field.value];
                              prices[idx].price = Number(e.target.value);
                              field.onChange(prices);
                            }}
                            className="pr-8"
                          />
                          <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">đ</span>
                        </div>
                        <div className="relative w-full md:w-24">
                          <Input
                            type="text"
                            inputMode="numeric"
                            placeholder="Giá"
                            value={item.price}
                            onChange={e => {
                              const prices = [...field.value];
                              prices[idx].price = Number(e.target.value);
                              field.onChange(prices);
                            }}
                            className="pr-8"
                          />
                          <span className="text-sm absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">tháng</span>
                        </div>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          onClick={() => handleRemovePrice(idx)}
                          disabled={field.value.length === 1}
                          className="text-destructive"
                          title="Xóa dòng"
                        >
                          <Trash2 size={18} />
                        </Button>
                      </div>
                    ))}
                    <Separator />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleAddPrice}
                      className="flex items-center gap-2"
                    >
                      <Plus size={16} />
                      Thêm dòng giá
                    </Button>
                  </div>
                )}
              />
            </Card>
          </TabsContent>

          {/* Description Tab */}
          <TabsContent value="description" className="mt-4">
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
      title="Thêm dịch vụ mới"
      trigger={children}
      FormComponent={FormComponent}
    />
  );
}