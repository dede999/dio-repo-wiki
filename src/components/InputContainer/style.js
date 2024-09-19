import styled from "styled-components"

export const InputContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
  height: 65px;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

  input {
    background-color: hsl(240, 40%, 63%);
    color: white;
    font-size: 25px;
    font-weight: bold;
    width: 100%;
    height: 100%;
    padding: 0 10px;
    border-width: 3px 3px 5px 3px;
    border-color: white;
    border-radius: 10px;

    &:focus {
      outline: none;
    }
  }
`
