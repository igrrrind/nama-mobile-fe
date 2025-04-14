import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Nam Á Mobile</h3>
            <p className="mb-4">
              Chuyên sửa chữa điện thoại, laptop, tablet và các thiết bị điện tử
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="hover:text-primary">
                <Facebook className="w-6 h-6" />
              </Link>
              <Link href="https://youtube.com" className="hover:text-primary">
                <Youtube className="w-6 h-6" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Liên kết nhanh</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/gioi-thieu" className="hover:text-primary">
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link href="/dich-vu" className="hover:text-primary">
                  Dịch vụ
                </Link>
              </li>
              <li>
                <Link href="/bang-gia" className="hover:text-primary">
                  Bảng giá
                </Link>
              </li>
              <li>
                <Link href="/tin-tuc" className="hover:text-primary">
                  Tin tức
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Dịch vụ sửa chữa</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/dich-vu/sua-iphone" className="hover:text-primary">
                  Sửa chữa iPhone
                </Link>
              </li>
              <li>
                <Link href="/dich-vu/sua-samsung" className="hover:text-primary">
                  Sửa chữa Samsung
                </Link>
              </li>
              <li>
                <Link href="/dich-vu/sua-laptop" className="hover:text-primary">
                  Sửa chữa Laptop
                </Link>
              </li>
              <li>
                <Link href="/dich-vu/sua-tablet" className="hover:text-primary">
                  Sửa chữa Tablet
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Liên hệ</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5" />
                <span>0937 356 999</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5" />
                <span>contact@namamobile.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5" />
                <span>
                  56 164 Cây Keo, P. Hiệp Tân, Q. Tân Phú, Tp. Hồ Chí Minh
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>© 2024 Nam Á Mobile. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
}
