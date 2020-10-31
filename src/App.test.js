import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders header', () => {
  const { getByTestId } = render(<App />);
  const headerElement = getByTestId("header");
  expect(headerElement).toBeInTheDocument();
});
