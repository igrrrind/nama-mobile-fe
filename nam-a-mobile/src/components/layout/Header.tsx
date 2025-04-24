import Image from 'next/image';
import Link from 'next/link';
import { Search, MapPin, ShoppingCart, Calendar, Sparkles,
  BookOpen,
  ShieldCheck,
  BadgeDollarSign, Phone } from 'lucide-react';
import { MegaMenuClient, type CategoryType } from './MegaMenu/MegaMenuClient';
import { Input } from '../ui/input';
import MobileMenu from './MobileMenu';
import SearchBar from './SearchBar';

export const categories: CategoryType[] = [
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
      <header className="bg-primary text-white py-2 fixed w-screen z-50">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-12 sm:h-16">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 mr-4 mt-2 sm:w-[130px] w-28">
              <Image src="/logo-text.svg" alt="Logo" width={130} height={80} />
            </Link>

            {/* Mega Menu */}
            <div className='hidden sm:block'><MegaMenuClient categories={categories} /></div>

            {/* Search Bar */}
            <div className="hidden sm:block flex-1 max-w-2xl mx-4 ">
              <div className="relative">
                <button className="absolute  top-1/2 -translate-y-1/2 left-3">
                  <Search className="w-6 h-6 text-gray-500" />
                </button>
                <Input
                  type="text"
                  placeholder="Tìm kiếm dịch vụ sửa chữa & điện thoại cũ..."
                  style={{paddingLeft: '40px'}}
                  className="w-full pl-12 pr-4 py-5 text-sm rounded-full text-gray-900 placeholder-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            {/* Mobile view */}
            <div className=' sm:hidden flex items-center space-x-2'>
              <SearchBar/>
              
              <Link href="/gio-hang" className="flex items-center space-x-2 p-2 rounded-full hover:bg-primary-dark transition-colors">
                <div className="relative">
                  <ShoppingCart className="w-5 h-5" />
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    0
                  </span>
                </div>
              </Link>

              {/* Burger Menu */}
              <div className=''>
                <MobileMenu/>
              </div>
            </div>


            {/* Icons */}
            <div className="sm:flex items-center justify-between hidden ">
              <Link href="/dat-lich" className="flex items-center space-x-2 p-2 px-3 rounded-full hover:bg-primary-dark transition-colors">
                <Calendar className="w-5 h-5 hidden lg:inline-block" />
                <span>Đặt lịch</span>
              </Link>
              
              <div className='hidden md:block'>
              <Link href="/tra-cuu" className="flex items-center space-x-2 py-2 px-3 rounded-full hover:bg-primary-dark transition-colors">
                <Search className="w-5 h-5 hidden lg:inline-block" />
                <span>Tra cứu</span>
              </Link>
              </div>
              
              <div className='hidden lg:block'>
                <Link href="/cua-hang" >
                  <div className="flex items-center space-x-2 p-2 px-3 rounded-full hover:bg-primary-dark transition-colors">
                    <MapPin className="w-5 h-5 hidden lg:inline-block" />
                    <span>Cửa hàng</span>
                  </div>
                </Link>
              </div>

              <Link href="tel:0937356999" className="invisible absolute   lg:visible lg:relative flex flex-col items-right space-x-2 p-2 px-3 rounded-full">
                <div className='text-sm flex items-center w-full'> <Phone className='w-4 h-4 mr-2 '/> <span className=''>Liên hệ</span> </div>
                <span className='font-bold italic text-lg'>0937 356 999</span>
              </Link>
              
              <Link href="/gio-hang" className="flex items-center space-x-2 p-2 rounded-full hover:bg-primary-dark transition-colors">
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
      <div className='fixed sm:top-[80px] top-16 w-full bg-white border-gray-200 border-2 flex sm:justify-center sm:space-x-4 py-2 items-center z-20 overflow-x-auto hide-scrollbar'>
        {subHeaderItems.map( (i) =>  (
          <div key = {i.title} className='flex items-center px-4'>{i.icon}<span className='text-black text-xs sm:text-sm whitespace-nowrap px-2'>{i.title}</span> </div>
        )
        )}
      </div>
      <div className='py-2 sm:h-[120px] h-[105px]'>

      </div>
    </>
  );
}

const subHeaderItems = [
  {
    title: "HÀNG MỚI VỀ", // New arrivals
    icon: <Sparkles className='w-5 h-5 text-primary' />
  },
  {
    title: "BLOG CẨM NANG", // Blog Guide / Handbook
    icon: <BookOpen className='w-5 h-5 text-primary'  />
  },
  {
    title: "CHÍNH SÁCH BẢO HÀNH", // Warranty Policy
    icon: <ShieldCheck className='w-5 h-5 text-primary bg-blue' />
  },
  {
    title: "BẢNG GIÁ DỊCH VỤ", // Service Pricing
    icon: <BadgeDollarSign className='w-5 h-5 text-primary'  />
  },
];


