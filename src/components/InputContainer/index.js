import { useState } from "react";
import Button from "../Button";
import { InputContainerStyled } from "./style";
import createFakeRepos from "../../services/api";

export default function InputContainer({ onChange }) {
  const [numRepos, setNumRepos] = useState(0);
  const btnClick = () => {
    const repos = createFakeRepos(numRepos);
    onChange(repos);
  };

  return (
    <InputContainerStyled>
      <input
        type="number"
        value={numRepos}
        onChange={(e) => setNumRepos(e.target.value)}
      />
      <Button onClick={btnClick} />
    </InputContainerStyled>
  );
}
