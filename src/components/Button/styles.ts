import styled from 'styled-components';

import { ButtonProps } from '.';

export const Container = styled.button<ButtonProps>`
  align-items: center;
  background-color: ${props => props.bgColor};
  border: 0;
  border-radius: 4px;
  color: ${props => props.textColor};
  display: flex;
  font-weight: 600;
  font-size: 16px;
  height: 56px;
  padding: 0 24px;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;
