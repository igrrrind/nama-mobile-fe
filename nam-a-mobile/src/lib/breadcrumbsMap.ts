// Map of URL segments to display names
const breadcrumbsMap: Record<string, string> = {
    // Vietnamese routes
    "dat-lich": "Đặt lịch",
    "sua-chua": "Sửa chữa",
    "dich-vu": "Dịch vụ",
    "san-pham": "Sản phẩm",
    "lien-he": "Liên hệ",
    "gioi-thieu": "Giới thiệu",
    "tin-tuc": "Tin tức",
    
    // English routes (if your app is multilingual)
    "booking": "Booking",
    "services": "Services",
    "products": "Products",
    "about": "About Us",
    "contact": "Contact",
    "news": "News",
    
    // More specific pages
    "iphone": "iPhone",
    "ipad": "iPad",
    "macbook": "MacBook",
    "android": "Android",
    
    // Dynamic segments can have default fallbacks
    "chi-tiet": "Chi tiết",
    "detail": "Detail",
  };
  
  export default breadcrumbsMap;