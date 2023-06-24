import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { linkColor } from "../../../../../../../../themesCss";
export const DropdownNavLink = styled(Link)
  `
  background: ${({ active, navbarscrollingstate }) =>
    active === 'true' ?
      navbarscrollingstate.secondaryColorBeforeTransparentAfter :
      navbarscrollingstate.primaryColorBeforeTransparentAfter
  };
  color: ${({ active, navbarscrollingstate }) =>
    active === 'true' ?
      navbarscrollingstate.color :
      navbarscrollingstate.colorDropdownNavLink
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
  padding: ${({ navbarscrollingstate }) => navbarscrollingstate.paddingDropdownNavLink};
  cursor: pointer;

  &:hover {
  box-shadow: ${({ navbarscrollingstate }) => navbarscrollingstate.boxShadowOnHover};
  border-left: ${({ navbarscrollingstate }) => navbarscrollingstate.borderDropdownNavLink};
  border-right: ${({ navbarscrollingstate }) => navbarscrollingstate.borderDropdownNavLink};
  transition: all .2s ease-in-out;
}

${({ active, navbarscrollingstate }) =>
    active === 'true' && `
    font-weight: bold;
    border-left: ${navbarscrollingstate.borderSolidDropdownNavLink};
    border-right: ${navbarscrollingstate.borderSolidDropdownNavLink}; 
    &:hover {
        transition: all .2s ease-in-out;
        color: ${linkColor};
        border-left: ${navbarscrollingstate.borderHoverDropdownNavLink};
        border-right: ${navbarscrollingstate.borderHoverDropdownNavLink};
    }
  `}
`;

