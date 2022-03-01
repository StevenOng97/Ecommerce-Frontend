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

export interface FeedbackCard {
  text: string;
  avatar: any;
  userName: string;
  jobTitle: string;
  star: number;
}
