import React from 'react';

import * as S from './styles';

export interface ButtonProps {
  bgColor?: string;
  textColor?: string;
}

const Button: React.FC<ButtonProps> = ({
  bgColor = '#fff',
  textColor = '#000',
  children,
  ...props
}) => (
  <S.Container bgColor={bgColor} textColor={textColor} {...props}>
    {children}
  </S.Container>
);

export default Button;
