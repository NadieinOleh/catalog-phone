import { Phones } from "@/helpers/types";
import { create } from "zustand";

type State = {
  sortBy: string;
  itemsOnPage: number;
  favoritePhones: Phones[];
  quantityFavorites: number;
  phones: Phones[];
  cartPhones: Phones[];
  quantityCart: number;
};

type Actions = {
  getSortBy: (qty: string) => void;
  getItemsOnPage: (qty: number) => void;
  addHeart: (phone: Phones) => void;
  addCart: (phone: Phones) => void;
  removeCart: (id: number) => void;
  removeHeart: (id: number) => void;
  increaseHeart: () => void;
  increaseCart: () => void;
  decreaseHeart: () => void;
  decreaseCart: () => void;
  editHeart: (id: number) => void;
  editCart: (id: number) => void;
  increaseQuantityCart: (id: number) => void;
  decreaseQuantityCart: (id: number) => void;
  setPhones: (phones: Phones[]) => void;
};

const useStore = create<State & Actions>((set) => ({
  sortBy: "",
  itemsOnPage: 10,
  length: 0,
  favoritePhones: [],
  cartPhones: [],
  quantityFavorites: 0,
  quantityCart: 0,
  phones: [],

  setPhones: (phones: Phones[]) =>
    set(() => ({
      phones: phones.map((phone) => ({
        ...phone,
        selected: false,
        selectedCart: false,
      })),
    })),

  editCart: (id: number) =>
    set((state) => ({
      phones: state.phones.map((phone) => {
        if (phone._id === id) {
          return { ...phone, selectedCart: !phone.selectedCart };
        } else {
          return phone;
        }
      }),
    })),
  increaseQuantityCart: (id: number) =>
    set((state) => ({
      cartPhones: state.cartPhones.map((phone) => {
        if (phone._id === id) {
          return { ...phone, quantity: phone.quantity + 1 };
        } else {
          return phone;
        }
      }),
    })),
  decreaseQuantityCart: (id: number) =>
    set((state) => ({
      cartPhones: state.cartPhones.map((phone) => {
        if (phone._id === id) {
          return { ...phone, quantity: phone.quantity - 1 };
        } else {
          return phone;
        }
      }),
    })),
  addCart: (phone: Phones) =>
    set((state) => ({
      cartPhones: [
        ...state.cartPhones,
        { ...phone, selectedCart: true, quantity: 1 },
      ],
    })),
  removeCart: (id: number) =>
    set((state) => ({
      cartPhones: (state.cartPhones = state.cartPhones.filter(
        (phone) => phone._id !== id,
      )),
    })),

  addHeart: (phone: Phones) =>
    set((state) => ({
      favoritePhones: [...state.favoritePhones, { ...phone, selected: true }],
    })),
  removeHeart: (id: number) =>
    set((state) => ({
      favoritePhones: (state.favoritePhones = state.favoritePhones.filter(
        (phone) => phone._id !== id,
      )),
    })),
  editHeart: (id: number) =>
    set((state) => ({
      phones: state.phones.map((phone) => {
        if (phone._id === id) {
          return { ...phone, selected: !phone.selected };
        } else {
          return phone;
        }
      }),
    })),

  increaseHeart: () =>
    set((state) => ({ quantityFavorites: state.quantityFavorites + 1 })),

  decreaseHeart: () =>
    set((state) => ({
      quantityFavorites: Math.max(0, state.quantityFavorites - 1),
    })),

  increaseCart: () =>
    set((state) => ({ quantityCart: state.quantityCart + 1 })),

  decreaseCart: () =>
    set((state) => ({
      quantityCart: Math.max(0, state.quantityCart - 1),
    })),

  getSortBy: (qty: string) =>
    set((state) => ({ sortBy: (state.sortBy = qty) })),
  getItemsOnPage: (qty: number) =>
    set((state) => ({ itemsOnPage: (state.itemsOnPage = qty) })),
}));

export default useStore;


