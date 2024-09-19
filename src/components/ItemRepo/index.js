import React from 'react';
import { RepoItemContainer } from './style';

export default function ItemRepo() {
  return (
    <RepoItemContainer>
      <h3>Repository Item</h3>
      <p>This is a simple repository item component.</p>
      <a className='remove' href='http://google.com'> Remove </a>

      <hr />
    </RepoItemContainer>
  );
};
