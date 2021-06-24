export interface OrderModel {
  quantity: number;
  size: string | null;
  discount: boolean;
  price: number;
  address: string | null;
  city: string | null;
  country: string | null;
  postalCode: number;
  payment: string;
  ccNumber?: number;
}
