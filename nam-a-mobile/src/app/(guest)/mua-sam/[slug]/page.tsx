import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { MuaSamClient } from '@/components/mua-sam/MuaSamClient';

export default function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  // This would normally come from an API
  const product = {
    title: 'iPhone 11 64GB',
    rating: 5,
    totalRatings: 22,
    currentPrice: 7900000,
    originalPrice: 12900000,
    warranty: '12 Tháng',
    gallery: [
      { src: "/api/placeholder/800/600", alt: "iPhone 11 Black" },
      { src: "/api/placeholder/800/600", alt: "iPhone 11 Front" },
      { src: "/api/placeholder/800/600", alt: "iPhone 11 Back" },
      { src: "/api/placeholder/800/600", alt: "iPhone 11 Side" },
    ],
    content: `
      <div class="space-y-8">
        <section>
          <h2 class="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
            <span class="w-1 h-8 bg-primary rounded-full"></span>
            Thông số kỹ thuật
          </h2>
          <div class="bg-white rounded-xl p-6 shadow-sm">
            <table class="w-full">
              <tbody class="divide-y">
                <tr class="group">
                  <td class="py-3 text-gray-600 w-1/3">Màn hình</td>
                  <td class="py-3 font-medium">6.1 inch Liquid Retina HD</td>
                </tr>
                <tr class="group">
                  <td class="py-3 text-gray-600">Chip</td>
                  <td class="py-3 font-medium">A13 Bionic</td>
                </tr>
                <tr class="group">
                  <td class="py-3 text-gray-600">RAM</td>
                  <td class="py-3 font-medium">4GB</td>
                </tr>
                <tr class="group">
                  <td class="py-3 text-gray-600">Bộ nhớ trong</td>
                  <td class="py-3 font-medium">64GB</td>
                </tr>
                <tr class="group">
                  <td class="py-3 text-gray-600">Camera sau</td>
                  <td class="py-3 font-medium">12MP + 12MP</td>
                </tr>
                <tr class="group">
                  <td class="py-3 text-gray-600">Camera trước</td>
                  <td class="py-3 font-medium">12MP</td>
                </tr>
                <tr class="group">
                  <td class="py-3 text-gray-600">Pin</td>
                  <td class="py-3 font-medium">3110mAh</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
            <span class="w-1 h-8 bg-primary rounded-full"></span>
            Tính năng nổi bật
          </h2>
          <div class="bg-white rounded-xl p-6 shadow-sm">
            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <span class="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0"></span>
                <span>Màn hình Liquid Retina HD 6.1 inch cho trải nghiệm hình ảnh sống động</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0"></span>
                <span>Chip A13 Bionic mạnh mẽ, xử lý mượt mà mọi tác vụ</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0"></span>
                <span>Hệ thống camera kép 12MP với Night mode, chụp ảnh đẹp trong mọi điều kiện</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0"></span>
                <span>Chống nước IP68, an toàn khi sử dụng dưới độ sâu 2m trong 30 phút</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0"></span>
                <span>Face ID bảo mật cao, mở khóa nhanh chóng và an toàn</span>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
            <span class="w-1 h-8 bg-primary rounded-full"></span>
            Phụ kiện đi kèm
          </h2>
          <div class="bg-white rounded-xl p-6 shadow-sm">
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div class="p-4 border rounded-lg text-center">
                <div class="text-primary mb-2">📱</div>
                <div class="font-medium">iPhone 11</div>
              </div>
              <div class="p-4 border rounded-lg text-center">
                <div class="text-primary mb-2">🔌</div>
                <div class="font-medium">Cáp Lightning</div>
              </div>
              <div class="p-4 border rounded-lg text-center">
                <div class="text-primary mb-2">🔋</div>
                <div class="font-medium">Củ sạc 5W</div>
              </div>
              <div class="p-4 border rounded-lg text-center">
                <div class="text-primary mb-2">🎧</div>
                <div class="font-medium">Tai nghe EarPods</div>
              </div>
              <div class="p-4 border rounded-lg text-center">
                <div class="text-primary mb-2">📖</div>
                <div class="font-medium">Sách hướng dẫn</div>
              </div>
              <div class="p-4 border rounded-lg text-center">
                <div class="text-primary mb-2">📍</div>
                <div class="font-medium">Que lấy sim</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    `,
    options: [
      {
        name: 'Màu đen',
        price: 7900000,
      },
      {
        name: 'Màu trắng',
        price: 7900000,
      },
      {
        name: 'Màu tím',
        price: 8100000,
      },
    ],
    reviews: [
      {
        id: "1",
        author: "Nguyễn Văn A",
        rating: 5,
        date: "2024-03-15",
        content: "Sản phẩm chính hãng, đóng gói cẩn thận, giao hàng nhanh."
      },
      {
        id: "2",
        author: "Trần Thị B",
        rating: 4,
        date: "2024-03-10",
        content: "Máy đẹp, pin tốt, camera chụp đẹp. Giá hơi cao."
      }
    ]
  };

  const breadcrumbItems = [
    { label: 'Điện thoại', href: '/mua-sam/dien-thoai' },
    { label: 'iPhone', href: '/mua-sam/dien-thoai/iphone' },
    { label: product.title },
  ];

  return (
    <div className="mx-auto px-4 py-4 bg-gradient-to-br from-primary/10 to-primary/5">
      <div className="container mx-auto max-w-7xl">
        <Breadcrumb items={breadcrumbItems} />
        <MuaSamClient product={product} />
      </div>
    </div>
  );
} 