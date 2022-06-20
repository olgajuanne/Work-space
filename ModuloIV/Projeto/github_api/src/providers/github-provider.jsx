import React, { Children, createContext, useState } from 'react';

export const GithubContext = createContext( {
  user: {},
  repositories: [],
  starred: [],
});

const GithubProvider = ({children}) => {

  const [githubState, setGithubState] = useState({
    user:{
      login: undefined,
      name: undefined,
      publicUrl: undefined,
      blog: undefined,
      company: undefined,
      location: undefined,
      followers: 0,
      following: 0,
      public_gists: 0,
      public_repos: 0,
    },
    repositories: [],
    starred: [],
  });

  const contexValue = {
    githubState,
  };

  return (
    <GithubContext.Provider value={contexValue}>{children}</GithubContext.Provider>
  )
};

export default GithubProvider;