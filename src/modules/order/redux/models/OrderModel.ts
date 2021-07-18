import { Topping } from 'modules/order/redux/models';
export interface OrderModel {
  toppings: Topping[];
  error?: string;
  quantity: number;
  size: string;
  discount: boolean;
  payment: string;
  ccNumber: number;
}
