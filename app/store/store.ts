import { Phones } from "@/helpers/types";
import { create } from "zustand";

type State = {
  sortBy: string;
  itemsOnPage: number;
  favoritesPhone: Phones[];
  quantityFavorites: number;
};

type Actions = {
  getSortBy: (qty: string) => void;
  getItemsOnPage: (qty: number) => void;
  add: (phone: Phones) => void;
  remove: (id: number) => void;
  increase: () => void;
  decrease: () => void;
};

const useStore = create<State & Actions>((set) => ({
  sortBy: "",
  itemsOnPage: 10,
  length: 0,
  favoritesPhone: [],
  quantityFavorites: 0,

  add: (phone: Phones) =>
    set((state) => ({ favoritesPhone: [...state.favoritesPhone, phone] })),
  remove: (id: number) =>
    set((state) => ({
      favoritesPhone: (state.favoritesPhone = state.favoritesPhone.filter(
        (phone) => phone._id !== id,
      )),
    })),

  increase: () =>
    set((state) => ({ quantityFavorites: state.quantityFavorites + 1 })),

  decrease: () =>
    set((state) => ({
      quantityFavorites: Math.max(0, state.quantityFavorites - 1),
    })),

  getSortBy: (qty: string) =>
    set((state) => ({ sortBy: (state.sortBy = qty) })),
  getItemsOnPage: (qty: number) =>
    set((state) => ({ itemsOnPage: (state.itemsOnPage = qty) })),
}));

export default useStore;
