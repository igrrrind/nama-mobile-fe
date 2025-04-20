import { ServiceRequest, Order, Service, Product, Component, Accessory, User, Banner } from '@/types';
import { ServiceStatus, OrderStatus, UserStatus, Role, CartStatus } from '@/types/enums';

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
    serviceModelPrices: [],
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
    serviceDetails: []
  }
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