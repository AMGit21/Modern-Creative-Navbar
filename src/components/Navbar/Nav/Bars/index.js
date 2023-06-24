import styled from "styled-components";
import { HiMenuAlt3 } from "react-icons/hi";

export const Bars = styled(HiMenuAlt3)
`
display: none;

@media screen and (max-width: 1050px) {
  display: flex;
  align-items: center;
  justify-content:center;
  position: absolute;
  top: -5px;
  right: 5%;
  color: ${({ navbarscrollingstate }) => navbarscrollingstate.primaryColorBeforeSecondaryAfter};
  transform: translate(-100%, 75%);
  font-size: 1.8rem;
  cursor: pointer;
}
`;