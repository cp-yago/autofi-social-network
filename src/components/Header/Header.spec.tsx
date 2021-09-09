import React from 'react';
import { screen, render } from '@testing-library/react';
import Header from './Header';

describe('Header component', () => {
  it('renders correctly', () => {
    render(<Header />);
    expect(screen.getByAltText('Logo')).toBeInTheDocument();
  });
});
