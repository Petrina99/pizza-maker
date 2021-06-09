import React from 'react';

import { Routing } from './modules';
import { BrowserRouter } from 'react-router-dom';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  );
};
