export type Product = {
  id: string;
  category: string;
  title: string;
  price: number;
  description: string;
  image: string;
  rating: Rating;
  amount: number;
};

export type Rating = {
  rate: number;
  count: number;
};
