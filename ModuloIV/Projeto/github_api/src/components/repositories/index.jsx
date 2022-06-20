import React from 'react';
import RepositoryItem from '../repository-item';
import * as S from "./styled";



const  Repositories = () => {
  return (
  <S.WrapperTabs
    selectedTabClassName="is-selected"
    selectedTabPanelClassName="is-selected"
  >
      <S.WrapperTabList>
        <S.WrapperTab>Repositories</S.WrapperTab>
        <S.WrapperTab>Starred</S.WrapperTab>
      </S.WrapperTabList>
      <S.WrapperTabPanel>
        <RepositoryItem 
          name="Maratona-Explorer" 
          linkToRepo="https://github.com/olgajuanne/Maratona-Explorer" 
          fullName="olgajuanne/Maratona-Explorer"  />
      </S.WrapperTabPanel>
      <S.WrapperTabPanel>
      <RepositoryItem 
        name="javascript" 
        linkToRepo="https://github.com/olgajuanne/javascript" 
        fullName="olgajuanne/javascript"  />
      </S.WrapperTabPanel>
  </S.WrapperTabs>
  
  );
};

export default Repositories;