"use client"
import Image from "next/image";
import { Star } from "lucide-react";
import { useState } from "react";
import { Item } from "@/types/Item";
import { useRouter } from "next/navigation";

export default function ItemCard({ item, type = "dich-vu" }: { item: Item, type: "dich-vu" | "mua-sam"}) {
  const router = useRouter();
  const [imgSrc, setImgSrc] = useState(
    item.image && item.image.trim() !== "" ? item.image : "/placeholder.avif"
  );

  const handleClick = () => {
    if (item.stock && item.stock > 0) {
      router.push(`/${type}/${item.slug}`);
    }
  };

  const cardClasses = `cursor-pointer bg-white group border hover:border-primary rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow transition-border ${
    item.stock && item.stock > 0 ? "" : "grayscale opacity-50 cursor-not-allowed"
  }`;

  return (
    <div onClick={handleClick} className={cardClasses}>
      <div className="relative w-full p-2 overflow-hidden aspect-square md:h-64 bg-white">
        <Image
          src={imgSrc}
          alt={item.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-200"
          onError={() => setImgSrc("/placeholder.png")}
        />
        {/* {!item.stock || item.stock === 0 ? (
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center text-white font-semibold text-sm">
            Hết hàng
          </div>
        ) : null} */}
      </div>
      <div className="p-3 sm:p-4 space-y-2">
        <h3 className="font-semibold text-sm sm:text-base leading-tight line-clamp-2 min-h-[2.5rem]">{item.name}</h3>
        <div className="text-lg sm:text-xl font-bold text-black">
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
        ): <p className="text-xs sm:text-sm font-medium">Hết hàng</p>}
      </div>
    </div>
  );
}