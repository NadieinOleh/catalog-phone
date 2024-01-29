import { Phones } from "@/helpers/types";
import { create } from "zustand";

type State = {
  sortBy: string;
  itemsOnPage: number;
  favoritesPhone: Phones[];
  quantityFavorites: number;
  phones: Phones[];
};

type Actions = {
  getSortBy: (qty: string) => void;
  getItemsOnPage: (qty: number) => void;
  add: (phone: Phones) => void;
  remove: (id: number) => void;
  increase: () => void;
  decrease: () => void;
  edit: (id: number) => void;
  setPhones: (phones: Phones[]) => void;
};

const useStore = create<State & Actions>((set) => ({
  sortBy: "",
  itemsOnPage: 10,
  length: 0,
  favoritesPhone: [],
  quantityFavorites: 0,
  phones: [],

  setPhones: (phones: Phones[]) =>
    set(() => ({
      phones: phones.map((phone) => ({ ...phone, selected: false })),
    })),
  edit: (id: number) =>
    set((state) => ({
      phones: state.phones.map((phone) => {
        if (phone._id === id) {
          return { ...phone, selected: !phone.selected };
        } else {
          return phone;
        }
      }),
    })),

  add: (phone: Phones) =>
    set((state) => ({
      favoritesPhone: [...state.favoritesPhone, { ...phone, selected: true }],
    })),
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
