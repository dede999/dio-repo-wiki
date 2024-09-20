import { NavbarContainer } from "./style";
import InputContainer from "../InputContainer";

export default function Navbar({ onChange }) {
  return (
    <NavbarContainer>
      <h1>
        REPO <br />
        WIKI
      </h1>
      <InputContainer onChange={onChange} />
    </NavbarContainer>
  );
}
