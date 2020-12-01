import React from 'react';

import Typografy from '../../components/Typography';

import * as S from './styles';

const Home: React.FC = () => {
  return (
    <S.Container>
      <Typografy tag="h1">ReactJS Boilerplate</Typografy>
    </S.Container>
  );
};

export default Home;
