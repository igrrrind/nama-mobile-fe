import { ServiceRequest, Order, Service, Product, Component, Accessory, User, Banner } from '@/types';
import { ServiceStatus, OrderStatus, UserStatus, Role, CartStatus } from '@/types/enums';
import { ComponentCategory } from "@/types/component-category.interface";
import { AccessoryCategory } from "@/types/accessory-category.interface";
import { Color } from "@/types/color.interface";
import { Condition } from "@/types/condition.interface";
import { Storage } from "@/types/storage.interface";
import { Blog } from "@/types/blog.interface";

export const serviceRequests: ServiceRequest[] = [
  {
    id: 'SR001',
    customerId: 'C001',
    serviceDetailId: 'SD001',
    requestDate: new Date('2024-04-20'),
    estimatedCompletionDate: new Date('2024-04-22'),
    status: ServiceStatus.Đã_tiếp_nhận,
    totalPrice: 2000000,
    customer: {
      id: 'C001',
      fullName: 'Nguyen Van A',
      phoneNumber: '0123456789'
    },
    serviceDetail: {
      id: 'SD001',
      serviceRequestId: 'SR001',
      serviceModelPriceId: 'SMP001',
      componentId: 'C001'
    }
  }
];

export const orders: Order[] = [
  {
    id: 'ORD001',
    customerId: 'C001',
    cartId: 'CART001',
    orderDate: new Date('2024-04-19'),
    pickupDate: new Date('2024-04-20'),
    status: OrderStatus.Đang_chờ_xác_nhận,
    totalPrice: 1000000,
    customer: {
      id: 'C001',
      fullName: 'Tran Thi B',
      phoneNumber: '0987654321'
    },
    cart: {
      id: 'CART001',
      customerId: 'C001',
      status: CartStatus.Active,
      totalPrice: 1000000,
      createdAt: new Date(),
      updatedAt: new Date(),
      customer: {
        id: 'C001',
        fullName: 'Tran Thi B',
        phoneNumber: '0987654321'
      }
    }
  }
];

export const services: Service[] = [
  {
    id: 'S001',
    name: 'Sửa chữa màn hình iPhone',
    slug: 'sua-chua-man-hinh-iphone',
    serviceName: 'Sửa chữa màn hình iPhone',
    prices: [],
    image: 'service1.jpg',
    price: 2000000,
    rating: 4.5,
    reviews: 120
  }
];

export const products: Product[] = [
  {
    id: 'P001',
    name: 'iPhone 13 Pro Max',
    modelId: 'M001',
    conditionId: 'C001',
    colorId: 'COL001',
    storageId: 'S001',
    price: 15000000,
    stock: 5,
    condition: {
      id: 'C001',
      name: 'used'
    },
    slug: 'iphone-13-pro-max',
    image: 'product1.jpg',
    rating: 4.8,
    reviews: 250,
    cartItems: []
  }
];

export const components: Component[] = [
  {
    id: 'C001',
    name: 'Màn hình iPhone 13',
    modelId: 'M001',
    componentCategoryId: 'CC001',
    description: 'Màn hình chính hãng',
    price: 3000000,
    stock: 10,
    createdAt: new Date(),
    updatedAt: new Date(),
    slug: 'man-hinh-iphone-13',
    image: 'component1.jpg',
    rating: 4.7,
    reviews: 85,
    serviceDetails: [],
    componentCategory: {
      id: 'CC001',
      name: 'Màn hình',
    }
  }
];

export const componentCategories: ComponentCategory[] = [
  { id: "cat01", name: "Màn hình" },
  { id: "cat02", name: "Pin" },
  { id: "cat03", name: "Camera" },
  { id: "cat04", name: "Loa ngoài" },
  { id: "cat05", name: "Loa trong" },
  { id: "cat06", name: "Cáp sạc" },
  { id: "cat07", name: "Mainboard" },
  { id: "cat08", name: "Vỏ máy" },
  { id: "cat09", name: "Nút nguồn" },
  { id: "cat10", name: "Nút âm lượng" },
  { id: "cat11", name: "Kính lưng" },
  { id: "cat12", name: "Cụm rung" },
  { id: "cat13", name: "Cụm sạc" },
  { id: "cat14", name: "Cụm cảm biến" },
  { id: "cat15", name: "Cụm Face ID" },
  { id: "cat16", name: "Cụm Touch ID" },
  { id: "cat17", name: "Cụm micro" },
  { id: "cat18", name: "Cụm sim" },
  { id: "cat19", name: "Cụm wifi" },
  { id: "cat20", name: "Cụm bluetooth" },
];

export const accessoryCategories: AccessoryCategory[] = [
  { id: "acc01", name: "Ốp lưng" },
  { id: "acc02", name: "Cường lực" },
  { id: "acc03", name: "Sạc dự phòng" },
  { id: "acc04", name: "Tai nghe" },
  { id: "acc05", name: "Cáp dữ liệu" },
  { id: "acc06", name: "Thẻ nhớ" },
  { id: "acc07", name: "Giá đỡ điện thoại" },
  { id: "acc08", name: "Bút cảm ứng" },
  { id: "acc09", name: "Miếng dán màn hình" },
  { id: "acc10", name: "Balo - Túi chống sốc" },
  { id: "acc11", name: "Loa bluetooth" },
  { id: "acc12", name: "Đèn LED" },
  { id: "acc13", name: "Bộ vệ sinh" },
  { id: "acc14", name: "Remote chụp ảnh" },
  { id: "acc15", name: "Đế sạc không dây" },
  { id: "acc16", name: "Quạt mini" },
  { id: "acc17", name: "USB OTG" },
  { id: "acc18", name: "Bộ chia cổng" },
  { id: "acc19", name: "Pin tiểu" },
  { id: "acc20", name: "Khác" },
];

export const accessories: Accessory[] = [
  {
    id: 'A001',
    name: 'Cáp sạc 20W',
    modelId: 'M001',
    accessoryCategoryId: 'AC001',
    description: 'Cáp sạc nhanh chính hãng',
    price: 500000,
    stock: 50,
    createdAt: new Date(),
    updatedAt: new Date(),
    slug: 'cap-sac-20w',
    image: 'accessory1.jpg',
    rating: 4.6,
    reviews: 180
  }
];

export const colors: Color[] = [
  { id: "COL001", name: "Đen", imageUrl: "" },
  { id: "COL002", name: "Trắng", imageUrl: "" },
  { id: "COL003", name: "Xanh", imageUrl: "" },
];

export const conditions: Condition[] = [
  { id: "C001", name: "Như mới" },
  { id: "C002", name: "Tốt" },
  { id: "C003", name: "Khá" },
];

export const storages: Storage[] = [
  { id: "S001", name: "64GB" },
  { id: "S002", name: "128GB" },
  { id: "S003", name: "256GB" },
];

export const users: User[] = [
  {
    id: 'U001',
    username: 'admin',
    email: 'admin@example.com',
    fullName: 'Admin User',
    passwordHash: new Uint8Array(),
    passwordSalt: new Uint8Array(),
    role: Role.Admin,
    dateOfBirth: new Date('1990-01-01'),
    phoneNumber: '0123456789',
    isEmailConfirmed: true,
    status: UserStatus.Active
  }
];

export const banners: Banner[] = [
  {
    id: 'B001',
    name: 'Khuyến mãi tháng 4',
    imageUrl: 'banner1.jpg',
    redirectUrl: '/promotions'
  }
];

export const blogs: Blog[] = [
  {
    id: "1",
    authorId: "u1",
    author: "Nguyen Van A",
    title: "Hướng dẫn sử dụng điện thoại hiệu quả",
    content: "<p>Đây là nội dung bài viết mẫu về hướng dẫn sử dụng điện thoại hiệu quả.</p>",
    imageUrl: "https://via.placeholder.com/300x200",
    createdAt: "2024-05-01",
    isActive: true,
    slug: "huong-dan-su-dung-dien-thoai",
    relatedPosts: [
      { title: "Mẹo tiết kiệm pin", slug: "meo-tiet-kiem-pin" }
    ]
  },
  {
    id: "2",
    authorId: "u2",
    author: "Tran Thi B",
    title: "Bảo quản phụ kiện đúng cách",
    content: "<p>Đây là nội dung bài viết mẫu về bảo quản phụ kiện.</p>",
    imageUrl: "https://via.placeholder.com/300x200",
    createdAt: "2024-05-02",
    isActive: false,
    slug: "bao-quan-phu-kien",
    relatedPosts: []
  }
];