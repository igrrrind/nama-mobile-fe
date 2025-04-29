'use client';

import { useState } from 'react';
import { Check, ChevronUp } from 'lucide-react';
import { PriceDisplay } from '@/components/shared/PriceDisplay';
import { Button } from '../ui/button';

interface Model {
  title: string;
  price: number;
  options: Array<{
    name: string;
    price: number;
  }>;
}

interface MobileModelDetailsProps {
  model: Model;
  selectedOption: number;
  setSelectedOption: (index: number) => void;
  currentPrice: number;
}

export function MobileModelDetails({ 
  model, 
  selectedOption, 
  setSelectedOption, 
  currentPrice 
}: MobileModelDetailsProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
      <div className="p-4">
        <div 
          className="flex items-center justify-between cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex flex-col">
            <PriceDisplay
              currentPrice={currentPrice}
              originalPrice={model.price}
            />
            <span className="text-sm text-gray-600 mt-1">
              {model.options[selectedOption].name}
            </span>
          </div>
          {isExpanded ? (
            <ChevronUp className={`w-5 h-5 transition-transform ${isExpanded ? 'rotate-0' : 'rotate-180'}`} />
          ) : (
            <Button className={``}>Các lựa chọn khác ({model.options.length})</Button>
          )}
        </div>

        {isExpanded && (
          <div className="mt-4 space-y-4">
            <div className="space-y-3">
              {model.options.map((option, index) => (
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

            <button className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-primary/90 transition-colors text-sm">
              Đặt lịch ngay
            </button>
          </div>
        )}
      </div>
    </div>
  );
} 