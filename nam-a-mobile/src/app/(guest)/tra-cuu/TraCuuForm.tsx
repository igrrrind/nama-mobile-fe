'use client';

import { useState } from 'react';
import TraCuuResult from './TraCuuResult';
import { ServiceRequest } from '@/types';
import { ServiceStatus } from '@/types/enums';

const mockResults: ServiceRequest[] = [
    {
        id: 'DV123456',
        customerId: 'CUST123456',
        serviceDetailId: 'SD123456',
        totalPrice: 1500000,
        status: ServiceStatus.Đang_sửa_chữa,
        requestDate: new Date('2024-04-20'),
        estimatedCompletionDate: new Date('2024-04-25'),
        customer: {
            id: 'CUST123456',
            fullName: 'Nguyễn Văn A',
            phoneNumber: '0909123456',
        },
        serviceDetail: {
            id: 'SD123456',
            serviceRequestId: 'DV123456',
            serviceModelPriceId: 'SMP123456',
            componentId: 'CMP123456',
            serviceModelPrice: {
                id: 'SMP123456',
                serviceId: 'SVC123456',
                modelId: 'MDL123456',
                price: 1500000,
                service: {
                    id: 'SVC123456',
                    name: 'Thay màn hình iPhone 12',
                    slug: 'thay-man-hinh-iphone-12',
                    image: '/images/iphone12-screen-repair.jpg',
                    price: 1500000,
                    rating: 4.5,
                    reviews: 120,
                },
            },
        },
    },
    {
        id: 'DV654321',
        customerId: 'CUST654321',
        serviceDetailId: 'SD654321',
        totalPrice: 800000,
        status: ServiceStatus.Đang_sửa_chữa,
        requestDate: new Date('2024-04-15'),
        estimatedCompletionDate: new Date('2024-04-20'),
        customer: {
            id: 'CUST654321',
            fullName: 'Trần Thị B',
            phoneNumber: '0912345678',
        },
        serviceDetail: {
            id: 'SD654321',
            serviceRequestId: 'DV654321',
            serviceModelPriceId: 'SMP654321',
            componentId: 'CMP654321',
            serviceModelPrice: {
                id: 'SMP654321',
                serviceId: 'SVC654321',
                modelId: 'MDL654321',
                price: 800000,
                service: {
                    id: 'SVC654321',
                    name: 'Thay pin Samsung S22',
                    slug: 'thay-pin-samsung-s22',
                    image: '/images/samsung-s22-battery-replacement.jpg',
                    price: 800000,
                    rating: 4.7,
                    reviews: 85,
                },
            },
        },
    },
];

export default function TraCuuForm() {
  const [phone, setPhone] = useState('');
  const [result, setResult] = useState<ServiceRequest | null>(null);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    const found = mockResults.find(
      (r) => r.customer?.phoneNumber === phone.trim()
    );
    if (found) {
      setResult(found);
    } else {
      setResult(null);
      setError('Không tìm thấy đơn hàng/dịch vụ với số điện thoại này.');
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label htmlFor="phone" className="font-medium">
          Nhập số điện thoại:
        </label>
        <input
          id="phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="VD: 0909123456"
          className="border rounded px-4 py-2"
          required
        />
        <button
          type="submit"
          className="bg-primary text-white rounded px-4 py-2 hover:bg-primary-dark"
        >
          Tra cứu
        </button>
      </form>
      {error && <div className="text-red-500 mt-4">{error}</div>}
      {result && <TraCuuResult result={result} />}
    </div>
  );
}