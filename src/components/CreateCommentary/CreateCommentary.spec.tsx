import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CreateCommentary from './CreateCommentary';

const mockedDispatch = jest.fn();
const mockedHandleSubmit = jest.fn();

jest.mock('react-redux', () => ({
  useDispatch() {
    return {
      dispatch: mockedDispatch,
    };
  },
}));

jest.mock('react-hook-form', () => ({
  useForm() {
    return {
      handleSubmit: mockedHandleSubmit,
      register: jest.fn(),
      formState: { errors: {} },
      reset: jest.fn(),
    };
  },
}));
describe('CreateCommentary component', () => {
  it('renders correctly', () => {
    render(
      <CreateCommentary
        postId={0}
        postIndex={0}
      />,
    );
    expect(screen.getByTestId('inputName')).toBeInTheDocument();
    expect(screen.getByTestId('inputEmail')).toBeInTheDocument();
    expect(screen.getByTestId('inputBody')).toBeInTheDocument();
    expect(screen.getByTestId('sendButton')).toBeInTheDocument();
  });

  it('should submit form when clicked', () => {
    render(
      <CreateCommentary
        postId={0}
        postIndex={0}
      />,
    );
    fireEvent.submit(screen.getByTestId('sendButton'));
    expect(mockedHandleSubmit).toHaveBeenCalled();
  });
});
