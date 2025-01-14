import { SetStateAction } from "react";

export type TPost = {
  id: string;
  title: string;
  description: string;
  image: string;
  cta: string;
};

export type TitleProps = {
  heading: string;
  generalText: string;
};

export type TProductCardProps = {
  _id: string;
  id: string;
  productName: string;
  productId: string;
  name: string;
  rating: number;
  brand: string;
  availableQuantity: number;
  price: number;
  image: string;
  quantity: number;
  description: string;
};

export interface TService {
  _id: string;
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  ratings: number;
}

export interface TServiceDetails {
  service: SetStateAction<TService>;
  _id: string;
  title: string;
  description: string;
  img: string;
  price: number;
  ratings: number;
  reviews: string[];
}

export interface TTProduct {
  _id: string;
  id: number;
  name: string;
  description?: string;
  price: number;
  image?: string;
  ratings?: number;
  quantity: number;
}

export interface TProduct {
  _id: string;
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  ratings: number;
}

export interface TProductNumberPrice {
  _id: string;
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  ratings: number;
  quantity: number;
}

export interface TProductDetails {
  _id: string;
  title: string;
  description: string;
  img: string;
  price: number;
  ratings: number;
  reviews: string[];
}

export interface TProductDetailsResponse {
  service: TProduct;
}

export interface TProductListResponse {
  services: TProduct[];
}

export interface TUserData {
  _id: string;
  email: string;
  name: string;
  imge: string;
  price: number;
}

export interface TServiceDetailsResponse {
  service: TService;
}

export interface TServiceListResponse {
  services: TService[];
}

export interface TUserData {
  _id: string;
  email: string;
  name: string;
  imge: string;
  price: number;
}
