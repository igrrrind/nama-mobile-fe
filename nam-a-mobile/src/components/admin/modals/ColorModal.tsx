"use client";
import { ReactNode, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormModal } from "@/components/shared/FormModal";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().min(1, "Tên màu không được để trống"),
  imageUrl: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function ColorModal({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", imageUrl: "" },
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setOpen(false);
  };

  const FormComponent = (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
         <div className="space-y-5">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tên màu</FormLabel>
              <FormControl>
                <Input placeholder="Nhập tên màu" {...field} />
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
        </div>
        <div className="flex justify-end mt-4">
          <Button type="button" variant="outline" onClick={() => setOpen(false)}>
            Hủy
          </Button>
          <Button type="submit" className="ml-2" disabled={loading}>
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
      title="Thêm màu mới"
      trigger={children}
      FormComponent={FormComponent}
    />
  );
}