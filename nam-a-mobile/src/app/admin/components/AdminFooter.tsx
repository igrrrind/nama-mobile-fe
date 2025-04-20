'use client';
import { LogOut } from 'lucide-react';

export default function AdminFooter() {
  const handleLogout = () => {
    localStorage.removeItem('admin-auth');
    window.location.href = '/login';
  };

  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="px-6 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Nam Á Mobile. Bảo lưu mọi quyền.
          </div>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary">
              Điều khoản sử dụng
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary">
              Chính sách bảo mật
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary">
              Hỗ trợ
            </a>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-red-500 cursor-pointer dark:text-gray-400 hover:text-primary dark:hover:text-red-700"
            >
              <LogOut className="w-4 h-4" />
              <span>Đăng xuất</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}