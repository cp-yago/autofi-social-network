import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import Post from './Post';

const mockedDispatch = jest.fn();
const comments = [
  {
    id: 1, name: 'Yago', email: 'yago@test.com', body: 'fake body',
  },
  {
    id: 2, name: 'Yago', email: 'yago@test.com', body: 'fake body',
  },
  {
    id: 3, name: 'Yago', email: 'yago@test.com', body: 'fake body',
  },
];

jest.mock('react-redux', () => ({
  useDispatch: () => mockedDispatch,
  useSelector() {
    return comments;
  },
}));
describe('Post component', () => {
  it('renders correctly', () => {
    render(
      <Post
        id={1}
        index={0}
        title="Fake post title"
        body="Fake post body"
      />,
    );
    expect(screen.getByText('Fake post title')).toBeInTheDocument();
    expect(screen.getByText('Fake post body')).toBeInTheDocument();
    expect(screen.getByTestId('showCommentsButton')).toBeInTheDocument();
  });

  it('show comments when clicked', async () => {
    render(
      <Post
        id={1}
        index={0}
        title="Fake post title"
        body="Fake post body"
      />,
    );
    const showCommentsButton = screen.getByTestId('showCommentsButton');
    fireEvent.click(showCommentsButton);

    const commentList = await screen.findByTestId('commentsContainer');
    expect(commentList).toBeInTheDocument();
    expect(commentList.children.length).toBe(3);
  });
});
