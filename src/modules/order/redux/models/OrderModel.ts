export interface OrderModel {
  error?: string;
  quantity: number;
  size: string;
  discount: boolean;
  address: string | null;
  city: string | null;
  country: string | null;
  postalCode: number;
  payment: string;
  ccNumber?: number;
}
