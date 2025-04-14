// import { productService } from '@/lib/api/services/product.service';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Laptop, Watch, Headphones, Wrench } from 'lucide-react';

const services = [
  {
    icon: Phone,
    title: 'Sửa chữa iPhone',
    description: 'Thay màn hình, pin, camera chính hãng',
    link: '/dich-vu/sua-iphone'
  },
  {
    icon: Laptop,
    title: 'Sửa chữa Laptop',
    description: 'Sửa chữa, nâng cấp, vệ sinh laptop',
    link: '/dich-vu/sua-laptop'
  },
  {
    icon: Watch,
    title: 'Sửa Apple Watch',
    description: 'Thay màn hình, pin Apple Watch',
    link: '/dich-vu/sua-apple-watch'
  },
  {
    icon: Headphones,
    title: 'Sửa Airpods',
    description: 'Sửa chữa tai nghe Apple chính hãng',
    link: '/dich-vu/sua-airpods'
  }
];

const featuredProducts = [
  {
    id: 1,
    name: 'iPhone 14 Pro Max',
    price: 27900000,
    image: '/products/iphone-14-pro-max.jpg',
    description: '128GB, Màu đen, Chính hãng VN/A'
  },
  {
    id: 2,
    name: 'MacBook Air M2',
    price: 28900000,
    image: '/products/macbook-air-m2.jpg',
    description: '256GB SSD, 8GB RAM, Space Gray'
  }
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary/5 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-4">
                Sửa chữa điện thoại chuyên nghiệp tại Nam Á Mobile
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Dịch vụ sửa chữa uy tín với đội ngũ kỹ thuật viên giàu kinh nghiệm
              </p>
              <Link
                href="/dat-lich"
                className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Đặt lịch ngay
              </Link>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/hero-image.jpg"
                alt="Nam Á Mobile Service"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Dịch vụ của chúng tôi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.link}
                className="group p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <service.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Sản phẩm nổi bật</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-primary">
                      {new Intl.NumberFormat('vi-VN', {
                        style: 'currency',
                        currency: 'VND'
                      }).format(product.price)}
                    </span>
                    <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                      Chi tiết
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
    </div>
  );
}
