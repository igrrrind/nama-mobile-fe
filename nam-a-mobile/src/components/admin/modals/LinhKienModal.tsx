"use client";
import { FormModal } from "@/components/shared/FormModal";
import { ReactNode, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Component } from "@/types";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  DEFAULT_VIETNAMESE_CONTENT,
  RTFEditor,
} from "@/components/shared/RTFEditor";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"; // Add Tabs components
import { MessageCircleWarningIcon } from "lucide-react";
import { ComponentCategory } from "@/types/component-category.interface";
import { CustomSelect } from "@/components/shared/CustomSelect";
import { Model } from "@/types/model.interface";

interface LinhKienModalProps {
  readonly title: string;
  readonly description: string;
  readonly children: ReactNode;
  componentCategories: ComponentCategory[];
  models: Model[]
  readonly existingComponent?: Component;
}

const formSchema = z.object({
  name: z.string().min(1, "Tên không được để trống"),
  price: z.number().min(0, "Giá phải lớn hơn hoặc bằng 0"),
  stock: z.number().min(0, "Tồn kho phải lớn hơn hoặc bằng 0"),
  componentCategoryId: z.string().min(1, "Vui lòng chọn danh mục"),
  modelId: z.string().min(1, "Vui lòng chọn mẫu sản phẩm"),
  origin: z.string().min(1, "Nguồn gốc sản phẩm không được để trống"),
  description: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function LinhKienModal({
  title,
  children,
  existingComponent,
  description,
  componentCategories,
  models
}: LinhKienModalProps) {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [editorContent, setEditorContent] = useState(
    existingComponent?.description ?? ""
  );

  const form = useForm<FormData>({
    mode:"onChange",
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: existingComponent?.name ?? "",
      price: existingComponent?.price ?? 0,
      stock: existingComponent?.stock ?? 0,
      componentCategoryId: existingComponent?.componentCategoryId ?? undefined,
      modelId: existingComponent?.modelId ?? undefined,
      description: existingComponent?.description ?? DEFAULT_VIETNAMESE_CONTENT,
      origin: existingComponent?.origin ?? "",
    },
  });

  const onSubmit = async (data: FormData) => {
    data.description = editorContent;
    setLoading(true);
    try {
      console.log("Form submitted:", data);
      await new Promise((resolve) => setTimeout(resolve, 2000));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const errors = form.formState.errors;
    if (Object.keys(errors).length > 0) {
      console.log("Form Errors:", errors);
    }
  }, [form.formState.errors]);

  const handleEditorChange = (content: string) => {
    setEditorContent(content);
    form.setValue("description", content);
  };

  const FormComponent = (
    <Form {...form}>
      <form className="h-full" onSubmit={form.handleSubmit(onSubmit)}>
        <Tabs defaultValue="basic" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="basic">
              <MessageCircleWarningIcon />
              Thông tin cơ bản
            </TabsTrigger>
            <TabsTrigger value="description">Mô tả riêng cho linh kiện</TabsTrigger>
          </TabsList>

          {/* Basic Info Tab */}
          <TabsContent value="basic" className="mt-4">
            <div className="space-y-5 h-[400px]">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-medium text-sm">
                      Tên linh kiện
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Nhập tên linh kiện"
                        className="shadow-sm"
                        {...field}
                      />
                    </FormControl>
                    {/* <p className="text-xs text-gray-500">
                      Tên không được để trống
                    </p> */}
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="componentCategoryId"
                render={({ field, fieldState: { error } }) => (
                  <FormItem>
                    <FormLabel className="font-medium text-sm">
                      Danh mục linh kiện
                    </FormLabel>
                    <FormControl>
                      <CustomSelect
                        value={field.value}
                        onChange={field.onChange}
                        placeholder="Chọn danh mục..."
                        options={componentCategories.map(category => ({
                          value: category.id,
                          label: category.name ?? "",
                        }))}
                        className={error ? "shadow-sm border-red-500 focus:ring-red-500" : "shadow-sm"}
                      />
                    </FormControl>
                    {/* Commenting out helper text to match screenshot */}
                    {/* <p className="text-xs text-gray-500">
                      Vui lòng chọn danh mục
                    </p> */}
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

<FormField
                control={form.control}
                name="modelId"
                render={({ field, fieldState: { error } }) => (
                  <FormItem>
                    <FormLabel className="font-medium text-sm">
                      Mẫu linh kiện
                    </FormLabel>
                    <FormControl>
                      <CustomSelect
                        value={field.value}
                        onChange={field.onChange}
                        placeholder="Chọn mẫu linh kiện..."
                        options={models.map(model => ({
                          value: model.id,
                          label: model.name ?? "",
                        }))}
                        className={error ? "shadow-sm border-red-500 focus:ring-red-500" : "shadow-sm"}
                      />
                    </FormControl>
                    {/* Commenting out helper text to match screenshot */}
                    {/* <p className="text-xs text-gray-500">
                      Vui lòng chọn danh mục
                    </p> */}
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium text-sm">Giá</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                            ₫
                          </span>
                          <Input
                            type="number"
                            className="pl-8 shadow-sm"
                            {...field}
                            onChange={(e) =>
                              field.onChange(Number(e.target.value))
                            }
                          />
                        </div>
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="stock"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium text-sm">
                        Tồn kho
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          className="shadow-sm"
                          {...field}
                          onChange={(e) =>
                            field.onChange(Number(e.target.value))
                          }
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </TabsContent>

          {/* Description Tab */}
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

        <div className="flex justify-end space-x-2 mt-4">
          <Button
            variant="outline"
            type="button"
            onClick={() => setOpen(false)}
          >
            Hủy
          </Button>
          <Button
            onClick={form.handleSubmit(onSubmit)}
            disabled={loading}
            type="button"
          >
            {loading ? "Đang lưu..." : "Lưu"}
          </Button>
        </div>
      </form>
    </Form>
  );

  return (
    <FormModal
      open={open}
      setOpen={setOpen}
      description={description}
      trigger={children}
      title={title}
      FormComponent={FormComponent}
    />
  );
}
