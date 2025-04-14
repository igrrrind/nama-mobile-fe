'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
  categories: CategoryType[];
}

export function MegaMenuClient({ categories }: MegaMenuClientProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => {
        setIsVisible(false);
        setActiveCategory(null);
      }}
    >
      <Button className="flex items-center rounded-full hover:bg-white bg-white space-x-1 px-4 py-6 group">
        <span className="font-medium text-base text-black">Danh mục</span>
        <ChevronDown className={`w-5 h-5 stroke-2 text-black transition-transform duration-300 ${isVisible ? 'rotate-180' : ''}`} />
      </Button>

      {isVisible && (
        <div className='pt-2 absolute top-full left-0 flex w-[800px] z-50'>
        <div className="bg-white shadow-lg rounded-lg flex w-[800px]">
          {/* Sidebar */}
          <div className="w-64 bg-gray-50 p-4 rounded-l-lg ">
            {categories.map((category) => (
              <div
                key={category.title}
                className={`flex items-center justify-between p-3 cursor-pointer rounded-md ${
                  activeCategory === category.title
                    ? 'bg-primary '
                    : 'hover:bg-gray-100 text-black'
                }`}
                onMouseEnter={() => setActiveCategory(category.title)}
              >
                <span className="font-medium">{category.title}</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            ))}
          </div>

          {/* Content */}
          {activeCategory && (
            <div className="flex-1 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {activeCategory}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {categories
                  .find((cat) => cat.title === activeCategory)
                  ?.items.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block p-3 rounded-md hover:bg-gray-50"
                    >
                      <div className="font-medium text-gray-900">{item.name}</div>
                      {item.description && (
                        <p className="text-sm text-gray-500 mt-1">
                          {item.description}
                        </p>
                      )}
                    </Link>
                  ))}
              </div>
            </div>
          )}
        </div>
        </div>
      )}
    </div>
  );
} 