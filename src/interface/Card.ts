export interface Card {
  label: string;
  value?: string;
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
