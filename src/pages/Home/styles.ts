import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;

  h1 {
    color: ${({ theme: { colors } }) => colors.texts};
    font-size: 56px;
  }
`;
