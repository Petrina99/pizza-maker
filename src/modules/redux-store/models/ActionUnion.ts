import { ActionCreatorsMapObject } from 'redux';

export type ActionUnion<A extends ActionCreatorsMapObject> = ReturnType<
  A[keyof A]
>;
