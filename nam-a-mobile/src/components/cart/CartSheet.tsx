"use client";

import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetFooter } from "@/components/ui/sheet";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { mockCart } from "@/constants/data";

export default function CartSheet() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button className="relative flex items-center p-2 rounded-full hover:bg-primary-dark transition-colors cursor-pointer">
          <ShoppingCart className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {mockCart.cartItems?.length ?? 0}
          </span>
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full max-w-xs sm:max-w-sm p-0 flex flex-col">
        <SheetHeader className="border-b px-4 py-3">
          <SheetTitle>Giỏ hàng của bạn</SheetTitle>
        </SheetHeader>
        <div className="flex-1 overflow-y-auto px-4 py-2">
          {mockCart.cartItems && mockCart.cartItems.length > 0 ? (
            <ul className="divide-y">
              {mockCart.cartItems.map((item) => (
                <li key={item.id} className="flex gap-3 py-3 items-center">
                  <div className="w-16 h-16 flex-shrink-0 rounded-lg bg-gray-100 overflow-hidden relative">
                    <Image
                      src={item.product?.image || "/placeholder.png"}
                      alt={item.product?.name || "Sản phẩm"}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-sm truncate">{item.product?.name}</div>
                    <div className="text-xs text-gray-500">Số lượng: {item.quantity}</div>
                    <div className="text-primary font-semibold text-sm">
                      {item.price.toLocaleString("vi-VN")} đ
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-center text-gray-500 py-8">Giỏ hàng của bạn đang trống.</div>
          )}
        </div>
        <SheetFooter className="border-t px-4 py-3">
          <div className="flex flex-col w-full gap-2">
            <div className="flex justify-between text-base font-semibold">
              <span>Tổng cộng</span>
              <span className="text-primary">{mockCart.totalPrice.toLocaleString("vi-VN")} đ</span>
            </div>
            <Link href="/dat-hang" className="w-full">
              <Button className="w-full bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors">
                Đặt hàng
              </Button>
            </Link>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}