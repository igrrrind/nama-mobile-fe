"use client";
import { useState, ReactNode } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormModal } from "@/components/shared/FormModal";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2, Save } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(1, "Tên nhãn hiệu không được để trống"),
});

type FormData = z.infer<typeof formSchema>;

export default function BrandModal({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "" },
  });

  const onSubmit = async (data: FormData) => {
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
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tên nhãn hiệu</FormLabel>
              <FormControl>
                <Input placeholder="Nhập tên nhãn hiệu" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end space-x-4 pt-4">
          <Button type="button" variant="outline" onClick={closeModal} disabled={loading}>
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
      title="Thêm nhãn hiệu"
      trigger={children}
      FormComponent={FormComponent}
    />
  );
}