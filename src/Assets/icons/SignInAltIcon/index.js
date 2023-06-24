import styled from "styled-components";
import { FaSignInAlt } from "react-icons/fa";

export const SignInAltIcon = styled(FaSignInAlt)
  `
  position: absolute;
  transition: all 0.2s ease-in-out;
  margin-left: -90px;
  margin-bottom: ${({ navbarscrollingstate, fixedicons }) =>
    fixedicons === 'true' ? 0 : navbarscrollingstate.navbarIconMarginBottom};
`;