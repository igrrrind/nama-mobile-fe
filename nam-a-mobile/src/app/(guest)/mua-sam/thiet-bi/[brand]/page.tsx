// app/hang-cu/[brand]/page.tsx
import { brandService } from "@/lib/api/services/brand.service";
import { productService } from "@/lib/api/services/product.service";
import { notFound } from "next/navigation";
import { Grid3X3, ArrowUp, Filter } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ItemCardWrapper from "@/components/shared/ItemCardWrapper";



export async function generateStaticParams() {
  const brand = await brandService.getBrands();
  return brand.result?.map((b) => ({
    brand: b.name,
  })) ?? [];
}


export default async function BrandListingPage({
  params,
}: {
  params: Promise<{ brand: string }>
}) {
  const { brand } = await params;
  console.log(brand)
  const products = await productService.getProductsByBrandandModelSlugs(brand);
  const brandName = products.result?.data && products.result?.data[0].model?.brandName
  
  if (products.statusCode == 404) {
    notFound();
  }

  const breadcrumbItems = [
    { label: brand }
  ];
  
  return (
    <div>
      {/* Banner thương hiệu */}
      <section className="min-h-screen px-4 pt-6 pb-8 bg-gray-50">
        <div className="container mx-auto">
          <Breadcrumb items={breadcrumbItems}/>

          {/* Thông tin thương hiệu */}
          <div className="bg-white p-4 my-4 rounded-2xl shadow-sm mb-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden border-2 border-primary/20">
                <div className="text-xl font-bold text-primary">{brand.charAt(0).toUpperCase()}</div>
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-gray-800">{brand.toUpperCase()} CŨ</h2>
                <p className="text-gray-600 mt-1">
                  {brandName} cũ chính hãng, chất lượng cao, giá tốt tại Nam Á Mobile
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Sidebar lọc  */}
           <Card className="w-full lg:w-52 shrink-0 rounded-2xl">
              <div className="bg-white px-4 pb-4 rounded-lg shadow-sm sticky top-32">
                <h3 className="font-bold text-lg text-gray-800 mb-4 flex items-center gap-2">
                  <Filter className="w-5 h-5 text-primary" /> Bộ lọc sản phẩm
                </h3>
                
                <div className="mb-4 border-b pb-4">
                  <h4 className="font-medium text-gray-700 mb-2">Khoảng giá</h4>
                  <div className="space-y-2 text-sm">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded text-primary" />
                      <span className="text-gray-600">Dưới 3 triệu</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded text-primary" />
                      <span className="text-gray-600">3 - 7 triệu</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded text-primary" />
                      <span className="text-gray-600">7 - 10 triệu</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded text-primary" />
                      <span className="text-gray-600">Trên 10 triệu</span>
                    </label>
                  </div>
                </div>
                
                <div className="mb-4 border-b pb-4 text-sm">
                  <h4 className="font-medium text-gray-700 mb-2">Tình trạng</h4>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded text-primary" />
                      <span className="text-gray-600">Như mới (99%)</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded text-primary" />
                      <span className="text-gray-600">Đẹp (95-98%)</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded text-primary" />
                      <span className="text-gray-600">Tốt (90-95%)</span>
                    </label>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold text-sm text-gray-700 mb-2">Sắp xếp theo</h4>
                  <select className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary">
                    <option>Mặc định</option>
                    <option>Giá: Thấp đến cao</option>
                    <option>Giá: Cao đến thấp</option>
                    <option>Mới nhất</option>
                    <option>Bán chạy nhất</option>
                  </select>
                </div>
                <div className="w-full flex justify-center">
                <Button className="mt-4 mx-auto">
                  Áp dụng
                </Button>
                </div>
              </div>
            </Card>
            
            {/* Phần sản phẩm chính */}
            <div className="flex-1">
              {/* Phần tiêu đề và điều khiển */}
              <div className="p-2 mb-4">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <h3 className="text-lg  text-gray-800">
                    Đã tìm thấy <span className="font-bold">{products.result?.data?.length || 0}</span> kết quả
                  </h3>
                  
                  {/* <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-500">Hiển thị:</span>
                    <div className="flex border rounded-md overflow-hidden">
                      <button className="p-2 bg-primary text-white hover:bg-primary/90">
                        <Grid3X3 className="w-4 h-4" />
                      </button>
                      <button className="p-2 bg-white text-gray-600 hover:bg-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="21" y1="8" x2="3" y2="8"></line>
                          <line x1="21" y1="16" x2="3" y2="16"></line>
                        </svg>
                      </button>
                    </div>
                  </div> */}
                </div>
              </div>
              
              {/* Hiển thị sản phẩm với ItemCardWrapper */}
              {products.result?.data && products.result.data.length > 0 ? (
                <div className="@container">
                <ItemCardWrapper 
                  items={
                    products.result?.data.map(p => ({
                      ...p, 
                      name: `${p.modelName} ${p.storageName} ${p.conditionName}`,
                      slug: `${p.model?.slug}_${p.slug}`
                    })) ?? []
                  } 
                  type="mua-sam"
                />
                </div>
              ) : (
                <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                  <svg className="w-12 h-12 mx-auto text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  <h3 className="text-lg font-medium text-gray-800 mb-1">Không tìm thấy sản phẩm</h3>
                  <p className="text-gray-600">Hiện không có sản phẩm {brand} nào phù hợp với yêu cầu của bạn.</p>
                </div>
              )}
              
              {/* Phân trang */}
              {products.result?.data && products.result.data.length > 0 && (
                <div className="mt-6 flex justify-center">
                  <div className="flex items-center gap-1">
                    <button className="w-10 h-10 rounded-md flex items-center justify-center border border-gray-300 text-gray-600 hover:bg-gray-50">
                      &laquo;
                    </button>
                    <button className="w-10 h-10 rounded-md flex items-center justify-center bg-primary text-white">
                      1
                    </button>
                    <button className="w-10 h-10 rounded-md flex items-center justify-center border border-gray-300 text-gray-600 hover:bg-gray-50">
                      2
                    </button>
                    <button className="w-10 h-10 rounded-md flex items-center justify-center border border-gray-300 text-gray-600 hover:bg-gray-50">
                      3
                    </button>
                    <button className="w-10 h-10 rounded-md flex items-center justify-center border border-gray-300 text-gray-600 hover:bg-gray-50">
                      &raquo;
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Nút cuộn lên đầu trang */}
      <button 
        className="fixed bottom-6 right-6 w-10 h-10 rounded-full bg-primary text-white shadow-lg flex items-center justify-center hover:bg-primary/90 transition"
        // onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
      >
        <ArrowUp className="w-4 h-4" />
      </button>
    </div>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ brand: string }>;
}) {
  const { brand } = await params;
  return {
    title: `Mua ${brand} Cũ Chính Hãng Giá Tốt | Nam Á Mobile Tân Phú`,
    description: `Tìm mua điện thoại ${brand} cũ chính hãng, bảo hành rõ ràng, giá rẻ tại Nam Á Mobile - cửa hàng uy tín tại Tân Phú. Nhiều mẫu mã, hỗ trợ trả góp, giao hàng nhanh.`,
    keywords: [
      `${brand} cũ`,
      `${brand} chính hãng`,
      `${brand} giá rẻ`,
      `Nam Á Mobile`,
      `điện thoại cũ Tân Phú`,
      `${brand} second-hand`,
      `mua bán điện thoại cũ`,
    ],
    openGraph: {
      title: `Mua ${brand} Cũ Chính Hãng Giá Tốt | Nam Á Mobile`,
      description: `Khám phá các mẫu điện thoại ${brand} cũ chất lượng cao tại Nam Á Mobile Tân Phú. Cam kết bảo hành, giá hợp lý, hỗ trợ giao hàng nhanh.`,
      url: `https://namamobile.vn/${brand}`,
      type: "website",
    },
  };
}