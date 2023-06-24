import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const NavLink = styled(Link)
  `
  background: ${({ active, navbarscrollingstate }) =>
    active === 'true' ?
      navbarscrollingstate.bgSecondaryColor :
      navbarscrollingstate.bgPrimaryColor
  };
  color: ${({ active, navbarscrollingstate }) =>
    active === 'true' ?
      navbarscrollingstate.color :
      navbarscrollingstate.bgSecondaryColor
  };
  transition: all .2s ease-in-out;
  font-family: ${({ navbarscrollingstate }) => navbarscrollingstate.fontFamily};
  font-size: ${({ navbarscrollingstate }) => navbarscrollingstate.fontSize};
  height: ${({ navbarscrollingstate }) => navbarscrollingstate.navbarButtonHeight};
  border-radius: ${({ navbarscrollingstate }) => navbarscrollingstate.borderRadius};
  margin: ${({ navbarscrollingstate }) => navbarscrollingstate.navbarButtonMargin};
  box-shadow: ${({ navbarscrollingstate }) => navbarscrollingstate.boxShadow};
  display: flex;
  align-items: center;
  justify-content:center;
  text-decoration: none;
  width: ${({ navbarscrollingstate }) => navbarscrollingstate.navbarButtonWidth};
  padding: ${({ navbarscrollingstate }) => navbarscrollingstate.navbarButtonPadding};
  cursor: pointer;

  &:hover {
  box-shadow: ${({ navbarscrollingstate }) => navbarscrollingstate.boxShadowOnHover};
  border-top: ${({ navbarscrollingstate }) => navbarscrollingstate.borderDoubleSecondary};
  border-bottom: ${({ navbarscrollingstate }) => navbarscrollingstate.borderDoubleSecondary};
}

${({ active, navbarscrollingstate }) =>
    active === 'true' && `
font-weight: bold;
border-top: ${navbarscrollingstate.borderDoublePrimary};
border-bottom: ${navbarscrollingstate.borderDoublePrimary}; 
&:hover {
    border-top: ${navbarscrollingstate.borderDoublePrimary};
    border-bottom: ${navbarscrollingstate.borderDoublePrimary};
    box-shadow: ${navbarscrollingstate.boxShadowOnHover};
}
`}
`;

