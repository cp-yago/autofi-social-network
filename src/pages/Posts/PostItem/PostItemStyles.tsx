import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 90vw;
  max-height: 60vh;
  background-color: #FFFFFF;
  border-radius: 5px;
  margin-bottom: 1rem;
`;

const AvatarContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 4rem;
    height: 4rem;
    border-radius: 2.5rem;
    margin: 0.5rem;
  }

  span {
    font-weight: 600;
  }
`;

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0.8rem;
`;

const CommentTitle = styled.span`
  font-weight: 600;
  font-size: 1.1rem;
  text-align: center;
  margin-bottom: 1rem;
`;

const CommentBody = styled.span`
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5; /* number of lines to show */
  -webkit-box-orient: vertical;
`;

export {
  Container, AvatarContainer, CommentContainer, CommentTitle, CommentBody,
};
