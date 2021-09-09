import React from 'react';
import { screen, render } from '@testing-library/react';
import Home from './Home';

const mockedDispatch = jest.fn();
const posts = [
  {
    id: 1, index: 0, title: 'Fake title', body: 'Fake body',
  },
  {
    id: 2, index: 1, title: 'Fake title', body: 'Fake body',
  },
  {
    id: 3, index: 2, title: 'Fake title', body: 'Fake body',
  },
];

jest.mock('react-redux', () => ({
  useDispatch: () => mockedDispatch,
  useSelector() {
    return posts;
  },
}));

describe('Home component', () => {
  it('renders correctly', () => {
    render(<Home />);
    expect(screen.getByTestId('header-container')).toBeInTheDocument();
    expect(screen.getByTestId('postsContainer')).toBeInTheDocument();
  });

  it('shows post list correctly', async () => {
    render(<Home />);
    const postList = await screen.findByTestId('postsContainer');
    expect(postList.children.length).toBe(3);
  });
});
