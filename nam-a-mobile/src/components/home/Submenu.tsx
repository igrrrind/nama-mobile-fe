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
        <div className="w-56 border-r border-gray-200">
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
          { name: 'iPhone', href: '/sua-chua/iphone' },
          { name: 'Samsung', href: '/sua-chua/samsung' },
          { name: 'Oppo', href: '/sua-chua/oppo' },
          { name: 'Xiaomi', href: '/sua-chua/xiaomi' },
          { name: 'Vivo', href: '/sua-chua/vivo' },
          { name: 'Realme', href: '/sua-chua/realme' },
          { name: 'Huawei', href: '/sua-chua/huawei' },
          { name: 'Khác', href: '/sua-chua/hang-khac' }
        ]
      },
      {
        title: 'Thay màn hình điện thoại',
        items: [
          { name: 'Thay màn hình iPhone', href: '/sua-chua/thay-man-hinh-iphone' },
          { name: 'Thay màn hình Samsung', href: '/sua-chua/thay-man-hinh-samsung' },
          { name: 'Thay màn hình Oppo', href: '/sua-chua/thay-man-hinh-oppo' },
          { name: 'Thay màn hình Xiaomi', href: '/sua-chua/thay-man-hinh-xiaomi' },
          { name: 'Thay màn hình Vivo', href: '/sua-chua/thay-man-hinh-vivo' },
          { name: 'Thay màn hình Realme', href: '/sua-chua/thay-man-hinh-realme' },
          { name: 'Thay màn hình Huawei', href: '/sua-chua/thay-man-hinh-huawei' },
          { name: 'Thay màn hình Nokia', href: '/sua-chua/thay-man-hinh-nokia' }
        ]
      },
      {
        title: 'Thay mặt kính điện thoại',
        items: [
          { name: 'Thay mặt kính iPhone', href: '/sua-chua/thay-mat-kinh-iphone' },
          { name: 'Thay mặt kính Samsung', href: '/sua-chua/thay-mat-kinh-samsung' },
          { name: 'Thay mặt kính Oppo', href: '/sua-chua/thay-mat-kinh-oppo' },
          { name: 'Thay mặt kính Xiaomi', href: '/sua-chua/thay-mat-kinh-xiaomi' },
          { name: 'Thay mặt kính Vivo', href: '/sua-chua/thay-mat-kinh-vivo' },
          { name: 'Thay mặt kính Realme', href: '/sua-chua/thay-mat-kinh-realme' },
          { name: 'Thay mặt kính Huawei', href: '/sua-chua/thay-mat-kinh-huawei' }
        ]
      },
      {
        title: 'Thay pin điện thoại',
        items: [
          { name: 'Thay pin iPhone', href: '/sua-chua/thay-pin-iphone' },
          { name: 'Thay pin Samsung', href: '/sua-chua/thay-pin-samsung' },
          { name: 'Thay pin Oppo', href: '/sua-chua/thay-pin-oppo' },
          { name: 'Thay pin Xiaomi', href: '/sua-chua/thay-pin-xiaomi' },
          { name: 'Thay pin Vivo', href: '/sua-chua/thay-pin-vivo' },
          { name: 'Thay pin Realme', href: '/sua-chua/thay-pin-realme' },
          { name: 'Thay pin Huawei', href: '/sua-chua/thay-pin-huawei' },
          { name: 'Thay pin Nokia', href: '/sua-chua/thay-pin-nokia' }
        ]
      },
      {
        title: 'Thay vỏ điện thoại',
        items: [
          { name: 'Thay vỏ iPhone', href: '/sua-chua/thay-vo-iphone' },
          { name: 'Thay vỏ Samsung', href: '/sua-chua/thay-vo-samsung' },
          { name: 'Thay vỏ Oppo', href: '/sua-chua/thay-vo-oppo' },
          { name: 'Thay vỏ Xiaomi', href: '/sua-chua/thay-vo-xiaomi' },
          { name: 'Thay vỏ Vivo', href: '/sua-chua/thay-vo-vivo' },
          { name: 'Thay vỏ Realme', href: '/sua-chua/thay-vo-realme' },
          { name: 'Thay vỏ Huawei', href: '/sua-chua/thay-vo-huawei' },
          { name: 'Thay vỏ Nokia', href: '/sua-chua/thay-vo-nokia' }
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
          { name: 'MacBook', href: '/sua-chua/macbook' },
          { name: 'Dell', href: '/sua-chua/dell' },
          { name: 'HP', href: '/sua-chua/hp' },
          { name: 'Lenovo', href: '/sua-chua/lenovo' },
          { name: 'Asus', href: '/sua-chua/asus' }
        ]
      },
      {
        title: 'Dịch vụ',
        items: [
          { name: 'Thay màn hình laptop', href: '/sua-chua/thay-man-hinh-laptop' },
          { name: 'Thay pin laptop', href: '/sua-chua/thay-pin-laptop' },
          { name: 'Vệ sinh laptop', href: '/sua-chua/ve-sinh-laptop' },
          { name: 'Sửa bàn phím laptop', href: '/sua-chua/sua-ban-phim-laptop' }
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
          { name: 'iPad', href: '/sua-chua/ipad' },
          { name: 'Samsung Tab', href: '/sua-chua/samsung-tab' },
          { name: 'Huawei Tab', href: '/sua-chua/huawei-tab' }
        ]
      },
      {
        title: 'Dịch vụ',
        items: [
          { name: 'Thay màn hình iPad', href: '/sua-chua/thay-man-hinh-ipad' },
          { name: 'Thay pin iPad', href: '/sua-chua/thay-pin-ipad' },
          { name: 'Thay màn hình Samsung Tab', href: '/sua-chua/thay-man-hinh-samsung-tab' }
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
          { name: 'Thay màn hình Apple Watch', href: '/sua-chua/thay-man-hinh-apple-watch' },
          { name: 'Thay pin Apple Watch', href: '/sua-chua/thay-pin-apple-watch' },
          { name: 'Thay vỏ Apple Watch', href: '/sua-chua/thay-vo-apple-watch' }
        ]
      },
      {
        title: 'Phiên bản',
        items: [
          { name: 'Series 3', href: '/sua-chua/apple-watch-series-3' },
          { name: 'Series 4', href: '/sua-chua/apple-watch-series-4' },
          { name: 'Series 5', href: '/sua-chua/apple-watch-series-5' },
          { name: 'Series 6', href: '/sua-chua/apple-watch-series-6' },
          { name: 'Series 7', href: '/sua-chua/apple-watch-series-7' }
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
          { name: 'Vệ sinh Airpods', href: '/sua-chua/ve-sinh-airpods' },
          { name: 'Thay pin Airpods', href: '/sua-chua/thay-pin-airpods' },
          { name: 'Sửa Airpods không kết nối', href: '/sua-chua/sua-airpods-khong-ket-noi' }
        ]
      },
      {
        title: 'Phiên bản',
        items: [
          { name: 'Airpods 1', href: '/sua-chua/airpods-1' },
          { name: 'Airpods 2', href: '/sua-chua/airpods-2' },
          { name: 'Airpods Pro', href: '/sua-chua/airpods-pro' },
          { name: 'Airpods 3', href: '/sua-chua/airpods-3' },
          { name: 'Airpods Pro 2', href: '/sua-chua/airpods-pro-2' }
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