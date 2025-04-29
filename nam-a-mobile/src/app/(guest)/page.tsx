// import { productService } from '@/lib/api/services/product.service';
import { Wrench } from 'lucide-react';
import { Submenu } from '@/components/home/Submenu';
import { ServiceSection } from '@/components/home/ServicesSection';
import { mockItems, extraItems1, extraItems2 } from '@/constants/data';
import ItemCardWrapper from '@/components/shared/ItemCardWrapper';

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
      <section className="py-16">
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
      </section>

      {/* New Section: Quy trình sửa chữa */}
      <section className="py-16 bg-primary/10">
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
      </section>

      {/* New Section: Đánh giá khách hàng */}
      <section className="py-16">
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
      </section>
    </div>
  );
}
