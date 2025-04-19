import { Star } from 'lucide-react';

interface RatingProps {
  rating: number;
  totalRatings?: number;
  showCount?: boolean;
}

export const Rating = ({ rating, totalRatings, showCount = true }: RatingProps) => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`w-5 h-5 ${
              index < rating
                ? 'fill-yellow-400 text-yellow-400'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      {showCount && totalRatings && (
        <span className="text-sm text-gray-600">
          ({totalRatings} đánh giá)
        </span>
      )}
    </div>
  );
}; 