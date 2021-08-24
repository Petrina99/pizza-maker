export interface ActionWithPayload<T extends string, P> {
  type: T;
  payload: P;
}

export interface Action<T extends string> {
  type: T;
}
