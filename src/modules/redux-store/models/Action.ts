export interface ActionWithPayload<T extends string, P> {
  type: T;
  payload: P;
}
