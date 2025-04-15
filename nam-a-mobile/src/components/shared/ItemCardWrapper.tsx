"use client"
import { Item } from "@/types/Item";
import ItemCard from "./ItemCard";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

interface ItemCardWrapperProps {
  items: Item[];
  sectionTitle?: string;
  gradientColor?: string;
  className?: string;
}

export default function ItemCardWrapper({
  items,
  sectionTitle,
  gradientColor,
  className = ""
}: ItemCardWrapperProps) {
  // If no section title or gradient color, render basic product grid
  if (!sectionTitle && !gradientColor) {
    return (
      <div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 ${className}`}>
        {items.map((item) => (
          <ItemCard item={item} key={item.id} />
        ))}
      </div>
    );
  }

  const gradientStyle = gradientColor 
    ? {
        background: `linear-gradient(180deg, ${gradientColor}15 0%, rgba(255,255,255,0) 100%)`,
        borderTop: `8px solid ${gradientColor}`
      }
    : { background: "bg-gray-50" };

  return (
    <section 
      className="py-2" 
    //   style={gradientStyle}
    >
      <div className="container mx-auto px-4 py-4 rounded-2xl" style={gradientStyle}>
        {sectionTitle && (
            <div className="w-full flex justify-between items-center mb-2 md:mb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-left">
            {sectionTitle}
          </h2>
          <Button className="rounded-3xl font-bold w-40">
            Xem tất cả <ArrowRight/>

          </Button>
          </div>
        )}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-3">
          {items.map((item) => (
            <ItemCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
}