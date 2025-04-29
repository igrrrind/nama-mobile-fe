'use client'

import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { CartSummary } from "@/components/dat-hang/Sidebar";
import OrderForm from "@/components/forms/OrderForm";

export default function DatHangPage() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-primary/5 py-4 px-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Order Information */}
          <div className="lg:col-span-2">
            <Card className="border border-gray-100">
              <CardHeader className="bg-primary text-white p-4">
                <h1 className="text-xl font-bold">Thông tin đơn hàng</h1>
                <CardDescription className="max-w-2xl text-sm text-white">
                  Vui lòng điền đầy đủ thông tin để hoàn tất đơn hàng
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <OrderForm/>
              </CardContent>
            </Card>
          </div>
          {/* Right: Cart Summary */}
          <CartSummary />
        </div>
      </div>
    </div>
  );
}