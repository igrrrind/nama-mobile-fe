import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Không tìm thấy trang</h2>
        <p className="text-gray-600 mb-6">
          Trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.
        </p>
        <Link href="/">
          <Button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90">
            Về trang chủ
          </Button>
        </Link>
      </div>
    </div>
  );
} 