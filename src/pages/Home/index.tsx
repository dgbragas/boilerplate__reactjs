import React from 'react';

import { Typografy } from '../../components';

import * as S from './styles';

export function Home(): JSX.Element {
  return (
    <S.Container>
      <Typografy tag="h1">ReactJS Boilerplate</Typografy>
    </S.Container>
  );
}
