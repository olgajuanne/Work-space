import React from 'react';
import GithubProvider from './providers/github-provider';
import App from './App';
import { ResetCSS } from './global/resetCSS';



const Providers = () => {
  return (
    <main>
      <GithubProvider>
      <ResetCSS />
      <App />
    </GithubProvider>
    </main>
      
  );
}

export default Providers;