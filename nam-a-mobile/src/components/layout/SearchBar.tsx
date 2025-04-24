'use client'

import { Search } from "lucide-react";
import { useState } from "react";
import { Input } from "../ui/input";

export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button 
        className="p-2 rounded-2xl hover:bg-primary-dark transition-colors cursor-pointer"
        onClick={toggleMenu}
        aria-label="Toggle mobile menu"
        type="button"
      >
        
          <Search className="w-6 h-6 sm:hidden" />
    
      </button>
 
      <div 
        className={`sm:hidden fixed top-16 left-0 w-full bg-primary  transition-[max-height,opacity] duration-500 overflow-hidden z-50 ${
          isOpen ? 'max-h-[60px] ease-out  ' : 'max-h-0 pointer-events-none ease-in-out'
        }`}
      >
        <div className="container mx-auto px-4 p-3">
          {/* Mobile Search */}
          <div className="">
            <div className="relative">
              <span className="absolute top-1/2 -translate-y-1/2 left-3">
                <Search className="w-6 h-6 text-gray-500" />
              </span>
              <Input
                type="text"
                placeholder="Tìm kiếm..."
                className="w-full pl-12 pr-4 py- rounded-full text-gray-900 placeholder-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}