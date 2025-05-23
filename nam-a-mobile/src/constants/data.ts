import { Product } from "@/types";
import { CartItem } from "@/types/cart-item.interface";
import { Cart } from "@/types/cart.interface";
import { CartStatus } from "@/types/enums";
import { Item } from "@/types/Item";

export const mockItems: Item[] = [
  {
    id: "1",
    slug: "thay-man-hinh-iphone-14-pro",
    image: "/images/iphone14pro-screen.jpg",
    name: "Thay màn hình iPhone 14 Pro",
    price: 3999999,
    rating: 5.0,
    reviews: 46,
    stock: 12,
  },
  {
    id: "2",
    slug: "pin-iphone-xs-max",
    image: "", // Không có hình ảnh
    name: "Pin iPhone XS Max chính hãng",
    price: 699000,
    rating: 4.8,
    reviews: 21,
    stock: 5,
  },
  {
    id: "3",
    slug: "op-lung-silicon-galaxy-s23",
    image: "/images/op-silicon-s23.jpg",
    name: "Ốp lưng silicon Galaxy S23",
    price: 159000,
    rating: 4.2,
    reviews: 7,
    stock: 0, // Hết hàng
  },
  {
    id: "4",
    slug: "cap-sac-type-c-20w",
    image: "/images/cap-sac-typec.jpg",
    name: "Cáp sạc Type-C 20W nhanh",
    price: 99000,
    rating: 4.5,
    reviews: 13,
    stock: 30,
  },
  {
    id: "5",
    slug: "tai-nghe-bluetooth-chong-on",
    image: "/images/tai-nghe-chong-on.jpg",
    name: "Tai nghe Bluetooth chống ồn",
    price: 1190000,
    rating: 4.9,
    reviews: 112,
    stock: 0,
  },
  {
    id: "6",
    slug: "cu-sac-nhanh-25w-samsung",
    image: "/images/cu-sac-nhanh-25w.jpg",
    name: "Củ sạc nhanh 25W Samsung",
    price: 329000,
    rating: 4.7,
    reviews: 38,
    // Không có trường stock, sẽ coi là hết hàng
  }
];

export const extraItems1: Item[] = [
    {
      id: "101",
      slug: "cap-sac-nhanh-iphone",
      name: "Cáp sạc nhanh iPhone",
      price: 150000,
      image: "/images/cap-sac-nhanh.jpg",
      rating: 4.5,
      reviews: 10,
      stock: 15
    },
    {
      id: "102",
      slug: "op-lung-chong-soc",
      name: "Ốp lưng chống sốc",
      price: 120000,
      image: "/images/op-lung.jpg",
      rating: 4.3,
      reviews: 8,
      stock: 20
    },
    {
      id: "103",
      slug: "kinh-cuong-luc",
      name: "Kính cường lực",
      price: 80000,
      image: "/images/kinh-cuong-luc.jpg",
      rating: 4.6,
      reviews: 14,
      stock: 30
    }
  ];
  
  export const extraItems2: Item[] = [
    {
      id: "201",
      slug: "combo-thay-pin-vesinh",
      name: "Combo thay pin + vệ sinh máy",
      price: 350000,
      image: "/images/combo-pin-vesinh.jpg",
      rating: 4.7,
      reviews: 25,
      stock: 10
    },
    {
      id: "202",
      slug: "combo-man-hinh-dan-kinh",
      name: "Combo thay màn hình + dán kính",
      price: 1200000,
      image: "/images/combo-man-hinh-kinh.jpg",
      rating: 4.8,
      reviews: 18,
      stock: 5
    }
  ];

  const mockProducts: Product[] = [
    {
      id: "P001",
      slug: "iphone-13-pro-max",
      image: "/images/iphone13promax.jpg",
      name: "iPhone 13 Pro Max",
      price: 15000000,
      rating: 4.8,
      reviews: 250,
      stock: 5,
      modelId: "M001",
      conditionId: "C001",
      colorId: "COL001",
      storageId: "S001",
      cartItems: [],
      condition: { id: "C001", name: "used" },
    },
    {
      id: "P002",
      slug: "samsung-galaxy-s22",
      image: "/images/galaxy-s22.jpg",
      name: "Samsung Galaxy S22",
      price: 12000000,
      rating: 4.7,
      reviews: 180,
      stock: 3,
      modelId: "M002",
      conditionId: "C002",
      colorId: "COL002",
      storageId: "S002",
      cartItems: [],
      condition: { id: "C002", name: "new" },
    },
  ];
  
  // Mock cart items
  const mockCartItems: CartItem[] = [
    {
      id: "CI001",
      cartId: "CART001",
      productId: "P001",
      quantity: 1,
      price: 15000000,
      product: mockProducts[0],
    },
    {
      id: "CI002",
      cartId: "CART001",
      productId: "P002",
      quantity: 2,
      price: 12000000,
      product: mockProducts[1],
    },
  ];

  export const mockCart: Cart = {
    id: "CART001",
    customerId: "CUST001",
    createdAt: new Date(),
    updatedAt: new Date(),
    status: CartStatus.Active,
    totalPrice: mockCartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    cartItems: mockCartItems,
    customer: {
      id: "CUST001",
      fullName: "Nguyễn Văn A",
      phoneNumber: "0909123456",
    },
  };
  
