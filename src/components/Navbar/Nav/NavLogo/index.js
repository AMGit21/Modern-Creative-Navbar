import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const NavLogo = styled(Link)
`
background: ${({ navbarscrollingstate }) => navbarscrollingstate.bgPrimaryColor};
@media screen and (max-width: 1050px) {
  position: absolute;
  left: 10%;
}
display: flex;
align-items: center;
justify-content:center;
text-decoration: none;
transition: all .2s ease-in-out;
font-family:${({ navbarscrollingstate }) => navbarscrollingstate.fontFamily};
font-size:${({ navbarscrollingstate }) => navbarscrollingstate.LogoFontSize};
width: ${({ navbarscrollingstate }) => navbarscrollingstate.navbarButtonWidth};
padding: ${({ navbarscrollingstate }) => navbarscrollingstate.navbarButtonPadding};
height: ${({ navbarscrollingstate }) => navbarscrollingstate.navbarButtonHeight};
box-shadow: ${({ navbarscrollingstate }) => navbarscrollingstate.boxShadow};
cursor: pointer;
border-radius: ${({ navbarscrollingstate }) => navbarscrollingstate.borderRadius};
color: ${({ navbarscrollingstate }) => navbarscrollingstate.bgSecondaryColor};

&:hover {
  box-shadow: ${({ navbarscrollingstate }) => navbarscrollingstate.boxShadowOnHover};
  border-top: ${({ navbarscrollingstate }) => navbarscrollingstate.borderDoubleSecondary};
  border-bottom: ${({ navbarscrollingstate }) => navbarscrollingstate.borderDoubleSecondary};
}
`;