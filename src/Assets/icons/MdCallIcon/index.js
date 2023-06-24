import styled from "styled-components";
import { MdCall } from "react-icons/md";

export const MdCallIcon = styled(MdCall)
  `
  position: absolute;
  transition: all 0.2s ease-in-out;
  margin-left: -90px;
  margin-bottom: ${({ navbarscrollingstate, fixedicons }) =>
    fixedicons === 'true' ? 0 : navbarscrollingstate.navbarIconMarginBottom};
`;