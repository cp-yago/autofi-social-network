import React from 'react';
import { Send } from 'react-feather';

import {
  Container,
  Input,
  TextArea,
  SendButton,
} from './CreateCommentaryStyles';

const CommentaryInput = () => (
  <Container>
    <Input placeholder="Title" />
    <TextArea placeholder="Write a commentary..." rows={5} />
    <SendButton>
      Send
      <Send />
    </SendButton>
  </Container>
);

export default CommentaryInput;
