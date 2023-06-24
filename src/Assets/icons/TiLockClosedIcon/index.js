import styled from "styled-components";
import { TiLockClosed } from "react-icons/ti";

export const TiLockClosedIcon = styled(TiLockClosed)
  `
  position: absolute;
  transition: all 0.2s ease-in-out;
  margin-left: -90px;
  
  margin-bottom: ${({ navbarscrollingstate, fixedicons }) =>
    fixedicons === 'true' ? 0 : navbarscrollingstate.navbarIconMarginBottom};
`;