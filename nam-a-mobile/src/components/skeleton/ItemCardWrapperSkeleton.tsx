// components/shared/ItemCardWrapperSkeleton.tsx
import { Skeleton } from "@/components/ui/skeleton";

// Precisely matching the ItemCard layout
const ItemCardSkeleton = () => {
  return (
    <div className="cursor-pointer bg-white group border rounded-2xl overflow-hidden shadow-sm">
      {/* Image placeholder */}
      <div className="relative w-full p-2 overflow-hidden aspect-square md:h-64 bg-gray-100">
        <Skeleton className="h-full w-full" />
      </div>
      
      {/* Content area */}
      <div className="p-3 sm:p-4 space-y-2">
        {/* Title - 2 lines */}
        <div className="min-h-[2.5rem]">
          <Skeleton className="h-4 w-full mb-1" />
          <Skeleton className="h-4 w-4/5" />
        </div>
        
        {/* Price */}
        <Skeleton className="h-6 w-2/3" />
        
        {/* Rating */}
        <div className="flex items-center">
          <div className="flex items-center gap-1 flex-shrink-0">
            {[...Array(5)].map((_, i) => (
              <Skeleton key={i} className="h-3 w-3 rounded-full" />
            ))}
          </div>
          <Skeleton className="ml-1 h-3 w-24" />
        </div>
        
        {/* Badge */}
        <div className="flex flex-wrap items-center gap-1">
          <Skeleton className="h-5 w-24 rounded-full" />
        </div>
        
        {/* Stock */}
        <Skeleton className="h-4 w-32" />
      </div>
    </div>
  );
};

interface ItemCardWrapperSkeletonProps {
  count?: number;
  sectionTitle?: string;
  gradientColor?: string;
  className?: string;
}

export default function ItemCardWrapperSkeleton({
  count = 10,
  sectionTitle,
  gradientColor,
  className = "",
}: ItemCardWrapperSkeletonProps) {
  // If no section title or gradient color, render basic skeleton grid
  if (!sectionTitle && !gradientColor) {
    return (
      <div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 ${className}`}>
        {Array(count).fill(0).map((_, index) => (
          <ItemCardSkeleton key={index} />
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
    <section className="py-2">
      <div className="container mx-auto px-4 py-4 sm:rounded-2xl" style={gradientStyle}>
        {sectionTitle && (
          <div className="w-full flex justify-between items-center mb-2 md:mb-4">
            <Skeleton className="h-8 w-48" />
            {gradientColor && <Skeleton className="h-10 w-40 rounded-3xl" />}
          </div>
        )}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-3">
          {Array(count).fill(0).map((_, index) => (
            <ItemCardSkeleton key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}