import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 90vw;
  /* max-height: 60vh; */
  background-color: #FFFFFF;
  border-radius: 5px;
  margin-bottom: 1rem;
`;

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0.8rem 1.1rem;
`;

const Title = styled.span`
  font-weight: 600;
  font-size: 1rem;
  text-align: left;
  margin-bottom: 0.5rem;
`;

const Body = styled.span`
  font-size: 0.9rem;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5; /* number of lines to show */
  -webkit-box-orient: vertical;
`;

const ShowCommentsButton = styled.button`
  color:#2075cf;
  background: transparent;
  border: none;
  font-size: 0.8rem;
  padding: 0.5rem;
  margin: 0.5rem;
`;

const CommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const IsLoadingText = styled.span`
  font-size: 1rem;
  margin: 1rem;
`;

export {
  Container,
  PostContainer,
  Title,
  Body,
  ShowCommentsButton,
  IsLoadingText,
  CommentsContainer,
};
