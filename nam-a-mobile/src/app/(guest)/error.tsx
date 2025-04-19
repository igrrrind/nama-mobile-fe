'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Đã xảy ra lỗi!</h2>
        <p className="text-gray-600 mb-6">
          {error.message || 'Đã xảy ra lỗi không xác định'}
        </p>
        <Button
          onClick={() => reset()}
          className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90"
        >
          Thử lại
        </Button>
      </div>
    </div>
  );
} 