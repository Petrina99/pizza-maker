import { ToppingModel } from '../models';

import chilli from 'images/chilli.svg';
import corn from 'images/corn.svg';
import meat from 'images/meat.svg';
import pineapple from 'images/pineapple.svg';
import bacon from 'images/bacon.svg';
import egg from 'images/egg.svg';
import shrooms from 'images/shrooms.svg';

export const toppingArray: ToppingModel[] = [
  {
    title: 'Chilli',
    id: 1,
    image: chilli,
  },
  {
    title: 'Corn',
    id: 2,
    image: corn,
  },
  {
    title: 'Egg',
    id: 3,
    image: egg,
  },
  {
    title: 'Pineapple',
    id: 4,
    image: pineapple,
  },
  {
    title: 'Meat',
    id: 5,
    image: meat,
  },
  {
    title: 'Shrooms',
    id: 6,
    image: shrooms,
  },
  {
    title: 'Bacon',
    id: 7,
    image: bacon,
  },
];
