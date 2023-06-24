import styled from "styled-components";
import { NavbarDropdownContent } from './NDpContent';

export const NavbarDropdown = styled.div `
position: relative;
display: inline-block;
  &:hover  ${NavbarDropdownContent} {
  visibility: visible;
  opacity: 1;
}
`;