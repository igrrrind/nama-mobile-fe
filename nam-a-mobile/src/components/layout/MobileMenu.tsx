'use client'

import { MapPin, Calendar, Search, X, Menu, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { categories } from "./Header";

export default function MobileMenu() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});
  
  const toggleMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleCategory = (categoryTitle: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryTitle]: !prev[categoryTitle]
    }));
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      setExpandedCategories({});
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="">
      <button 
        className="p-2 rounded-2xl hover:bg-primary-dark transition-colors cursor-pointer"
        onClick={toggleMenu}
        aria-label="Toggle mobile menu"
        type="button"
      >
        {isMobileMenuOpen ? (
          <X className="w-6 h-6 sm:hidden" />
        ) : (
          <Menu className="w-6 h-6 sm:hidden" />
        )}
      </button>
 
      <div 
        className={`sm:hidden fixed top-[60px] left-0 w-full bg-primary/95 transition-[max-height,opacity] duration-500 z-50 ${
          isMobileMenuOpen ? 'max-h-[calc(100vh-60px)] ease-out h-[calc(100vh-60px)]' : 'max-h-0 pointer-events-none ease-in-out'        }`}
      >
        <div className="h-full overflow-y-auto">
          <div className={`container mx-auto px-4 py-4 transition-opacity duration-300 ${!isMobileMenuOpen && 'opacity-0'}`}>
            {/* Mobile Search */}
            {/* <div className="mb-4">
              <div className="relative">
                <span className="absolute top-1/2 -translate-y-1/2 left-3">
                  <Search className="w-6 h-6 text-gray-500" />
                </span>
                <Input
                  type="text"
                  placeholder="Tìm kiếm..."
                  className="w-full pl-12 pr-4 py-3 rounded-full text-gray-900 placeholder-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div> */}
            {/* Mobile Navigation */}
            <nav className="flex flex-col space-y-4 py-2">
              <Link 
                href="/dat-lich" 
                className="flex items-center space-x-2 p-2 rounded-lg hover:bg-primary-dark transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Calendar className="w-5 h-5" />
                <span>Đặt lịch</span>
              </Link>
              
              <Link 
                href="/tra-cuu" 
                className="flex items-center space-x-2 p-2 rounded-lg hover:bg-primary-dark transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Search className="w-5 h-5" />
                <span>Tra cứu</span>
              </Link>
              
              <Link 
                href="/cua-hang"
                className="flex items-center space-x-2 p-2 rounded-lg hover:bg-primary-dark transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <MapPin className="w-5 h-5" />
                <span>Cửa hàng</span>
              </Link>
              

              

              {/* Mobile Categories */}
              <div className="pt-4 border-t border-white px-2">
                <h3 className="text-lg font-semibold mb-2">Danh mục</h3>
                {categories.map((category) => (
                  <div key={category.title} className="">
                    <button
                      onClick={() => toggleCategory(category.title)}
                      className="flex items-center justify-between w-full border-t border-primary-dark/50 font-medium p-2 py-4 transition-colors"
                    >
                      <span>{category.title}</span>
                      <ChevronDown 
                        className={`w-8 h-8 rounded-full p-2 bg-primary-dark active:bg-primary-dark/80   transition-transform duration-200 ${
                          expandedCategories[category.title] ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <div 
                      className={`flex flex-col space-y-2 overflow-hidden transition-all duration-200 ${
                        expandedCategories[category.title] ? 'max-h-96' : 'max-h-0'
                      }`}
                    >
                      {category.items.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="text-white/80 hover:text-white pl-4 py-1 last:mb-4"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}