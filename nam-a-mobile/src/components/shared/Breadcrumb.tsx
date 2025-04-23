import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-600 ">
      <Link href="/" className="hover:text-primary transition-colors text-ellipsis whitespace-nowrap">
        Trang chủ
      </Link>
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2 overflow-hidden">
          <ChevronRight className="w-4 h-4 shrink-0" />
          {item.href ? (
            <Link
              href={item.href}
              className="hover:text-primary transition-colors truncate"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-900 truncate">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}; 