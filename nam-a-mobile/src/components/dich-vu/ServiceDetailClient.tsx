'use client';

import { useState } from 'react';
import { Shield, Clock, Wrench, Check, Star } from 'lucide-react';
import { Rating } from '@/components/shared/Rating';
import { PriceDisplay } from '@/components/shared/PriceDisplay';
import { HtmlContent } from '@/components/shared/HtmlContent';
import Image from 'next/image';

interface Service {
  title: string;
  rating: number;
  totalRatings: number;
  price: number;
  warranty: string;
  repairTime: string;
  gallery: Array<{
    src: string;
    alt: string;
  }>;
  content: string;
  options: Array<{
    name: string;
    price: number;
  }>;
  reviews: Array<{
    id: string;
    author: string;
    rating: number;
    date: string;
    content: string;
  }>;
}

export function ServiceDetailClient({ service }: { service: Service }) {
  // State for selected option and image
  const [selectedOption, setSelectedOption] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);

  // Calculate the current price based on selected option
  const currentOption = service.options[selectedOption];
  const currentPrice = currentOption && currentOption.price 

  return (
    <div className="grid md:grid-cols-12 gap-4 mt-4">
      {/* Left column - Gallery and Content */}
      <div className="md:col-span-7">
        <div className="flex gap-4 bg-white rounded-[10px] p-4">
          {/* Thumbnails sidebar */}
          <div className="flex flex-col gap-4">
            {service.gallery.map((image, index) => (
              <div
                key={index}
                className={`w-16 h-16 bg-gray-200 rounded-lg overflow-hidden cursor-pointer border-2 ${
                  selectedImage === index ? 'border-primary' : 'border-transparent'
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          
          {/* Main image */}
          <div className="flex-1">
            <div className="aspect-square relative rounded-lg overflow-hidden bg-gray-200">
              <Image 
                src={service.gallery[selectedImage].src} 
                alt={service.gallery[selectedImage].alt}
                className="w-full h-full object-cover" 
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>

        <div className="mt-4 bg-white rounded-[10px] p-4">
          <HtmlContent content={service.content} />
        </div>

        {/* Reviews Section */}
        <div className="mt-4 bg-white rounded-[10px] p-4">
          <h2 className="text-2xl font-bold mb-4">Đánh giá dịch vụ</h2>
          
          {/* Review Form */}
          <div className="mb-8 p-4 border rounded-lg">
            <h3 className="font-semibold mb-4">Viết đánh giá</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="font-medium">Đánh giá của bạn:</span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star}
                      className="w-5 h-5 cursor-pointer text-gray-300 hover:text-yellow-400"
                    />
                  ))}
                </div>
              </div>
              <textarea 
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                rows={4}
                placeholder="Chia sẻ trải nghiệm của bạn về dịch vụ..."
              />
              <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90">
                Gửi đánh giá
              </button>
            </div>
          </div>

          {/* Reviews List */}
          <div className="space-y-6">
            {service.reviews.map((review) => (
              <div key={review.id} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">{review.author}</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-sm">{review.rating}</span>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
                <p className="text-gray-700 mb-4">{review.content}</p>
                
                {/* Reply Form */}
                <div className="pl-4 border-l-2 border-gray-200">
                  <button className="text-sm text-primary hover:text-primary/80 mb-2">
                    Trả lời
                  </button>
                  <div className="hidden mt-2">
                    <textarea 
                      className="w-full p-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      rows={2}
                      placeholder="Viết phản hồi..."
                    />
                    <button className="mt-2 text-sm bg-primary text-white px-4 py-1 rounded-lg hover:bg-primary/90">
                      Gửi
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right column - Service details and options */}
      <div className="md:col-span-5 bg-white rounded-[10px] p-4">
        <div className="sticky top-[120px]">
          <h1 className="text-3xl font-bold mb-4">{service.title}</h1>
          <Rating rating={service.rating} totalRatings={service.totalRatings} />
          
          <PriceDisplay
            currentPrice={currentPrice}
            originalPrice={service.price}
          />
          
          <p className="text-sm text-gray-600 mt-2">
            Giá đã bao gồm VAT và công thảo lắp.
          </p>

          <div className="flex items-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              <span>Bảo hành {service.warranty}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              <span>Sửa {service.repairTime}</span>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-semibold mb-4">CHỌN LOẠI LINH KIỆN</h3>
            <div className="space-y-4">
              {service.options.map((option, index) => (
                <div
                  key={index}
                  className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                    selectedOption === index 
                      ? 'border-primary bg-primary/5' 
                      : 'hover:border-primary'
                  }`}
                  onClick={() => setSelectedOption(index)}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      {selectedOption === index && (
                        <Check className="w-5 h-5 text-primary" />
                      )}
                      <span className="font-medium">{option.name}</span>
                    </div>
                    <span className="text-primary font-semibold">
                      {new Intl.NumberFormat('vi-VN', {
                        style: 'currency',
                        currency: 'VND',
                        minimumFractionDigits: 0,
                      }).format(option.price)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="w-full bg-primary text-white font-semibold py-4 rounded-lg mt-8 hover:bg-primary/90 transition-colors">
            Đặt lịch ngay
          </button>

          <div className="mt-8 p-4 bg-primary/5 rounded-lg">
            <h3 className="font-semibold mb-4">Tại Nam Á Mobile chúng tôi luôn cam kết:</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Wrench className="w-5 h-5 text-primary" />
                <span>Sử dụng linh kiện Chất Lượng</span>
              </li>
              <li className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <span>Bảo hành rơi vỡ kính 30 Ngày</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <span>Sửa chữa Trước Mặt Khách hàng</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}