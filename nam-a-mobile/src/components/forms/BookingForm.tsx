"use client";

import { useState } from "react";
import { CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2, User, Phone, Mail, Smartphone, FileText, Clock } from "lucide-react";

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }}>
      <CardContent className="p-5 space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label htmlFor="name" className="text-sm flex items-center gap-1.5">
              <User className="w-4 h-4 text-primary" />
              <span>Họ và tên</span>
            </Label>
            <Input id="name" name="name" placeholder="Nhập họ và tên" required className="rounded-lg h-10" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="phone" className="text-sm flex items-center gap-1.5">
              <Phone className="w-4 h-4 text-primary" />
              <span>Số điện thoại</span>
            </Label>
            <Input id="phone" name="phone" type="tel" placeholder="Nhập số điện thoại" required className="rounded-lg h-10" />
          </div>
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="email" className="text-sm flex items-center gap-1.5">
            <Mail className="w-4 h-4 text-primary" />
            <span>Email</span>
          </Label>
          <Input id="email" name="email" type="email" placeholder="Nhập email" required className="rounded-lg h-10" />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="device" className="text-sm flex items-center gap-1.5">
            <Smartphone className="w-4 h-4 text-primary" />
            <span>Thiết bị cần sửa</span>
          </Label>
          <Select name="device" required>
            <SelectTrigger className="rounded-lg h-10">
              <SelectValue placeholder="Chọn thiết bị" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="iphone">iPhone</SelectItem>
              <SelectItem value="ipad">iPad</SelectItem>
              <SelectItem value="macbook">MacBook</SelectItem>
              <SelectItem value="android">Android</SelectItem>
              <SelectItem value="other">Khác</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="issue" className="text-sm flex items-center gap-1.5">
            <FileText className="w-4 h-4 text-primary" />
            <span>Vấn đề gặp phải</span>
          </Label>
          <Textarea 
            id="issue" 
            name="issue" 
            placeholder="Mô tả vấn đề thiết bị của bạn..." 
            rows={3} 
            required 
            className="rounded-lg resize-none"
          />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="time" className="text-sm flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-primary" />
            <span>Thời gian mong muốn</span>
          </Label>
          <Input 
            id="time" 
            name="time" 
            type="datetime-local" 
            required 
            className="rounded-lg h-10" 
          />
        </div>

        <div className="pt-2">
          <Button 
            type="submit" 
            className="w-full h-11 font-medium rounded-lg bg-primary hover:bg-primary/90"
          >
            Đặt lịch ngay
          </Button>
          
          {submitted && (
            <div className="flex items-center gap-1.5 text-green-600 bg-green-50 p-3 rounded-lg mt-3 text-sm">
              <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
              <span>Đặt lịch thành công! Chúng tôi sẽ liên hệ bạn sớm nhất.</span>
            </div>
          )}
        </div>
      </CardContent>
    </form>
  );
}