import BookingForm from "@/components/forms/BookingForm";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { CheckCircle2, MapPin, Phone, Mail, Clock } from "lucide-react";

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-primary/5 py-8 px-4">
      <div className="container mx-auto px-4">
        {/* Header */}

        {/* Main Content - Form Takes Priority */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Form - Takes 2/3 of the space */}
          <Card className="md:col-span-2 bg-white shadow-md rounded-2xl border border-gray-100">
            <CardHeader className="bg-primary text-white p-4">
              <h1 className="text-xl font-bold">Đặt lịch sửa chữa</h1>
              <CardDescription className="max-w-2xl text-sm text-white">
            Vui lòng điền thông tin để đặt lịch sửa chữa. Chúng tôi sẽ liên hệ xác nhận trong thời gian sớm nhất
          </CardDescription>
            </CardHeader>
            <BookingForm />
          </Card>

          {/* Side Panel - Takes 1/3 of the space */}
          <div className="space-y-4 sticky top-4">
            {/* Service Info */}
            <Card className="bg-white/80 shadow-sm rounded-xl border border-gray-100 py-1">
              <CardContent className="p-4">
                <h3 className="text-lg text-primary mb-3 font-bold">Dịch vụ của chúng tôi</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                    <span>Sửa chữa nhanh chóng trong vòng 24h</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                    <span>Bảo hành dài hạn cho các linh kiện thay thế</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                    <span>Đội ngũ kỹ thuật viên chuyên nghiệp</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                    <span>Báo giá minh bạch trước khi sửa chữa</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Combined Location Info */}
            <Card className="bg-primary/5 shadow-sm rounded-xl border border-primary/10 !py-1">
              <CardContent className="p-4">
                <h3 className="text-lg text-primary mb-3 font-bold">Chi nhánh Nam Á</h3>
                
                <div className="space-y-4 text-sm text-gray-700">
                  {/* Trụ sở chính */}
                  <div className="pb-3 border-b border-gray-200">
                    <p className="font-medium mb-1">Trụ sở chính:</p>
                    <div className="ml-4 space-y-1">
                      <p className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>775 Đường 3/2, P.7, Q.10, TP.HCM</span>
                      </p>
                    </div>
                  </div>
                  
                  {/* Chi nhánh */}
                  <div className="pb-3 border-b border-gray-200">
                    <p className="font-medium mb-1">Chi nhánh:</p>
                    <div className="ml-4 space-y-1">
                      <p className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>164 Cây Keo, Hiệp Tân, Tân Phú</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>174 Tô Hiệu, Hiệp Tân, Tân Phú</span>
                      </p>
                    </div>
                  </div>
                  
                  {/* Liên hệ */}
                  <div>
                    <p className="font-medium mb-1">Liên hệ:</p>
                    <div className="ml-4 space-y-1">
                      <p className="flex items-start gap-2">
                        <Phone className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>0937 356 999 - 0902 01 07 07</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <Mail className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>didongnama@gmail.com</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <Clock className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>8:00 - 19:00 (Thứ 2 - Chủ nhật)</span>
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}