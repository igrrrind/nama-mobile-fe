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
import { Loader2, Save, Maximize2, Minimize2 } from "lucide-react";
import { RTFEditor, DEFAULT_VIETNAMESE_CONTENT } from "@/components/shared/RTFEditor";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Blog } from "@/types/blog.interface";
import BlogPreview from "../BlogPreview";

const formSchema = z.object({
  title: z.string().min(1, "Tiêu đề không được để trống"),
  content: z.string().min(1, "Nội dung không được để trống"),
  imageUrl: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function BlogModal({
  children,
  existingBlog,
  onSubmitSuccess,
}: {
  children: ReactNode;
  existingBlog?: Blog;
  onSubmitSuccess?: (data: FormData) => void;
}) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [editorContent, setEditorContent] = useState(
    existingBlog?.content ?? DEFAULT_VIETNAMESE_CONTENT
  );
  const [fullscreen, setFullscreen] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: existingBlog?.title ?? "",
      content: existingBlog?.content ?? DEFAULT_VIETNAMESE_CONTENT,
      imageUrl: existingBlog?.imageUrl ?? "",
    },
  });

  const handleEditorChange = (content: string) => {
    setEditorContent(content);
    form.setValue("content", content);
  };

  const onSubmit = async (data: FormData) => {
    data.content = editorContent;
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
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="basic">Thông tin cơ bản</TabsTrigger>
            <TabsTrigger value="content">Nội dung</TabsTrigger>
            <TabsTrigger value="preview">Xem trước</TabsTrigger>
          </TabsList>

          <TabsContent value="basic" className="mt-4 space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tiêu đề</FormLabel>
                  <FormControl>
                    <Input placeholder="Nhập tiêu đề bài viết" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="imageUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>URL hình ảnh (tùy chọn)</FormLabel>
                  <FormControl>
                    <Input placeholder="Nhập URL hình ảnh" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </TabsContent>

          <TabsContent value="content" className="mt-4">
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nội dung</FormLabel>
                  <FormControl>
                    <RTFEditor
                      initialContent={field.value || ""}
                      onUpdate={handleEditorChange}
                      className="h-[400px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </TabsContent>

          <TabsContent value="preview" className="mt-4 relative max-h-[400px] overflow-auto">
            <div className={fullscreen ? "fixed inset-0 z-50 bg-white overflow-auto p-4" : ""}>
              {/* <div className="flex justify-end mb-2">
                <Button
                  type="button"
                  size="icon"
                  variant="ghost"
                  onClick={() => setFullscreen((f) => !f)}
                  className="rounded-full"
                  aria-label={fullscreen ? "Thu nhỏ" : "Toàn màn hình"}
                >
                  {fullscreen ? <Minimize2 /> : <Maximize2 />}
                </Button>
              </div> */}
              <BlogPreview
                title={form.watch("title")}
                author="Bạn"
                createdAt={new Date().toISOString()}
                imageUrl={form.watch("imageUrl")}
                content={editorContent}
              />
            </div>
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
      title="Thêm bài viết mới"
      trigger={children}
      FormComponent={FormComponent}
    />
  );
}