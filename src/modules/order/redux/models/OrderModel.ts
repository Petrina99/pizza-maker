import { Topping, DataModel } from 'modules/order/redux/models';
export interface OrderModel {
  toppings: Topping[];
  error?: string;
  pizzaData: DataModel;
}
