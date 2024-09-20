import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 50%;
  height: 100%;
  background-color: aliceblue;
  border-radius: 10px;

  margin-left: 10px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
  
  font-size: x-large;
  font-weight: 600;
  color: #22272e;
  border-color: hsl(240, 40%, 70%);
  border-width: 2px 2px 4px 2px;
  background-color: hsl(240, 60%, 80%);

  &:hover {
    cursor: pointer;
    border-width: 3px 3px 5px 3px;
    border-color: hsl(240, 50%, 60%);
  }
`
export const TinyButton = styled.button`
  background-color: #F56565; // red 400
  margin: 8px 0;
  padding: 8px;
  color: antiquewhite;
  border-radius: 15px;
  border-color: #FEB2B2; // red 200
  border-width: 3px;
  font-weight: 600;
`
