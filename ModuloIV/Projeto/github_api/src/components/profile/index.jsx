import React from 'react';
import useGithub from '../../hooks/github-hooks';
import * as S from './styled'


const Profile = () => {

    const { githubState } = useGithub()

  return (
    <S.Wrapper>
      <div>
        <S.WrapperInfoUser>
          <S.WrapperImage
             src="https://avatars.githubusercontent.com/u/83237816?v=4" alt="Avatar of user" />
          
            <h1>{githubState.user.name}</h1>
            <S.WrapperUsername>
              <h3>Username:</h3>
              <a
              href= "https://github.com/olgajuanne"
              target="_blank"
              rel="noreferrer" >
             Olga
            </a>
            </S.WrapperUsername>
            
        </S.WrapperInfoUser>

        <S.WrapperStatusCount>
          <div>
              <h4>Followers</h4>
              <span>5</span>
          </div>
          <div>
              <h4>Starred</h4>
              <span>5</span>
          </div>
          <div>
              <h4>Followings</h4>
              <span>5</span>
          </div>
        </S.WrapperStatusCount>
      </div>
    </S.Wrapper>
  )
};

export default Profile;