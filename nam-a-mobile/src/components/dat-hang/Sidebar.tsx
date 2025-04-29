import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Separator } from "../ui/separator";
import { mockCart } from "@/constants/data";



export const CartSummary = () => {  
    return (
        <div>
            <Card>
              <CardHeader>
                <CardTitle>Đơn hàng của bạn</CardTitle>
                <CardDescription>Các sản phẩm đã chọn</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockCart.cartItems?.map((item) => (
                    <div key={item.id} className="flex gap-3">
                      <div className="w-16 h-16 relative rounded-md overflow-hidden bg-gray-100 flex-shrink-0">
                        <Image
                          src={item.product?.image || "/placeholder.png"}
                          alt={item.product?.name || "Sản phẩm"}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm">{item.product?.name}</div>
                        <div className="text-xs text-gray-500">Số lượng: {item.quantity}</div>
                        <div className="text-primary font-semibold text-sm">
                          {item.price.toLocaleString("vi-VN")}đ
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <Separator className="my-4" />

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Tạm tính:</span>
                    <span>{mockCart.totalPrice.toLocaleString("vi-VN")}đ</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Phí vận chuyển:</span>
                    <span>0đ</span>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between font-semibold">
                    <span>Tổng cộng:</span>
                    <span className="text-primary">{mockCart.totalPrice.toLocaleString("vi-VN")}đ</span>
                  </div>
                </div>
              </CardContent>
              {/* <CardFooter>
                <Button className="w-full bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors">
                  Tiến hành đặt hàng
                </Button>
              </CardFooter> */}
            </Card>
          </div>
    )
}