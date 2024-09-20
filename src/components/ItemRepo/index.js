import React from "react";
import { RepoItemContainer } from "./style";
import { TinyButton } from "../Button/style";

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
      <TinyButton onClick={() => removeAction(index)}>
        Remove
      </TinyButton>

      <hr />
    </RepoItemContainer>
  );
}
