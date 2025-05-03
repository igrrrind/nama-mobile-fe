// import { productService } from '@/lib/api/services/product.service';
import { ArrowRight, Badge, BatteryFull, CheckCircle, Clock, DollarSign, MessageCircle, Shield, Star, Wrench } from 'lucide-react';
import { Submenu } from '@/components/home/Submenu';
import { ServiceSection } from '@/components/home/ServicesSection';
import { mockItems, extraItems1, extraItems2 } from '@/constants/data';
import ItemCardWrapper from '@/components/shared/ItemCardWrapper';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { AvatarFallback } from '@radix-ui/react-avatar';

const featuredProducts = mockItems

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary/5 sm:py-6">
        <div className="container mx-auto sm:px-4">
          <div className='hidden sm:block'><Submenu/></div>
            <div className="sm:ml-60 xl:ml-64 flex sm:grid md:grid-cols-2 lg:grid-cols-3 md:grid-rows-3 lg:grid-rows-2 gap-4 xl:gap-8 sm:h-[400px] sm:py-4">
              <div className="w-full aspect-video sm:aspect-auto col-span-2 lg:col-span-2 row-span-2 bg-gray-200 sm:rounded-2xl"></div>
              <div className="hidden md:block bg-gray-200 rounded-2xl"></div>
              <div className="hidden sm:block col-span-2 md:col-span-1 bg-gray-200 rounded-2xl"></div>
            </div>
        </div>
      </section>

      {/* Services Section */}
      <ServiceSection />

      {/* Featured Products */}
      <ItemCardWrapper items={featuredProducts} sectionTitle='Dịch vụ sửa chữa phổ biến' gradientColor='#004de0'/>

      {/* More ItemCardWrapper Sections */}
      <ItemCardWrapper items={extraItems1} sectionTitle='Phụ kiện nổi bật' gradientColor='#00b894' type="mua-sam"/>
      <ItemCardWrapper items={extraItems2} sectionTitle='Combo ưu đãi' gradientColor='#fdcb6e' type="mua-sam"/>

      {/* Why Choose Us */}
      {/* <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Tại sao chọn Nam Á Mobile?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Wrench className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Linh kiện chính hãng</h3>
              <p className="text-gray-600">
                Cam kết sử dụng linh kiện chính hãng 100%, bảo hành dài hạn
              </p>
            </div>
            <div className="text-center">
              <Wrench className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Kỹ thuật viên giỏi</h3>
              <p className="text-gray-600">
                Đội ngũ kỹ thuật viên có trên 10 năm kinh nghiệm
              </p>
            </div>
            <div className="text-center">
              <Wrench className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Giá cả hợp lý</h3>
              <p className="text-gray-600">
                Báo giá minh bạch, cạnh tranh, không phát sinh
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* New Section: Quy trình sửa chữa */}
      {/* <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Quy trình sửa chữa</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center text-primary text-2xl font-bold">1</div>
              <h4 className="font-semibold mb-2">Tiếp nhận thiết bị</h4>
              <p className="text-gray-600">Nhận máy, kiểm tra lỗi và tư vấn giải pháp phù hợp.</p>
            </div>
            <div>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center text-primary text-2xl font-bold">2</div>
              <h4 className="font-semibold mb-2">Báo giá & xác nhận</h4>
              <p className="text-gray-600">Báo giá minh bạch, khách hàng xác nhận trước khi sửa.</p>
            </div>
            <div>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center text-primary text-2xl font-bold">3</div>
              <h4 className="font-semibold mb-2">Tiến hành sửa chữa</h4>
              <p className="text-gray-600">Kỹ thuật viên thực hiện sửa chữa nhanh chóng, chuyên nghiệp.</p>
            </div>
            <div>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center text-primary text-2xl font-bold">4</div>
              <h4 className="font-semibold mb-2">Bàn giao & bảo hành</h4>
              <p className="text-gray-600">Kiểm tra lại máy, bàn giao và hướng dẫn bảo hành.</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* New Section: Đánh giá khách hàng */}
      {/* <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Khách hàng nói gì về Nam Á Mobile?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow p-6">
              <p className="italic text-gray-700 mb-4">&quot;Dịch vụ rất chuyên nghiệp, sửa máy nhanh và giá hợp lý. Sẽ giới thiệu cho bạn bè!&quot;</p>
              <div className="font-semibold text-primary">Nguyễn Văn A</div>
            </div>
            <div className="bg-white rounded-xl shadow p-6">
              <p className="italic text-gray-700 mb-4">&quot;Nhân viên tư vấn nhiệt tình, linh kiện chính hãng, rất yên tâm khi sửa chữa tại đây.&quot;</p>
              <div className="font-semibold text-primary">Trần Thị B</div>
            </div>
            <div className="bg-white rounded-xl shadow p-6">
              <p className="italic text-gray-700 mb-4">&quot;Bảo hành rõ ràng, hỗ trợ sau sửa chữa tốt. Sẽ quay lại khi cần!&quot;</p>
              <div className="font-semibold text-primary">Lê Văn C</div>
            </div>
          </div>
        </div>
      </section> */}
      <section
        id="why-choose"
        className="py-16 relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50"
      >
        {/* <div className="absolute right-0 top-0 w-64 h-64 bg-blue-200 rounded-full -mr-32 -mt-32 opacity-20"></div>
        <div className="absolute left-0 bottom-0 w-48 h-48 bg-blue-600 rounded-full -ml-24 -mb-24 opacity-10"></div> */}

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl font-bold text-center mb-3">
              Tại sao chọn <span className="text-blue-600">Nam Á Mobile</span>?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
            <p className="mt-4 text-center text-gray-600 max-w-2xl">
              Với hơn 10 năm kinh nghiệm, chúng tôi cam kết mang đến dịch vụ sửa chữa điện thoại chất lượng cao với giá
              cả hợp lý
            </p>
          </div>

          {/* Bento Box Grid Layout for Why Choose Us */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            {/* Main Feature Card - Spans 3 columns */}
            <Card className="md:col-span-3 hover:shadow-lg transition-all border-t-4 border-blue-600">
              <CardHeader className="flex flex-row items-start space-y-0 pb-2">
                <div className="p-3 bg-blue-600/10 rounded-lg mr-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <CardTitle>Linh kiện chính hãng</CardTitle>
                  <CardDescription>Cam kết chất lượng hàng đầu</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Cam kết sử dụng linh kiện chính hãng 100%, bảo hành dài hạn lên đến 12 tháng
                </p>
                <div className="bg-gray-100 w-full h-40 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-gray-400 text-sm">Hình ảnh linh kiện</div>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">iPhone</Badge>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Samsung</Badge>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Xiaomi</Badge>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">OPPO</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-blue-600 gap-2 group">
                  Xem chứng nhận <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>
            </Card>

            {/* Secondary Feature Card - Spans 3 columns */}
            <Card className="md:col-span-3 hover:shadow-lg transition-all border-t-4 border-blue-500">
              <CardHeader className="flex flex-row items-start space-y-0 pb-2">
                <div className="p-3 bg-blue-500/10 rounded-lg mr-4">
                  <BatteryFull className="w-8 h-8 text-blue-500" />
                </div>
                <div>
                  <CardTitle>Kỹ thuật viên giỏi</CardTitle>
                  <CardDescription>Đội ngũ chuyên nghiệp</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Đội ngũ kỹ thuật viên có trên 10 năm kinh nghiệm, được đào tạo bài bản
                </p>
                <div className="bg-gray-100 w-full h-40 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-gray-400 text-sm">Hình ảnh kỹ thuật viên</div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-blue-50 p-2 rounded-lg text-center">
                    <p className="text-2xl font-bold text-blue-600">15+</p>
                    <p className="text-sm text-gray-600">Kỹ thuật viên</p>
                  </div>
                  <div className="bg-blue-50 p-2 rounded-lg text-center">
                    <p className="text-2xl font-bold text-blue-600">10+</p>
                    <p className="text-sm text-gray-600">Năm kinh nghiệm</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-blue-500 gap-2 group">
                  Gặp đội ngũ của chúng tôi{" "}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>
            </Card>

            {/* Price Card - Spans 6 columns (full width) */}
            <Card className="md:col-span-6 hover:shadow-lg transition-all">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                  <div className="p-6 flex flex-col justify-center">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-green-500/10 rounded-lg mr-4">
                        <DollarSign className="w-8 h-8 text-green-500" />
                      </div>
                      <h3 className="text-xl font-semibold">Giá cả hợp lý</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Báo giá minh bạch, cạnh tranh, không phát sinh chi phí, hoàn tiền nếu không hài lòng
                    </p>
                    <Button
                      variant="outline"
                      className="text-green-500 border-green-500 hover:bg-green-50 gap-2 mt-2 w-fit"
                    >
                      Xem bảng giá <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="md:col-span-2 bg-gray-100 p-6">
                    <h4 className="font-semibold mb-4">Bảng giá tham khảo</h4>
                    <div className="space-y-2">
                      {[
                        { service: "Thay màn hình iPhone", price: "800.000đ - 3.500.000đ" },
                        { service: "Thay pin Samsung", price: "350.000đ - 850.000đ" },
                        { service: "Sửa lỗi phần mềm", price: "200.000đ - 500.000đ" },
                        { service: "Thay camera", price: "400.000đ - 1.200.000đ" },
                      ].map((item, i) => (
                        <div key={i} className="flex justify-between py-2 border-b border-dashed">
                          <span>{item.service}</span>
                          <span className="font-medium text-green-600">{item.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quy trình sửa chữa - Bento Box Style */}
      <section id="process" className="py-16 bg-gradient-to-b from-blue-600/5 to-blue-600/10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-16 bg-white transform -skew-y-2"></div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-white transform skew-y-2"></div>

        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl font-bold text-center mb-3">Quy trình sửa chữa</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
            <p className="mt-4 text-center text-gray-600 max-w-2xl">
              Chúng tôi tuân thủ quy trình chuyên nghiệp để đảm bảo thiết bị của bạn được sửa chữa hiệu quả
            </p>
          </div>

          {/* Bento Box Grid Layout for Process */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Step 1 */}
            <Card className="hover:shadow-lg transition-all hover:-translate-y-1">
              <CardHeader className="text-center pb-2">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-600 shadow-md flex items-center justify-center text-white text-2xl font-bold">
                  1
                </div>
                <CardTitle>Tiếp nhận thiết bị</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">Nhận máy, kiểm tra lỗi và tư vấn giải pháp phù hợp.</p>
                <div className="bg-gray-100 w-full h-24 rounded-lg flex items-center justify-center mb-2">
                  <div className="text-gray-400 text-sm">Hình ảnh tiếp nhận</div>
                </div>
              </CardContent>
              <CardFooter className="justify-center">
                <Badge className="bg-blue-50">
                  <Clock className="w-3 h-3 mr-1" /> 15-30 phút
                </Badge>
              </CardFooter>
            </Card>

            {/* Step 2 */}
            <Card className="hover:shadow-lg transition-all hover:-translate-y-1 md:translate-y-4">
              <CardHeader className="text-center pb-2">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-500 shadow-md flex items-center justify-center text-white text-2xl font-bold">
                  2
                </div>
                <CardTitle>Báo giá & xác nhận</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">Báo giá minh bạch, khách hàng xác nhận trước khi sửa.</p>
                <div className="bg-gray-100 w-full h-24 rounded-lg flex items-center justify-center mb-2">
                  <div className="text-gray-400 text-sm">Hình ảnh báo giá</div>
                </div>
              </CardContent>
              <CardFooter className="justify-center">
                <Badge className="bg-blue-50">
                  <CheckCircle className="w-3 h-3 mr-1" /> Minh bạch
                </Badge>
              </CardFooter>
            </Card>

            {/* Step 3 */}
            <Card className="hover:shadow-lg transition-all hover:-translate-y-1">
              <CardHeader className="text-center pb-2">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500 shadow-md flex items-center justify-center text-white text-2xl font-bold">
                  3
                </div>
                <CardTitle>Tiến hành sửa chữa</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">Kỹ thuật viên thực hiện sửa chữa nhanh chóng, chuyên nghiệp.</p>
                <div className="bg-gray-100 w-full h-24 rounded-lg flex items-center justify-center mb-2">
                  <div className="text-gray-400 text-sm">Hình ảnh sửa chữa</div>
                </div>
              </CardContent>
              <CardFooter className="justify-center">
                <Badge className="bg-blue-50">
                  <Wrench className="w-3 h-3 mr-1" /> Chuyên nghiệp
                </Badge>
              </CardFooter>
            </Card>

            {/* Step 4 */}
            <Card className="hover:shadow-lg transition-all hover:-translate-y-1 md:translate-y-4">
              <CardHeader className="text-center pb-2">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-500 shadow-md flex items-center justify-center text-white text-2xl font-bold">
                  4
                </div>
                <CardTitle>Bàn giao & bảo hành</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">Kiểm tra lại máy, bàn giao và hướng dẫn bảo hành.</p>
                <div className="bg-gray-100 w-full h-24 rounded-lg flex items-center justify-center mb-2">
                  <div className="text-gray-400 text-sm">Hình ảnh bàn giao</div>
                </div>
              </CardContent>
              <CardFooter className="justify-center">
                <Badge className="bg-blue-50">
                  <Shield className="w-3 h-3 mr-1" /> Bảo hành 12 tháng
                </Badge>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Đánh giá khách hàng - Bento Box Style */}
      <section id="testimonials" className="py-16 relative overflow-hidden">
        <div className="absolute right-0 bottom-0 w-64 h-64 bg-yellow-200 rounded-full opacity-20"></div>
        <div className="absolute left-0 top-0 w-48 h-48 bg-blue-200 rounded-full opacity-20"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl font-bold text-center mb-3">
              Khách hàng nói gì về <span className="text-blue-600">Nam Á Mobile</span>?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
          </div>

          {/* Bento Box Grid Layout for Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            {/* Featured Testimonial - Spans 3 columns */}
            <Card className="md:col-span-3 hover:shadow-lg transition-all border-l-4 border-blue-600">
              <CardHeader>
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4 mb-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src="/placeholder.svg?height=64&width=64" />
                    <AvatarFallback className="bg-blue-100 text-blue-600">NVA</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-gray-800">Nguyễn Văn A</p>
                    <p className="text-sm text-gray-500">Khách hàng tại Hà Nội</p>
                  </div>
                </div>
                <p className="italic text-gray-700 text-lg">
                  &quot;Dịch vụ rất chuyên nghiệp, sửa máy nhanh và giá hợp lý. Sẽ giới thiệu cho bạn bè! Thái độ nhân viên
                  rất tốt, tận tình.&quot;
                </p>
              </CardContent>
              <CardFooter>
                <div className="bg-blue-600/10 p-2 rounded-full">
                  <MessageCircle className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-sm text-gray-500 ml-2">Đánh giá 2 tháng trước</span>
              </CardFooter>
            </Card>

            {/* Secondary Testimonials - 2 cards in 3 columns */}
            <div className="md:col-span-3 grid grid-cols-1 gap-6">
              <Card className="hover:shadow-lg transition-all border-l-4 border-blue-500">
                <CardHeader className="pb-2">
                  <div className="flex mb-2">
                    {[1, 2, 3, 4].map((i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400" />
                    ))}
                    <Star className="w-4 h-4 text-gray-300" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-3 mb-3">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src="/placeholder.svg?height=48&width=48" />
                      <AvatarFallback className="bg-blue-100 text-blue-600">TTB</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-gray-800">Trần Thị B</p>
                      <p className="text-xs text-gray-500">Khách hàng tại TP.HCM</p>
                    </div>
                  </div>
                  <p className="italic text-gray-700">
                    &quot;Nhân viên tư vấn nhiệt tình, linh kiện chính hãng, rất yên tâm khi sửa chữa tại đây. Đặc biệt là
                    giá cả rất hợp lý.&quot;
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all border-l-4 border-green-500">
                <CardHeader className="pb-2">
                  <div className="flex mb-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-3 mb-3">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src="/placeholder.svg?height=48&width=48" />
                      <AvatarFallback className="bg-green-100 text-green-600">LVC</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-gray-800">Lê Văn C</p>
                      <p className="text-xs text-gray-500">Khách hàng tại Đà Nẵng</p>
                    </div>
                  </div>
                  <p className="italic text-gray-700">
                    &quot;Bảo hành rõ ràng, hỗ trợ sau sửa chữa tốt. Sẽ quay lại khi cần! Đánh giá 5 sao cho chất lượng dịch
                    vụ.&quot;
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Trust indicators - Spans full width */}
            <div className="md:col-span-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="bg-white hover:shadow-md transition-all">
                <CardContent className="p-4 text-center">
                  <p className="font-bold text-3xl text-blue-600 mb-1">2,500+</p>
                  <p className="text-sm text-gray-600">Khách hàng hài lòng</p>
                </CardContent>
              </Card>
              <Card className="bg-white hover:shadow-md transition-all">
                <CardContent className="p-4 text-center">
                  <p className="font-bold text-3xl text-blue-500 mb-1">15+</p>
                  <p className="text-sm text-gray-600">Kỹ thuật viên chuyên môn</p>
                </CardContent>
              </Card>
              <Card className="bg-white hover:shadow-md transition-all">
                <CardContent className="p-4 text-center">
                  <p className="font-bold text-3xl text-green-500 mb-1">98%</p>
                  <p className="text-sm text-gray-600">Tỷ lệ hài lòng</p>
                </CardContent>
              </Card>
              <Card className="bg-white hover:shadow-md transition-all">
                <CardContent className="p-4 text-center">
                  <p className="font-bold text-3xl text-purple-500 mb-1">10+</p>
                  <p className="text-sm text-gray-600">Năm kinh nghiệm</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates and Partnerships - Bento Box Style */}
      <section id="partners" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl font-bold text-center mb-3">Chứng nhận & Đối tác</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
          </div>

          {/* Bento Box Grid Layout for Partners */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Apple Authorized", subtitle: "Service Provider" },
              { name: "Samsung Partner", subtitle: "Premium Service" },
              { name: "Xiaomi Authorized", subtitle: "Repair Center" },
              { name: "OPPO Official", subtitle: "Service Partner" },
            ].map((partner, i) => (
              <Card key={i} className="hover:shadow-lg transition-all hover:-translate-y-1">
                <CardContent className="p-6 flex flex-col items-center">
                  <div className="bg-gray-100 w-full h-24 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-gray-400 text-sm">Logo đối tác {i + 1}</div>
                  </div>
                  <div className="text-center">
                    <p className="font-medium">{partner.name}</p>
                    <p className="text-xs text-gray-500">{partner.subtitle}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
