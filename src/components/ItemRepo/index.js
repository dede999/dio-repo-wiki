import React from 'react';
import { RepoItemContainer } from './style';

export default function ItemRepo({ repoName, repoAuthor }) {
  return (
    <RepoItemContainer>
      <h3>{repoName}</h3>
      <p>{repoAuthor}</p>
      <a className='remove' href='http://google.com'> Remove </a>

      <hr />
    </RepoItemContainer>
  );
};
