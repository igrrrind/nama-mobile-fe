'use client';

import { useState } from 'react';
import { Shield, Clock, Wrench, Check, Star } from 'lucide-react';
import { Rating } from '@/components/shared/Rating';
import { PriceDisplay } from '@/components/shared/PriceDisplay';
import { HtmlContent } from '@/components/shared/HtmlContent';
import { MobileServiceDetails } from '@/components/shared/MobileServiceDetails';
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
  const currentPrice = currentOption && currentOption.price;

  return (
    <div className="grid md:grid-cols-12 gap-4 mt-4">
      {/* Left column - Gallery and Content */}
      <div className="md:col-span-7">
        <div className="flex gap-4 bg-white rounded-[10px] p-4">
          {/* Thumbnails sidebar */}
          <div className="flex flex-col gap-3">
            {service.gallery.map((image, index) => (
              <div
                key={index}
                className={`w-14 h-14 bg-gray-200 rounded-lg overflow-hidden cursor-pointer border-2 ${
                  selectedImage === index ? 'border-primary' : 'border-transparent'
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <Image 
                  src={image.src} 
                  alt={image.alt} 
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          
          {/* Main image - reduced height and fixed aspect ratio */}
          <div className="flex-1">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-gray-200">
              <Image 
                src={service.gallery[selectedImage].src} 
                alt={service.gallery[selectedImage].alt}
                className="w-full h-full object-contain" 
                width={500}
                height={300}
              />
            </div>
          </div>
        </div>

        <div className="mt-4 bg-white rounded-[10px] p-4">
          <HtmlContent content={service.content} />
        </div>

        {/* Reviews Section */}
        <div className="mt-4 bg-white rounded-[10px] p-4">
          <h2 className="text-xl font-bold mb-4">Đánh giá dịch vụ</h2>
          
          {/* Review Form */}
          <div className="mb-6 p-4 border rounded-lg">
            <h3 className="font-semibold mb-3 text-base">Viết đánh giá</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="font-medium text-sm">Đánh giá của bạn:</span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star}
                      className="w-4 h-4 cursor-pointer text-gray-300 hover:text-yellow-400"
                    />
                  ))}
                </div>
              </div>
              <textarea 
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                rows={3}
                placeholder="Chia sẻ trải nghiệm của bạn về dịch vụ..."
              />
              <button className="bg-primary text-white px-5 py-2 text-sm rounded-lg hover:bg-primary/90">
                Gửi đánh giá
              </button>
            </div>
          </div>

          {/* Reviews List */}
          <div className="space-y-4">
            {service.reviews.map((review) => (
              <div key={review.id} className="border rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-sm">{review.author}</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                      <span className="text-xs">{review.rating}</span>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">{review.date}</span>
                </div>
                <p className="text-gray-700 text-sm mb-3">{review.content}</p>
                
                {/* Reply Form */}
                <div className="pl-3 border-l-2 border-gray-200">
                  <button className="text-xs text-primary hover:text-primary/80 mb-1">
                    Trả lời
                  </button>
                  <div className="hidden mt-2">
                    <textarea 
                      className="w-full p-2 border rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-primary"
                      rows={2}
                      placeholder="Viết phản hồi..."
                    />
                    <button className="mt-2 text-xs bg-primary text-white px-3 py-1 rounded-lg hover:bg-primary/90">
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
      <div className="hidden md:block md:col-span-5 bg-white rounded-[10px] p-4">
        <div className="sticky top-[154px]">
          <h1 className="text-2xl font-bold mb-3">{service.title}</h1>
          <Rating rating={service.rating} totalRatings={service.totalRatings} />
          
          <PriceDisplay
            currentPrice={currentPrice}
            originalPrice={service.price}
          />
          
          <p className="text-xs text-gray-600 mt-2">
            Giá đã bao gồm VAT và công thảo lắp.
          </p>

          <div className="flex items-center gap-4 mt-3">
            <div className="flex items-center gap-1">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm">Bảo hành {service.warranty}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-sm">Sửa {service.repairTime}</span>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold mb-3 text-sm">CHỌN LOẠI LINH KIỆN</h3>
            <div className="space-y-3">
              {service.options.map((option, index) => (
                <div
                  key={index}
                  className={`border rounded-lg p-3 cursor-pointer transition-colors ${
                    selectedOption === index 
                      ? 'border-primary bg-primary/5' 
                      : 'hover:border-primary'
                  }`}
                  onClick={() => setSelectedOption(index)}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      {selectedOption === index && (
                        <Check className="w-4 h-4 text-primary" />
                      )}
                      <span className="font-medium text-sm">{option.name}</span>
                    </div>
                    <span className="text-primary font-semibold text-sm">
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

          <button className="w-full bg-primary text-white font-semibold py-3 rounded-lg mt-6 hover:bg-primary/90 transition-colors text-sm">
            Đặt lịch ngay
          </button>

          <div className="mt-6 p-3 bg-primary/5 rounded-lg">
            <h3 className="font-semibold mb-3 text-sm">Tại Nam Á Mobile chúng tôi luôn cam kết:</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Wrench className="w-4 h-4 text-primary" />
                <span className="text-sm">Sử dụng linh kiện Chất Lượng</span>
              </li>
              <li className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-sm">Bảo hành rơi vỡ kính 30 Ngày</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-sm">Sửa chữa Trước Mặt Khách hàng</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile Service Details */}
      <MobileServiceDetails 
        service={service}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        currentPrice={currentPrice}
      />
    </div>
  );
}