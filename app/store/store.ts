import {create} from 'zustand';

type State = {
  sortBy: string;
  itemsOnPage: number;
};

type Actions = {
  getSortBy: (qty: string) => void;
  getItemsOnPage: (qty: number) => void;
};

const useStore = create<State & Actions>(set => ({
  sortBy: '',
  itemsOnPage: 10,
  length: 0,
  getSortBy: (qty: string) => set(state => ({sortBy: (state.sortBy = qty)})),
  getItemsOnPage: (qty: number) => set(state => ({itemsOnPage: (state.itemsOnPage = qty)})),
}));

export default useStore;
