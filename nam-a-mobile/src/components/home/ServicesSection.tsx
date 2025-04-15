import Link from "next/link";
import React from "react";

type Service = {
    title: string;
    link: string;
    iconUrl: string;
    descriptionPoints: string[];
};

export const ServiceSection = ({ services = servicesFallback }: { services?: Service[] }) => {
    return (
        <section className="py-4 pb-8 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {services.map((service) => (
                <div
                  key={service.title}
                 
                  className="group p-4 flex rounded-2xl text-center items-center transition-all bg-white shadow-md hover:shadow-lg hover:-translate-y-1 duration-300"
                >
                  <div className="w-20 h-20 mb-4 bg-blue-100 rounded-2xl flex items-center justify-center">
                    <img src={service.iconUrl} alt={service.title} className="w-16 h-16 object-contain" />
                  </div>
                  <div className="ml-4 flex-1">
                    <h3 className="text-lg font-semibold mb-2 text-left text-gray-800">{service.title}</h3>
                    <ul className="text-sm text-blue-600 space-y-2">
                      {service.descriptionPoints.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-left">
                          <Link href={service.link} className=" transition-colors flex items-left ">
                             <span className="hover:text-primary-dark">→ {point}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
};

const servicesFallback: Service[] = [
  {
    title: "Sửa chữa iPhone",
    link: "#",
    iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/IPhone_16_Pro_Vector.svg/440px-IPhone_16_Pro_Vector.svg.png",
    descriptionPoints: [
      "Thay màn hình bị vỡ",
      "Thay pin dung lượng cao",
      "Lắp kính cường lực mới",
    ],
  },
  {
    title: "Sửa chữa Samsung",
    link: "#",
    iconUrl: "https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/samsung/Samsung-Galaxy-S24-FE/Black/Samsung-Galaxy-S24-FE-Black-frontimage.png",
    descriptionPoints: [
      "Khắc phục vỡ màn hình",
      "Thay pin chính hãng",
      "Gắn kính cường lực chất lượng",
    ],
  },
  {
    title: "Sửa chữa Laptop",
    link: "#",
    iconUrl: "https://i0.wp.com/vuatao.vn/wp-content/uploads/2021/06/macbook-air-m1-2020-8-core-gpu-gold-thumb-650x650-1.png?fit=650%2C650&ssl=1",
    descriptionPoints: [
      "Sửa màn hình bị sọc/vỡ",
      "Nâng cấp/thay thế pin",
      "Dán kính bảo vệ màn hình",
    ],
  },
  {
    title: "Sửa chữa Smartwatch",
    link: "#",
    iconUrl: "https://parspng.com/wp-content/uploads/2023/06/watchpng.parspng.com-9.png",
    descriptionPoints: [
      "Thay màn hình cảm ứng",
      "Thay pin smartwatch",
      "Gắn kính bảo vệ mới",
    ],
  },
];