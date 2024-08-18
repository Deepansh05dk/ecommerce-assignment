import { create } from "zustand";
import { CartItemType } from "@/types";
import { persist, createJSONStorage } from "zustand/middleware";
import { toast } from "react-hot-toast";

interface CartStore {
  items: CartItemType[];
  addItem: (data: CartItemType) => void;
  removeItem: (id: number) => void;
  updateItem: (id: number, value: number) => void
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: CartItemType) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === data.id);

        if (existingItem) {
          return toast("Item already in cart.");
        }

        set({ items: [...get().items, data] });
        toast.success("Item added to cart.");
      },
      removeItem: (id: number) => {
        set({ items: [...get().items.filter((item) => item.id !== id)] });
      },
      updateItem: (id: number, value: number) => {
        const currentItems = get().items;
        currentItems.forEach((item, index) => {
          if (item.id === id) {
            currentItems[index].quantity = value
          }
        })
        console.log(currentItems)
        set({ items: currentItems })
      }
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;

