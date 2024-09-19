import styled from "styled-components";

export const RepoItemContainer = styled.div`
  width: 80%;
  margin: 2rem auto;

  h3 {
    font-size: 32px;
    color: hsl(240, 75%, 90%);
    font-weight: 650;
  }

  p {
    font-size: 16px;
    color: hsl(240, 75%, 90%);
  }

  a.remove {
    text-decoration: none;
    margin-top: 2em;
    color: hsl(0, 75%, 80%)
  }

  a.remove:hover {
    color: hsl(0, 75%, 70%);
    font-weight: 700;
    text-decoration: underline;
  }

  hr {
    border: 2px solid hsl(240, 75%, 90%);
    margin: 20px 0;
    border-radius: 10px;
  }
`
