import { Topping } from './Topping';
export interface OrderModel {
  toppings: Topping[];
  toppingPrice: number;
  error?: string;
  quantity: number;
  size: string;
  sizePrice: number;
  discount: boolean;
  address: string | null;
  city: string | null;
  country: string | null;
  postalCode: number;
  payment: string;
  ccNumber?: number;
}
