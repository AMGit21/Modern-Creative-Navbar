import styled from "styled-components";
import { TiInfoLarge } from "react-icons/ti";

export const TiInfoLargeIcon = styled(TiInfoLarge)
  `
  position: absolute;
  transition: all 0.2s ease-in-out;
  margin-left: -90px;
  margin-bottom: ${({ navbarscrollingstate, fixedicons }) =>
    fixedicons === 'true' ? 0 : navbarscrollingstate.navbarIconMarginBottom};
`;