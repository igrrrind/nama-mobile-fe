import Image from 'next/image';
import Link from 'next/link';
import { Search, MapPin, ShoppingCart, Calendar } from 'lucide-react';
import { MegaMenuClient, type CategoryType } from './MegaMenu/MegaMenuClient';
import { Input } from '../ui/input';

const categories: CategoryType[] = [
  {
    title: 'Sửa Điện Thoại',
    items: [
      { name: 'Thay màn hình iPhone', href: '/dich-vu/thay-man-hinh-iphone', description: 'Thay màn hình chính hãng, bảo hành dài hạn' },
      { name: 'Thay pin iPhone', href: '/dich-vu/thay-pin-iphone', description: 'Pin dung lượng cao, bảo hành 12 tháng' },
      { name: 'Sửa Samsung', href: '/dich-vu/sua-samsung', description: 'Sửa chữa tất cả các dòng Samsung' },
      { name: 'Sửa Oppo', href: '/dich-vu/sua-oppo', description: 'Sửa chữa Oppo chuyên nghiệp' }
    ]
  },
  {
    title: 'Sửa Laptop',
    items: [
      { name: 'Sửa Macbook', href: '/dich-vu/sua-macbook', description: 'Sửa chữa tất cả các dòng Macbook' },
      { name: 'Thay pin Laptop', href: '/dich-vu/thay-pin-laptop', description: 'Thay pin laptop chính hãng' },
      { name: 'Vệ sinh Laptop', href: '/dich-vu/ve-sinh-laptop', description: 'Vệ sinh, bảo dưỡng laptop' }
    ]
  },
  {
    title: 'Sửa Tablet',
    items: [
      { name: 'Sửa iPad', href: '/dich-vu/sua-ipad', description: 'Sửa chữa tất cả các dòng iPad' },
      { name: 'Thay màn hình iPad', href: '/dich-vu/thay-man-hinh-ipad', description: 'Thay màn hình iPad chính hãng' }
    ]
  },
  {
    title: 'Sửa Apple Watch',
    items: [
      { name: 'Thay màn hình Apple Watch', href: '/dich-vu/thay-man-hinh-apple-watch' },
      { name: 'Thay pin Apple Watch', href: '/dich-vu/thay-pin-apple-watch' }
    ]
  },
  {
    title: 'Phụ Kiện',
    items: [
      { name: 'Ốp lưng điện thoại', href: '/phu-kien/op-lung' },
      { name: 'Cường lực điện thoại', href: '/phu-kien/cuong-luc' },
      { name: 'Sạc dự phòng', href: '/phu-kien/sac-du-phong' }
    ]
  }
];

export default function Header() {
  return (
    <>
      {/* <div className="bg-primary text-white text-sm py-1">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <span>iPhone 7 99% Like new</span>
              <span>Samsung Galaxy S22 Ultra full box</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/contact" className="hover:text-white/90">
                0937 356 999
              </Link>
            </div>
          </div>
        </div>
      </div> */}

      <header className="bg-primary text-white py-3 ">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-[80px]">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image src="/logo-text.svg" alt="Logo" width={200} height={100} />
            </Link>

            {/* Mega Menu */}
            <MegaMenuClient categories={categories} />

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-4">
              <div className="relative">
                <button className="absolute  top-1/2 -translate-y-1/2 left-3">
                  <Search className="w-7 h-7 text-gray-500" />
                </button>
                <Input
                  type="text"
                  placeholder="Tìm kiếm dịch vụ sửa chữa..."
                  style={{paddingLeft: '40px'}}
                  className="w-full pl-12 pr-4 py-6 text-lg rounded-full text-gray-900 placeholder-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>


            {/* Icons */}
            <div className="flex items-center space-x-6">
              <Link href="/dat-lich" className="flex items-center space-x-2 p-2 rounded-full hover:bg-primary-dark transition-colors">
                <Calendar className="w-5 h-5" />
                <span>Đặt lịch</span>
              </Link>
              
              <Link href="/tra-cuu" className="flex items-center space-x-2 p-2 rounded-full hover:bg-primary-dark transition-colors">
                <Search className="w-5 h-5" />
                <span>Tra cứu</span>
              </Link>
              
              <Link href="/cua-hang">
                <div className="flex items-center space-x-2 p-3 rounded-full bg-blue-500 transition-colors">
                  <MapPin className="w-5 h-5" />
                  <span>Cửa hàng</span>
                </div>
              </Link>
              
              <Link href="/gio-hang" className="flex items-center space-x-2 p-2 rounded-full hover:bg-[#1c5ad4] transition-colors">
                <div className="relative">
                  <ShoppingCart className="w-5 h-5" />
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    0
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

