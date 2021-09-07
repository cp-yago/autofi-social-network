import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
`;

const CommentaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  padding: 0.8rem;

  border: 1px solid rgb(8, 1, 42);;
  border-radius: 5px;
`;

const AvatarContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 1rem;

  img {
    width: 2rem;
    height: 2rem;
    border-radius: 1rem;
    margin-right: 0.5rem;
  }
`;

const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.span`
  font-size: 0.8rem;
  font-weight: 600;
`;

const UserEmail = styled.span`
  font-size: 0.8rem;
`;

const Body = styled.span`
  text-align: left;
  font-size: 0.8rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5; /* number of lines to show */
  -webkit-box-orient: vertical;
`;

export {
  Container,
  AvatarContainer,
  UserInfoContainer,
  UserName,
  UserEmail,
  CommentaryContainer,
  Body,
};
