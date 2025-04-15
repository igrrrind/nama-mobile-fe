'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Smartphone, Laptop, Tablet, Watch, Headphones, Phone, FileText } from 'lucide-react';

export type CategoryType = {
  title: string;
  icon: React.ReactNode;
  subCategories?: {
    title: string;
    items: {
      name: string;
      href: string;
    }[];
  }[];
};

interface SubmenuProps {
  categories?: CategoryType[];
}

export function Submenu({ categories = categoriesSub }: SubmenuProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Map for service icons
  const getIcon = (categoryTitle: string) => {
    switch (categoryTitle) {
      case 'Sửa Điện Thoại':
        return <Smartphone className="w-5 h-5 text-gray-400" />;
      case 'Sửa Laptop':
        return <Laptop className="w-5 h-5 text-gray-400" />;
      case 'Sửa Tablet':
        return <Tablet className="w-5 h-5 text-gray-400" />;
      case 'Sửa Apple Watch':
        return <Watch className="w-5 h-5 text-gray-400" />;
      case 'Sửa Airpods':
        return <Headphones className="w-5 h-5 text-gray-400" />;
      case 'Phụ Kiện':
        return <Phone className="w-5 h-5 text-gray-400" />;
      case 'Blog Thủ Thuật':
        return <FileText className="w-5 h-5 text-gray-400" />;
      default:
        return <Smartphone className="w-5 h-5 text-gray-400" />;
    }
  };

  return (
    <div className="font-sans absolute" onMouseLeave={() => setActiveCategory(null)}
>
      <div className="flex border border-gray-200 rounded-2xl bg-white shadow-sm">
        {/* Left sidebar with categories */}
        <div className="w-64 border-r border-gray-200">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-lg font-bold text-gray-800">Danh mục dịch vụ</h2>
          </div>
          <div className="py-2">
            {categories.map((category) => (
              <div 
                key={category.title} 
                className={`relative px-4 py-3 cursor-pointer hover:bg-gray-100 flex items-center gap-3`}
                onMouseEnter={() => setActiveCategory(category.title)}
              >
                {getIcon(category.title)}
                <span className={`text-sm ${activeCategory === category.title ? 'text-primary font-medium' : 'text-gray-700'}`}>
                  {category.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right side mega menu content */}
        {activeCategory && (
          <div className="flex-1 p-4  bg-white rounded-2xl" >
            <div className="grid grid-cols-5 gap-4">
              {categories.find(cat => cat.title === activeCategory)?.subCategories?.map((subCategory) => (
                <div key={subCategory.title} className="space-y-3">
                  <h3 className="text-sm font-semibold text-gray-800 border-b pb-2">
                    {subCategory.title}
                  </h3>
                  <div className="space-y-2">
                    {subCategory.items.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block text-sm text-gray-600 hover:text-primary"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export const categoriesSub: CategoryType[] = [
  {
    title: 'Sửa Điện Thoại',
    icon: <Smartphone />,
    subCategories: [
      {
        title: 'Thương hiệu',
        items: [
          { name: 'iPhone', href: '/dich-vu/iphone' },
          { name: 'Samsung', href: '/dich-vu/samsung' },
          { name: 'Oppo', href: '/dich-vu/oppo' },
          { name: 'Xiaomi', href: '/dich-vu/xiaomi' },
          { name: 'Vivo', href: '/dich-vu/vivo' },
          { name: 'Realme', href: '/dich-vu/realme' },
          { name: 'Huawei', href: '/dich-vu/huawei' },
          { name: 'Khác', href: '/dich-vu/hang-khac' }
        ]
      },
      {
        title: 'Thay màn hình điện thoại',
        items: [
          { name: 'Thay màn hình iPhone', href: '/dich-vu/thay-man-hinh-iphone' },
          { name: 'Thay màn hình Samsung', href: '/dich-vu/thay-man-hinh-samsung' },
          { name: 'Thay màn hình Oppo', href: '/dich-vu/thay-man-hinh-oppo' },
          { name: 'Thay màn hình Xiaomi', href: '/dich-vu/thay-man-hinh-xiaomi' },
          { name: 'Thay màn hình Vivo', href: '/dich-vu/thay-man-hinh-vivo' },
          { name: 'Thay màn hình Realme', href: '/dich-vu/thay-man-hinh-realme' },
          { name: 'Thay màn hình Huawei', href: '/dich-vu/thay-man-hinh-huawei' },
          { name: 'Thay màn hình Nokia', href: '/dich-vu/thay-man-hinh-nokia' }
        ]
      },
      {
        title: 'Thay mặt kính điện thoại',
        items: [
          { name: 'Thay mặt kính iPhone', href: '/dich-vu/thay-mat-kinh-iphone' },
          { name: 'Thay mặt kính Samsung', href: '/dich-vu/thay-mat-kinh-samsung' },
          { name: 'Thay mặt kính Oppo', href: '/dich-vu/thay-mat-kinh-oppo' },
          { name: 'Thay mặt kính Xiaomi', href: '/dich-vu/thay-mat-kinh-xiaomi' },
          { name: 'Thay mặt kính Vivo', href: '/dich-vu/thay-mat-kinh-vivo' },
          { name: 'Thay mặt kính Realme', href: '/dich-vu/thay-mat-kinh-realme' },
          { name: 'Thay mặt kính Huawei', href: '/dich-vu/thay-mat-kinh-huawei' }
        ]
      },
      {
        title: 'Thay pin điện thoại',
        items: [
          { name: 'Thay pin iPhone', href: '/dich-vu/thay-pin-iphone' },
          { name: 'Thay pin Samsung', href: '/dich-vu/thay-pin-samsung' },
          { name: 'Thay pin Oppo', href: '/dich-vu/thay-pin-oppo' },
          { name: 'Thay pin Xiaomi', href: '/dich-vu/thay-pin-xiaomi' },
          { name: 'Thay pin Vivo', href: '/dich-vu/thay-pin-vivo' },
          { name: 'Thay pin Realme', href: '/dich-vu/thay-pin-realme' },
          { name: 'Thay pin Huawei', href: '/dich-vu/thay-pin-huawei' },
          { name: 'Thay pin Nokia', href: '/dich-vu/thay-pin-nokia' }
        ]
      },
      {
        title: 'Thay vỏ điện thoại',
        items: [
          { name: 'Thay vỏ iPhone', href: '/dich-vu/thay-vo-iphone' },
          { name: 'Thay vỏ Samsung', href: '/dich-vu/thay-vo-samsung' },
          { name: 'Thay vỏ Oppo', href: '/dich-vu/thay-vo-oppo' },
          { name: 'Thay vỏ Xiaomi', href: '/dich-vu/thay-vo-xiaomi' },
          { name: 'Thay vỏ Vivo', href: '/dich-vu/thay-vo-vivo' },
          { name: 'Thay vỏ Realme', href: '/dich-vu/thay-vo-realme' },
          { name: 'Thay vỏ Huawei', href: '/dich-vu/thay-vo-huawei' },
          { name: 'Thay vỏ Nokia', href: '/dich-vu/thay-vo-nokia' }
        ]
      }
    ]
  },
  {
    title: 'Sửa Laptop',
    icon: <Laptop />,
    subCategories: [
      {
        title: 'Thương hiệu',
        items: [
          { name: 'MacBook', href: '/dich-vu/macbook' },
          { name: 'Dell', href: '/dich-vu/dell' },
          { name: 'HP', href: '/dich-vu/hp' },
          { name: 'Lenovo', href: '/dich-vu/lenovo' },
          { name: 'Asus', href: '/dich-vu/asus' }
        ]
      },
      {
        title: 'Dịch vụ',
        items: [
          { name: 'Thay màn hình laptop', href: '/dich-vu/thay-man-hinh-laptop' },
          { name: 'Thay pin laptop', href: '/dich-vu/thay-pin-laptop' },
          { name: 'Vệ sinh laptop', href: '/dich-vu/ve-sinh-laptop' },
          { name: 'Sửa bàn phím laptop', href: '/dich-vu/sua-ban-phim-laptop' }
        ]
      }
    ]
  },
  {
    title: 'Sửa Tablet',
    icon: <Tablet />,
    subCategories: [
      {
        title: 'Thương hiệu',
        items: [
          { name: 'iPad', href: '/dich-vu/ipad' },
          { name: 'Samsung Tab', href: '/dich-vu/samsung-tab' },
          { name: 'Huawei Tab', href: '/dich-vu/huawei-tab' }
        ]
      },
      {
        title: 'Dịch vụ',
        items: [
          { name: 'Thay màn hình iPad', href: '/dich-vu/thay-man-hinh-ipad' },
          { name: 'Thay pin iPad', href: '/dich-vu/thay-pin-ipad' },
          { name: 'Thay màn hình Samsung Tab', href: '/dich-vu/thay-man-hinh-samsung-tab' }
        ]
      }
    ]
  },
  {
    title: 'Sửa Apple Watch',
    icon: <Watch />,
    subCategories: [
      {
        title: 'Dịch vụ',
        items: [
          { name: 'Thay màn hình Apple Watch', href: '/dich-vu/thay-man-hinh-apple-watch' },
          { name: 'Thay pin Apple Watch', href: '/dich-vu/thay-pin-apple-watch' },
          { name: 'Thay vỏ Apple Watch', href: '/dich-vu/thay-vo-apple-watch' }
        ]
      },
      {
        title: 'Phiên bản',
        items: [
          { name: 'Series 3', href: '/dich-vu/apple-watch-series-3' },
          { name: 'Series 4', href: '/dich-vu/apple-watch-series-4' },
          { name: 'Series 5', href: '/dich-vu/apple-watch-series-5' },
          { name: 'Series 6', href: '/dich-vu/apple-watch-series-6' },
          { name: 'Series 7', href: '/dich-vu/apple-watch-series-7' }
        ]
      }
    ]
  },
  {
    title: 'Sửa Airpods',
    icon: <Headphones />,
    subCategories: [
      {
        title: 'Dịch vụ',
        items: [
          { name: 'Vệ sinh Airpods', href: '/dich-vu/ve-sinh-airpods' },
          { name: 'Thay pin Airpods', href: '/dich-vu/thay-pin-airpods' },
          { name: 'Sửa Airpods không kết nối', href: '/dich-vu/sua-airpods-khong-ket-noi' }
        ]
      },
      {
        title: 'Phiên bản',
        items: [
          { name: 'Airpods 1', href: '/dich-vu/airpods-1' },
          { name: 'Airpods 2', href: '/dich-vu/airpods-2' },
          { name: 'Airpods Pro', href: '/dich-vu/airpods-pro' },
          { name: 'Airpods 3', href: '/dich-vu/airpods-3' },
          { name: 'Airpods Pro 2', href: '/dich-vu/airpods-pro-2' }
        ]
      }
    ]
  },
  {
    title: 'Phụ Kiện',
    icon: <Phone />,
    subCategories: [
      {
        title: 'Phụ kiện điện thoại',
        items: [
          { name: 'Ốp lưng điện thoại', href: '/phu-kien/op-lung' },
          { name: 'Cường lực điện thoại', href: '/phu-kien/cuong-luc' },
          { name: 'Sạc dự phòng', href: '/phu-kien/sac-du-phong' },
          { name: 'Cáp sạc', href: '/phu-kien/cap-sac' }
        ]
      },
      {
        title: 'Phụ kiện khác',
        items: [
          { name: 'Tai nghe', href: '/phu-kien/tai-nghe' },
          { name: 'Loa bluetooth', href: '/phu-kien/loa-bluetooth' },
          { name: 'Giá đỡ điện thoại', href: '/phu-kien/gia-do-dien-thoai' }
        ]
      }
    ]
  },
  {
    title: 'Blog Thủ Thuật',
    icon: <FileText />,
    subCategories: [
      {
        title: 'Tips & Tricks',
        items: [
          { name: 'Mẹo hay iPhone', href: '/blog/meo-hay-iphone' },
          { name: 'Thủ thuật Android', href: '/blog/thu-thuat-android' },
          { name: 'Mẹo tiết kiệm pin', href: '/blog/meo-tiet-kiem-pin' }
        ]
      },
      {
        title: 'Đánh giá',
        items: [
          { name: 'Đánh giá điện thoại mới', href: '/blog/danh-gia-dien-thoai-moi' },
          { name: 'So sánh điện thoại', href: '/blog/so-sanh-dien-thoai' }
        ]
      }
    ]
  }
];