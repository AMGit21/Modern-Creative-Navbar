import styled from "styled-components";
import { IoChevronUpSharp } from "react-icons/io5";

export const ChevronUpSharpIcon = styled(IoChevronUpSharp)
  `
  position: absolute;
  transition: all 0.2s ease-in-out;
  margin-left: -90px;
  margin-bottom: ${({ navbarscrollingstate, fixedicons }) =>
    fixedicons === 'true' ? 0 : navbarscrollingstate.navbarIconMarginBottom};
`;