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
import { Loader2, Save } from "lucide-react";
import { CustomSelect } from "@/components/shared/CustomSelect";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { RTFEditor, DEFAULT_VIETNAMESE_CONTENT } from "@/components/shared/RTFEditor";
import { Brand } from "@/types/brand.interface";
import { Model } from "@/types/model.interface";

const formSchema = z.object({
  name: z.string().min(1, "Tên mẫu thiết bị không được để trống"),
  brandId: z.string().min(1, "Vui lòng chọn nhãn hiệu"),
  description: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function ModelModal({
  children,
  existingModel,
  brands,
  onSubmitSuccess,
}: {
  children: ReactNode;
  existingModel?: Model;
  brands: Brand[];
  onSubmitSuccess?: (data: FormData) => void;
}) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [editorContent, setEditorContent] = useState(
    existingModel?.description ?? DEFAULT_VIETNAMESE_CONTENT
  );

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: existingModel?.name ?? "",
      brandId: existingModel?.brandId ?? "",
      description: existingModel?.description ?? DEFAULT_VIETNAMESE_CONTENT,
    },
  });

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
    if (onSubmitSuccess) onSubmitSuccess(data);
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
            <TabsTrigger value="basic">Thông tin cơ bản</TabsTrigger>
            <TabsTrigger value="description">Mô tả</TabsTrigger>
          </TabsList>

          {/* Basic Info Tab */}
          <TabsContent value="basic" className="mt-4 space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tên mẫu thiết bị</FormLabel>
                  <FormControl>
                    <Input placeholder="Nhập tên mẫu thiết bị" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="brandId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nhãn hiệu</FormLabel>
                  <FormControl>
                    <CustomSelect
                      value={field.value}
                      onChange={field.onChange}
                      placeholder="Chọn nhãn hiệu..."
                      options={brands?.map((b) => ({
                        value: b.id,
                        label: b.name ?? "",
                      }))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
      title="Thêm mẫu thiết bị mới"
      trigger={children}
      FormComponent={FormComponent}
    />
  );
}