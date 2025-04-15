export interface Item {
    id: number;
    slug: string;
    image: string;
    name: string;
    price: number;
    rating: number;       // e.g., 5.0
    reviews: number;      // e.g., 46
    stock?: number;    // optional: true = "Còn hàng"
}
  