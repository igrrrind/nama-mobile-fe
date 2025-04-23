import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { ServiceDetailClient } from '@/components/dich-vu/ServiceDetailClient';

export default function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // This would normally come from an API or database
  const service = {
    title: 'Thay màn hình iPhone 11',
    rating: 5,
    totalRatings: 22,
    price: 790000,
    warranty: '06 Tháng',
    repairTime: '30 Phút',
    options: [
      {
        name: 'Màn Chính Hãng JK',
        price: 790000,
      },
      {
        name: 'Màn Chính Hãng Apple 97%',
        price: 1190000,
      },
      {
        name: 'Màn Chính Hãng Apple Like New',
        price: 1490000,
      },
    ],
    content: `
      <div class="service-details">
  <h2 class="text-2xl font-bold mb-4">Thông tin chi tiết dịch vụ</h2>
  
  <p class="mb-6">Dịch vụ thay màn hình iPhone 11 chính hãng tại Nam Á Mobile được thực hiện bởi đội ngũ kỹ thuật viên chuyên nghiệp, có nhiều năm kinh nghiệm trong việc sửa chữa điện thoại.</p>

  <h3 class="text-xl font-semibold mb-3">Quy trình thay màn hình</h3>
  <ol class="list-decimal ml-6 mb-6 space-y-2">
    <li>Kiểm tra tình trạng màn hình hiện tại</li>
    <li>Tháo màn hình cũ và vệ sinh máy</li>
    <li>Lắp đặt màn hình mới và kiểm tra cảm ứng</li>
    <li>Kiểm tra tổng thể và bàn giao cho khách hàng</li>
  </ol>

  <h3 class="text-xl font-semibold mb-3">Cam kết chất lượng</h3>
  <ul class="list-disc ml-6 mb-6 space-y-2">
    <li>Màn hình chính hãng 100%</li>
    <li>Bảo hành 6 tháng</li>
    <li>Thay thế miễn phí nếu có lỗi do nhà sản xuất</li>
    <li>Hỗ trợ kỹ thuật 24/7</li>
  </ul>

  <h3 class="text-xl font-semibold mb-3">Lưu ý quan trọng</h3>
  <p class="mb-3">Để đảm bảo chất lượng dịch vụ tốt nhất, quý khách vui lòng:</p>
  <ul class="list-disc ml-6 mb-6 space-y-2">
    <li>Sao lưu dữ liệu trước khi thay màn hình</li>
    <li>Mang theo giấy tờ tùy thân khi đến cửa hàng</li>
    <li>Kiểm tra kỹ màn hình trước khi nhận máy</li>
  </ul>
</div>
    `,
    gallery: [
      { id: 1, src: "/api/placeholder/800/600", alt: "iPhone 11 Screen Replacement" },
      { id: 2, src: "/api/placeholder/800/600", alt: "Screen Quality Comparison" },
      { id: 3, src: "/api/placeholder/800/600", alt: "Repair Process" },
      { id: 4, src: "/api/placeholder/800/600", alt: "After Service" },
    ],
    reviews: [
      {
        id: "1",
        author: "Nguyễn Văn A",
        rating: 5,
        date: "2024-03-15",
        content: "Dịch vụ rất tốt, nhân viên nhiệt tình, màn hình thay xong đẹp như mới."
      },
      {
        id: "2",
        author: "Trần Thị B",
        rating: 4,
        date: "2024-03-10",
        content: "Thời gian sửa chữa nhanh, giá cả hợp lý."
      }
    ]
  };

  const breadcrumbItems = [
    { label: 'Thay Màn Hình Điện Thoại', href: '/dich-vu/thay-man-hinh' },
    { label: 'Thay Màn Hình iPhone', href: '/dich-vu/thay-man-hinh-iphone' },
    { label: service.title },
  ];

  return (
    <div className="mx-auto px-4 pt-6 pb-20 bg-gradient-to-br from-primary/10 to-primary/5">
      <div className="container mx-auto max-w-7xl">
        <Breadcrumb items={breadcrumbItems} />
        <ServiceDetailClient service={service} />
      </div>
    </div>
  );
}