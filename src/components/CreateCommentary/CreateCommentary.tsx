/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Send } from 'react-feather';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { createComment } from '../../store/modules/feed/actions';

import {
  Form,
  Input,
  TextArea,
  SendButton,
  ErrorMessage,
} from './CreateCommentaryStyles';

interface IFormData {
  name: string;
  email: string;
  body: string;
}

interface ICreateCommentaryProps {
  postId: number;
  postIndex: number;
}

const CreateCommentary = ({ postId, postIndex }: ICreateCommentaryProps) => {
  const dispatch = useDispatch();

  const {
    handleSubmit, register, formState: { errors }, reset,
  } = useForm();

  const onSubmit = (data: IFormData) => {
    const comment = {
      ...data,
      postId,
    };
    dispatch(createComment(comment, postIndex));
    reset({});
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {errors.name && (<ErrorMessage>{errors.name.message}</ErrorMessage>)}
      <Input
        {...register('name', { required: 'This is a required field' })}
        placeholder="Name"
        data-testid="inputName"
      />

      {errors.email && (<ErrorMessage>{errors.email.message}</ErrorMessage>)}
      <Input
        {...register('email', { required: 'This is a required field' })}
        placeholder="Email"
        data-testid="inputEmail"
      />

      {errors.body && (<ErrorMessage>{errors.body.message}</ErrorMessage>)}
      <TextArea
        {...register('body', { required: 'This is a required field' })}
        placeholder="Write a commentary..."
        rows={5}
        data-testid="inputBody"
      />

      <SendButton data-testid="sendButton">
        Send
        <Send />
      </SendButton>
    </Form>
  );
};

export default CreateCommentary;
