import React, { children } from 'react';
import Header from '../header';

import * as S from './styled';
import useGithub from '../../hooks/github-hooks';

const Layout = ({children}) => {
  const { githubState } = useGithub();
    
  return (
    <S.WrapperLayout>
      <Header />
      {githubState.loading ? <p>Loading</p> : <>{children}</> }
    </S.WrapperLayout>
  )
}

export default Layout;
