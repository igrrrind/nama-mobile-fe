"use client"
import { Item } from "@/types/Item";
import ItemCard from "./ItemCard";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import tinycolor from "tinycolor2";

interface ItemCardWrapperProps {
  items: Item[];
  sectionTitle?: string;
  gradientColor?: string;
  className?: string;
  type?: "sua-chua" | "mua-sam"
}

export default function ItemCardWrapper({
  items,
  sectionTitle,
  gradientColor,
  className = "",
  type = "sua-chua"
}: ItemCardWrapperProps) {
  // If no section title or gradient color, render basic product grid
  if (!sectionTitle && !gradientColor) {
    return (
      <div className={`grid grid-cols-2 @2xl:grid-cols-3 @4xl:grid-cols-4 @6xl:grid-cols-5 gap-2 @md:gap-3 ${className}`}>
        {items.map((item) => (
          <ItemCard item={item} key={item.id} type={type} />
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

  // Calculate hover color (lighten by 20%)
  const hoverColor = gradientColor
    ? tinycolor(gradientColor).darken(20).toHexString()
    : undefined;

  return (
    <div className="py-2">
      <div className="@container container mx-auto px-4 py-4 sm:rounded-2xl" style={gradientStyle}>
        {sectionTitle && (
          <div className="w-full flex justify-between items-center mb-2 md:mb-4">
            <h2 className="text-2xl md:text-3xl font-bold text-left">
              {sectionTitle}
            </h2>
            {gradientColor && <Button
              className={cn(
                "rounded-3xl font-bold w-40 border-none",
              )}
              style={{
                background: gradientColor,
                color: "#fff",
                transition: "background 0.2s",
              }}
              onMouseOver={e => {
                if (hoverColor) (e.currentTarget as HTMLElement).style.background = hoverColor;
              }}
              onMouseOut={e => {
                if (gradientColor) (e.currentTarget as HTMLElement).style.background = gradientColor;
              }}
            >
              Xem tất cả <ArrowRight />
            </Button>}
          </div>
        )}
        <div className="grid grid-cols-2 @2xl:grid-cols-3 @4xl:grid-cols-4 @6xl:grid-cols-5 gap-2 @md:gap-3">
          {items.map((item) => (
            <ItemCard item={item} key={item.id} type={type} />
          ))}
        </div>
      </div>
    </div>
  );
}