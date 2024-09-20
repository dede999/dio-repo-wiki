import React from "react";
import { RepoItemContainer } from "./style";

export default function ItemRepo({
  repoName,
  repoAuthor,
  index,
  removeAction,
}) {
  return (
    <RepoItemContainer>
      <h3>{repoName}</h3>
      <p>{repoAuthor}</p>
      <a onClick={() => removeAction(index)} className="remove" href="#">
        Remove
      </a>

      <hr />
    </RepoItemContainer>
  );
}
