import React from 'react';
import './App.css';
import { ToppingSelector, PizzaSize, Discount, Finisher } from './modules';
import { BrowserRouter } from 'react-router-dom';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ToppingSelector />
      <PizzaSize />
      <Discount />
      <Finisher />
    </BrowserRouter>
  );
};
