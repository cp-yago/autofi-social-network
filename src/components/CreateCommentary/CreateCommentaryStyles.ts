import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-bottom: 1rem;

  border: 1px solid #1e2d4e;
  border-radius: 5px;
`;

const Input = styled.input`
  width: 100%;
  height: 2.5rem;
  padding: 0 1.5rem;
  border: none;
  border-radius: 5px;
  margin-bottom: 1rem;
  font-size: 0.9rem;
`;

const TextArea = styled.textarea`
  width: 100%;
  border: none;
  padding: 0 1.5rem;
  font-size: 0.9rem;
`;

const ErrorMessage = styled.span`
  font-size: 0.9rem;
  color: red;
  padding-left: 1.5rem;
  margin: 0;
`;

const SendButton = styled.button`
  height: 2.5rem;
  align-items: center;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: transparent;
  border: none;
  font-size: 0.9rem;
  padding-right: 1rem;

  svg {
    border: none;
    color: #1e2d4e;
    width: 1rem;
    margin-left: 0.5rem;
  }
`;

export {
  Form,
  Input,
  TextArea,
  ErrorMessage,
  SendButton,
};
