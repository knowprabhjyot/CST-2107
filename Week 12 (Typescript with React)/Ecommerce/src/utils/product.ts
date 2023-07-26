import { Product } from "../types/product";

export const getAllProducts = async (): Promise<Product[]> => {
  return await (await fetch("https://fakestoreapi.com/products")).json();
};
