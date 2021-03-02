import React, { ReactNode } from 'react';

import * as S from './styles';

interface ButtonProps {
  bgColor?: string;
  textColor?: string;
  children: ReactNode;
}

export function Button({
  bgColor = '#fff',
  textColor = '#000',
  children,
  ...props
}: ButtonProps): JSX.Element {
  return (
    <S.Container bgColor={bgColor} textColor={textColor} {...props}>
      {children}
    </S.Container>
  );
}
