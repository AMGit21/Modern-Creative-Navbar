import styled from "styled-components";

export const NavbarMegaDropdownLabel = styled.div`
color: ${({ navbarscrollingstate }) => navbarscrollingstate.bgSecondaryColor};
background: ${({ navbarscrollingstate }) => navbarscrollingstate.bgPrimaryColor};
display: flex;
align-items: center;
justify-content: center;
text-decoration: none;
width: ${({ navbarscrollingstate }) => navbarscrollingstate.navbarButtonWidth};
font-family:${({ navbarscrollingstate }) => navbarscrollingstate.fontFamily};
font-size: ${({ navbarscrollingstate }) => navbarscrollingstate.fontSize};
padding: ${({ navbarscrollingstate }) => navbarscrollingstate.navbarButtonPadding};
height: ${({ navbarscrollingstate }) => navbarscrollingstate.navbarButtonHeight};
box-shadow: ${({ navbarscrollingstate }) => navbarscrollingstate.boxShadow};
cursor: pointer;
border-radius: ${({ navbarscrollingstate }) => navbarscrollingstate.borderRadius};
transition: all 0.2s ease-in-out;
margin: ${({ navbarscrollingstate, active }) =>
        (active === 'true') ? '32px 3px' : navbarscrollingstate.navbarButtonMargin};

  &:hover {
    box-shadow: ${({ navbarscrollingstate }) => navbarscrollingstate.boxShadowOnHover};
}

  ${({ active, navbarscrollingstate }) =>
        active === 'true' && `
    background: ${navbarscrollingstate.bgSecondaryColor};
    color: ${navbarscrollingstate.bgPrimaryColor};
    font-weight: ${navbarscrollingstate.fontWeightBold};
  `}
`;