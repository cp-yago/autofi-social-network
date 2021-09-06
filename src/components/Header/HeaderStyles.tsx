import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  width: 100vw;
  height: 4rem;
  background: #FFFFFF;
  border-bottom: 4rem;
  position: fixed;
  z-index: 1;

  svg {
    position: absolute;
    left: 3rem;
  }

  img {
    width: 10rem;
    margin-right: 0.8rem;
  }
`;

export default Container;
