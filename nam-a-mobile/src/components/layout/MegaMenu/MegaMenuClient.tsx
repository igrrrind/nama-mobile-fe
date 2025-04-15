'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Submenu } from '@/components/home/Submenu';

export type CategoryType = {
  title: string;
  icon?: string;
  items: {
    name: string;
    href: string;
    description?: string;
  }[];
};

interface MegaMenuClientProps {
  categories?: CategoryType[];
}

export function MegaMenuClient({ categories }: MegaMenuClientProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => {
        setIsVisible(false);
      }}
    >
      <Button className="flex items-center rounded-full hover:bg-white bg-white cursor-pointer  px-4 py-5 group">
        <span className="font-medium text-base text-black ml-1">Danh mục</span>
        <ChevronDown className={`w-5 h-5 stroke-2 text-black transition-transform duration-300 ${isVisible ? 'rotate-180' : ''}`} />
      </Button>

      {isVisible && (
        <div className='pt-2 absolute top-full left-0 flex w-[1280px] z-10'>
        <div className="bg-white shadow-lg rounded-lg flex w-[1280px]">
          {/* Sidebar */}
          <Submenu/>
        </div>
        </div>
      )}
    </div>
  );
} 