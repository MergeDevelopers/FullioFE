import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

export const renderWithProvider = (ui, options) => {
  return render(ui, {
    ...options,
    wrapper: BrowserRouter,
  });
};
