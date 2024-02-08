export interface Phones {
  _id: number;
  name: string;
  capacity: string;
  image: string;
  isSale: boolean;
  price: number;
  ram: string;
  sale: number;
  screen: string;
  selected?: boolean;
  selectedCart?: boolean;
  quantity: number;
}
