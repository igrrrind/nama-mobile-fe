'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { UserCog } from 'lucide-react';

export default function AdminFloatingBubble() {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith('/admin');

  // Don't show the bubble if we're already in admin section
  if (isAdmin) return null;

  return (
    <Link
      href="/admin"
      className="fixed bottom-6 right-6 z-50 hidden md:flex items-center gap-2 bg-primary text-white px-4 py-3 rounded-full shadow-lg hover:bg-primary/90 transition-colors"
    >
      <UserCog className="w-5 h-5" />
      <span className="font-medium">Quản trị viên</span>
    </Link>
  );
} 