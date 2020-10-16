import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText("Shorten your long, unsightly URLs with a click of a button.");
  expect(linkElement).toBeInTheDocument();
});
