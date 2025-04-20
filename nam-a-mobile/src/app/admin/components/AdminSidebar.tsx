'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  Package,
  Settings,
  Wrench,
  Layers,
  ImageIcon,
  Archive,
  Menu,
  Calendar,
  ClipboardList,
  Smartphone,
  Cpu,
  Headphones,
  UserCog,
  Monitor,
  Bell
} from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface MenuItem {
  href: string;
  label: string;
  icon: LucideIcon;
  badge?: number | null;
}

interface MenuGroup {
  title: string;
  items: MenuItem[];
}

export default function AdminSidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  
  // Giả định có dữ liệu về số lượng đặt lịch mới
  const newBookingsCount = 5; // Thay bằng dữ liệu thực từ API hoặc state

  // Group menu items by category
  const menuGroups: MenuGroup[] = [
    {
      title: 'Tổng quan',
      items: [
        { href: '/admin', label: 'Bảng điều khiển', icon: LayoutDashboard }
      ]
    },
    {
      title: 'Quản lí Đơn hàng',
      items: [
        { 
          href: '/admin/dat-lich', 
          label: 'Đặt lịch mới', 
          icon: Calendar, 
          badge: newBookingsCount > 0 ? newBookingsCount : null
        },
        { href: '/admin/don-mua', label: 'Đơn mua', icon: ClipboardList },
        { href: '/admin/don-cu', label: 'Đơn cũ', icon: Archive }
      ]
    },
    {
      title: 'Dịch vụ',
      items: [
        { href: '/admin/dich-vu-sua-chua', label: 'Dịch vụ sửa chữa', icon: Wrench }
      ]
    },
    {
      title: 'Sản phẩm',
      items: [
        { href: '/admin/thiet-bi-cu', label: 'Thiết bị cũ', icon: Smartphone },
        { href: '/admin/linh-kien', label: 'Linh kiện', icon: Cpu },
        { href: '/admin/phu-kien', label: 'Phụ kiện', icon: Headphones }
      ]
    },
    {
      title: 'Quản lý người dùng',
      items: [
        { href: '/admin/nguoi-dung', label: 'Người dùng', icon: UserCog }
      ]
    },
    {
      title: 'Giao diện',
      items: [
        { href: '/admin/banner', label: 'Banner/trang chủ', icon: Monitor }
      ]
    },
    {
      title: 'Hệ thống',
      items: [
        { href: '/admin/cai-dat', label: 'Cài đặt', icon: Settings }
      ]
    }
  ];

  return (
    <aside className={`${collapsed ? 'w-20' : 'w-64'} bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-all duration-300`}>
      <div className="p-4">
        <div className={`flex items-center mb-6 ${collapsed ? 'justify-center' : 'justify-between'}`}>
          {!collapsed && <h2 className="text-xl font-bold text-gray-800 dark:text-white">Admin</h2>}
          <button 
            onClick={() => setCollapsed(!collapsed)} 
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
        
        <nav className="flex flex-col gap-1">
          {menuGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="mb-2">
              {!collapsed ? (
                <div className="text-xs whitespace-nowrap text-gray-500 uppercase font-semibold px-4 py-2">
                  {group.title}
                </div>
              ) : (
                <hr className='mb-2 border-gray-500'/>
              )}
              
              {group.items.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    title={collapsed ? item.label : ''}
                    className={`flex items-center gap-3 ${collapsed ? 'px-2 justify-center' : 'px-4'} py-2 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-primary text-white'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    <Icon className="w-5 h-5 flex-shrink-0" />
                    {!collapsed && (
                      <div className="flex items-center gap-2 overflow-hidden">
                        <span className='whitespace-nowrap text-sm'>{item.label}</span>
                        {item.badge && (
                          <span className="bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
                            {item.badge}
                          </span>
                        )}
                      </div>
                    )}
                  </Link>
                );
              })}
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
}