import React from 'react';
import { screen, render } from '@testing-library/react';
import Commentary from './Commentary';

describe('Commentary component', () => {
  it('renders correctly', () => {
    render(
      <Commentary
        name="Yago"
        email="yago.cunha123@gmail.com"
        body="Fake comment"
      />,
    );
    expect(screen.getByText('Yago')).toBeInTheDocument();
    expect(screen.getByText('yago.cunha123@gmail.com')).toBeInTheDocument();
    expect(screen.getByText('Fake comment')).toBeInTheDocument();
  });
});
