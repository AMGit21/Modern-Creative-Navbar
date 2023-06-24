import styled from "styled-components";
import { TiLockOpen } from "react-icons/ti";

export const TiLockOpenIcon = styled(TiLockOpen)
  `
  position: absolute;
  transition: all 0.2s ease-in-out;
  margin-left: -90px;
  margin-bottom: ${({ navbarscrollingstate, fixedIcons }) =>
    fixedIcons === 'true' ? 0 : navbarscrollingstate.navbarIconMarginBottom};
`;