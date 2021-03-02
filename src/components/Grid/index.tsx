import React, { ReactNode } from 'react';

import * as S from './styles';

interface GridProps {
  children: ReactNode;
}

export function Grid({ children }: GridProps): JSX.Element {
  return <S.Container>{children}</S.Container>;
}
