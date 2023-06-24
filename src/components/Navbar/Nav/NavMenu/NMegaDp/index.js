import styled from "styled-components";
import { NavbarMegaDropdownContent } from './NMegaDpContent';
import { NavbarDropdownContentMDropdown } from './NMegaDpContent/NListWrapper/NMegaDpLeftSection/NDpContentMDp';
export const NavbarMegaDropdown = styled.div`
position: relative;
display: inline-block;
  &:hover ${NavbarMegaDropdownContent} {    
    visibility: visible;
    opacity: 1;
    color: ${({ navbarscrollingstate }) => navbarscrollingstate.borderSolidPrimary};
  ${NavbarDropdownContentMDropdown}{
    visibility: visible;
    opacity: 1;
    background-clip: ${({ navbarscrollingstate }) => navbarscrollingstate.backgroundClip};
    transform: translateX(-10px);
    border-top: ${({ navbarscrollingstate }) => navbarscrollingstate.borderSolidPrimary};
    border-bottom: ${({ navbarscrollingstate }) => navbarscrollingstate.borderSolidPrimary};
  }
}
`;