import styled from "styled-components";
import { primaryColor } from "../../../../../../../themesCss";
export const NavbarDropdownContentMDropdown = styled.div`
position: absolute;
background: ${({ navbarscrollingstate }) => navbarscrollingstate.backgroundNavbarDropdownContentInMegaDropdown};
min-width: 150px;
height: 200px;
padding: 5px 5px;
z-index: 1;
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: column;
border-radius: ${({ navbarscrollingstate }) => navbarscrollingstate.borderRadiusNavbarDropdownContentInMegaDropdown};
visibility: hidden;
opacity: 0;
transition: visibility 0s, opacity 0.2s linear;
transition: all 0.2s ease-in-out;
transform: perspective(1500px) rotateY(0deg);
transition: transform .7s ease 0s; 
box-shadow: 0;

&:hover {
  transition: all 0.2s ease-in-out;
  transform: perspective(3000px) rotateY(20deg) !important; 
  box-shadow: -3px 1px 8px ${primaryColor};
 
  &:before{
    transition: all 0.2s ease-in-out;
    box-shadow: -3px 1px 8px ${primaryColor};
  }
  &:after{
    transition: all 0.2s ease-in-out;
    box-shadow: -3px 1px 8px ${primaryColor};
  }
}
  &:after {
  display: ${({ navbarscrollingstate }) => navbarscrollingstate.displayDiv};
  content: "";
  width: 20px;
  height: 20px;
  position: absolute;
  top: 195px;
  right: -5px;
  border-radius: 360px;
  border-bottom: ${({ navbarscrollingstate }) => navbarscrollingstate.borderSolidPrimary};
  border-right: ${({ navbarscrollingstate }) => navbarscrollingstate.borderSolidPrimary}; 
}
  
  &:before {
  display: ${({ navbarscrollingstate }) => navbarscrollingstate.displayDiv};
  content: "";
  width: 20px;
  height: 20px;
  position: absolute;
  bottom: -8px;
  left: -5px;
  border-radius: 360px;
  border-bottom: ${({ navbarscrollingstate }) => navbarscrollingstate.borderSolidPrimary};
  border-left: ${({ navbarscrollingstate }) => navbarscrollingstate.borderSolidPrimary};
}
`;