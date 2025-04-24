import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Youtube, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-gray-300">
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white tracking-tight">Nam Á Mobile</h3>
            <p className="text-sm md:text-base leading-relaxed opacity-90">
              Chuyên sửa chữa điện thoại, laptop, tablet và các thiết bị điện tử
            </p>
            <div className="flex space-x-4 pt-2">
              <Link href="https://facebook.com" className="hover:text-primary transition-colors duration-200">
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://youtube.com" className="hover:text-primary transition-colors duration-200">
                <Youtube className="w-5 h-5" />
                <span className="sr-only">Youtube</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Liên kết nhanh</h3>
            <ul className="space-y-2 text-sm md:text-base">
              {[
                { href: "/gioi-thieu", label: "Giới thiệu" },
                { href: "/dich-vu", label: "Dịch vụ" },
                { href: "/bang-gia", label: "Bảng giá" },
                { href: "/tin-tuc", label: "Tin tức" }
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-primary transition-colors duration-200 flex items-center">
                    <span className="inline-block w-1 h-1 bg-gray-500 rounded-full mr-2"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Dịch vụ sửa chữa</h3>
            <ul className="space-y-2 text-sm md:text-base">
              {[
                { href: "/dich-vu/sua-iphone", label: "Sửa chữa iPhone" },
                { href: "/dich-vu/sua-samsung", label: "Sửa chữa Samsung" },
                { href: "/dich-vu/sua-laptop", label: "Sửa chữa Laptop" },
                { href: "/dich-vu/sua-tablet", label: "Sửa chữa Tablet" }
              ].map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="hover:text-primary transition-colors duration-200 flex items-center">
                    <span className="inline-block w-1 h-1 bg-gray-500 rounded-full mr-2"></span>
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Liên hệ</h3>
            <ul className="space-y-3 text-sm md:text-base">
              <li className="flex items-start space-x-3">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="hover:text-primary transition-colors duration-200">0937 356 999</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="hover:text-primary transition-colors duration-200 break-all">contact@namamobile.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="leading-snug">56 164 Cây Keo, P. Hiệp Tân, Q. Tân Phú, Tp. Hồ Chí Minh</span>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="leading-snug">08:00 - 20:00 (Tất cả các ngày)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
          <p>© 2024 Nam Á Mobile. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
}