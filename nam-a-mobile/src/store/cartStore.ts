// stores/cartStore.ts
import { CartItem } from '@/types/cart-item.interface'
import { create } from 'zustand'


type CartState = {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: string) => void
  clearCart: () => void
  updateQuantity: (id: string, quantity: number) => void
}

export const useCartStore = create<CartState>((set) => ({
  items: [],
  addItem: (item) =>
    set((state) => {
      const existing = state.items.find((i) => i.id === item.productId)
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.productId === item.productId ? { ...i, quantity: i.quantity + item.quantity } : i
          ),
        }
      } else {
        return { items: [...state.items, item] }
      }
    }),
  removeItem: (id) => set((state) => ({ items: state.items.filter((i) => i.productId !== id) })),
  updateQuantity: (id, quantity) =>
    set((state) => ({
      items: state.items.map((i) =>
        i.productId === id ? { ...i, quantity } : i
      ),
    })),
  clearCart: () => set({ items: [] }),
}))
