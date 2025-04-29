"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { handleNotify } from "@/utils/handleNotify";

// Define the form schema with Zod
const orderFormSchema = z.object({
  name: z.string().min(2, { message: "Tên phải có ít nhất 2 ký tự" }),
  phone: z
    .string()
    .min(10, { message: "Số điện thoại phải có ít nhất 10 số" })
    .regex(/^\d+$/, { message: "Số điện thoại chỉ được chứa các chữ số" }),
  email: z
    .string()
    .email({ message: "Email không hợp lệ" })
    .optional()
    .or(z.literal("")),
  date: z.string().optional(),
  note: z.string().optional(),
});

type OrderFormValues = z.infer<typeof orderFormSchema>;

export default function OrderForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize the form
  const form = useForm<OrderFormValues>({
    resolver: zodResolver(orderFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      date: "",
      note: "",
    },
  });

  // Handle form submission
  async function onSubmit(data: OrderFormValues) {
    try {
      setIsSubmitting(true);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log("Form submitted:", data);
      
      // Show success message
      handleNotify(
         "Đặt hàng thành công!",
        "Chúng tôi sẽ liên hệ với bạn sớm nhất có thể.",
      );
      
      // Optional: Reset form after successful submission
      form.reset();
    } catch (error) {
      console.error("Submission error:", error);
      handleNotify(
        "Đặt hàng thất bại",
        "Đã có lỗi xảy ra. Vui lòng thử lại sau.",
         "error",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>
                  Họ và tên <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Họ và tên (Bắt buộc)" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>
                  Số điện thoại <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Số điện thoại (Bắt buộc)" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>
                Email nhận thông tin - hoá đơn
              </FormLabel>
              <FormControl>
                <Input 
                  placeholder="Email nhận hoá đơn" 
                  type="email"
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>
                Thời gian nhận hàng
              </FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    type="date"
                    className="pr-10"
                    {...field}
                  />
                  <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="space-y-1">
          <p className="text-sm font-medium">Hình thức nhận hàng</p>
          <span className="font-bold">Nhận tại cửa hàng</span>
        </div>

        <FormField
          control={form.control}
          name="note"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>
                Ghi chú
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Ghi chú thêm về đơn hàng của bạn"
                  className="min-h-20"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button 
          type="submit" 
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Đang xử lý..." : "Đặt hàng"}
        </Button>
      </form>
    </Form>
  );
}