import styled from "styled-components";
import { primaryColor } from "../../../../../themesCss";
export const NavbarDropdownListWrapper = styled.div`
background: ${({ navbarscrollingstate }) => navbarscrollingstate.bgSecondaryColor};
min-width: 150px;
height: 200px;
padding: 5px 5px;
z-index: 1;
display: flex;
justify-content: center;
gap:${({ navbarscrollingstate }) => navbarscrollingstate.flexGap};
align-items: center;
flex-direction: column;
border-radius: ${({ navbarscrollingstate }) => navbarscrollingstate.borderRadiusNavbarDropdownContentInMegaDropdown};
transition: visibility 0.2s, opacity 0.2s linear;
background-clip: content-box;
box-shadow: 0 1px 8px ${primaryColor};
border-top: ${({ navbarscrollingstate }) => navbarscrollingstate.borderSolidPrimary};
border-bottom: ${({ navbarscrollingstate }) => navbarscrollingstate.borderSolidPrimary};


  &:after {
  display: block;
  content: "";
  width: 100px;
  height: 30px;
  position: absolute;
  transition: all 0.2s ease-in-out;
  top: ${({ navbarscrollingstate }) => navbarscrollingstate.NavbarDropdownListWrapperAfterTop};
  right: ${({ navbarscrollingstate }) => navbarscrollingstate.NavbarDropdownListWrapperAfterRight};
  border-radius: ${({ navbarscrollingstate }) => navbarscrollingstate.borderRadiusNavbarDropdownDivAfter};
  border-bottom: ${({ navbarscrollingstate }) => navbarscrollingstate.borderSolidPrimary};
  border-right: ${({ navbarscrollingstate }) => navbarscrollingstate.borderSolidPrimary};
}
  
  &:before {
  display: block;
  content: "";
  width: 100px;
  height: 30px;
  position: absolute;
  bottom: -16px;
  transition: all 0.2s ease-in-out;
  left: ${({ navbarscrollingstate }) => navbarscrollingstate.NavbarDropdownListWrapperBeforeLeft};
  border-radius: ${({ navbarscrollingstate }) => navbarscrollingstate.borderRadiusNavbarDropdownDivBefore};
  border-bottom: ${({ navbarscrollingstate }) => navbarscrollingstate.borderSolidPrimary};
  border-left: ${({ navbarscrollingstate }) => navbarscrollingstate.borderSolidPrimary};
}
`;
