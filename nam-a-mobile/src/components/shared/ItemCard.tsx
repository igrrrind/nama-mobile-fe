"use client";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { useState } from "react";
import { Item } from "@/types/Item";

export default function ItemCard({ item, type = "sua-chua" }: { item: Item; type: "sua-chua" | "mua-sam" }) {
  const [imgSrc, setImgSrc] = useState(
    item.image && item.image.trim() !== "" ? item.image : "/placeholder.avif"
  );

  const cardClasses = `bg-white group border hover:border-primary rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow transition-border ${
    item.stock && item.stock > 0 ? "cursor-pointer" : "grayscale opacity-50 cursor-not-allowed"
  }`;

  const CardContent = (
    <div className={cardClasses}>
      <div className="relative w-full p-2 overflow-hidden aspect-square @md:h-64 bg-white">
        <Image
          src={imgSrc}
          alt={item.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-200"
          onError={() => setImgSrc("/placeholder.png")}
        />
      </div>
      <div className="p-3 sm:p-4 space-y-2">
        <h3 className="font-semibold text-sm sm:text-base leading-tight line-clamp-2 min-h-[2.5rem]">
          {item.name}
        </h3>
        <div className="text-lg font-bold text-black">
          {new Intl.NumberFormat("vi-VN").format(item.price)} đ
        </div>
        <div className="flex items-center text-xs sm:text-sm text-gray-700">
          <div className="flex items-center gap-1 flex-shrink-0">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} fill="#FBBF24" stroke="#FBBF24" />
            ))}
          </div>
          <span className="ml-1 text-gray-500 truncate">
            {item.rating} ({item.reviews} đánh giá)
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-1 text-xs sm:text-sm text-green-600">
          <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs font-medium">
            Bảo hành trọn đời
          </span>
        </div>
        {item.stock && item.stock > 0 ? (
          <p className="text-green-600 text-xs sm:text-sm font-medium">Còn {item.stock} sản phẩm</p>
        ) : (
          <p className="text-xs sm:text-sm font-medium">Hết hàng</p>
        )}
      </div>
    </div>
  );

  return item.stock && item.stock > 0 ? (
    <Link href={`/${type}/${item.slug}`} className="block" scroll={true}>
      {CardContent}
    </Link>
  ) : (
    CardContent
  );
}
