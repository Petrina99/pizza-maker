import { ActionWithPayload } from '../models';

export function createAction<T extends string, P>(
  type: T,
  payload: P,
): ActionWithPayload<T, P>;

export function createAction<T extends string, P>(
  type: T,
  payload?: P,
): { type: T } | { type: T; payload: P } {
  return !payload ? { type } : { type, payload };
}
