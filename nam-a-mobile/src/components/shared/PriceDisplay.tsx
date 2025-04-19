interface PriceDisplayProps {
  currentPrice: number;
  originalPrice?: number;
  showDiscount?: boolean;
}

export const PriceDisplay = ({
  currentPrice,
  originalPrice,
  showDiscount = true,
}: PriceDisplayProps) => {
  const discount = originalPrice
    ? Math.round(((originalPrice - currentPrice) / originalPrice) * 100)
    : 0;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="flex items-center gap-3">
      <span className="text-2xl font-bold text-primary">
        {formatPrice(currentPrice)}
      </span>
      {originalPrice && originalPrice > currentPrice && (
        <>
          <span className="text-gray-500 line-through">
            {formatPrice(originalPrice)}
          </span>
          {showDiscount && (
            <span className="px-2 py-1 text-sm font-medium text-white bg-red-500 rounded">
              -{discount}%
            </span>
          )}
        </>
      )}
    </div>
  );
}; 