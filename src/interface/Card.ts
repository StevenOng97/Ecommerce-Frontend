export interface Card {
  label: string;
  _id?: string;
  image?: any;
  isNew?: boolean;
  price?: number;
  priceAfterSale?: number;
  size?: string;
  stock?: string;
  sale?: string;
  action?: () => any;
}
