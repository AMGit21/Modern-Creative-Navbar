import styled from "styled-components";

export const NavbarDropdownLabel = styled.div`
background: ${({ navbarscrollingstate }) => navbarscrollingstate.bgPrimaryColor};
color: ${({ navbarscrollingstate }) => navbarscrollingstate.bgSecondaryColor};
display: flex;
align-items: center;
justify-content: center;
text-decoration: none;
width: ${({ navbarscrollingstate }) => navbarscrollingstate.navbarButtonWidth};
font-family:${({ navbarscrollingstate }) => navbarscrollingstate.fontFamily};
font-size:${({ navbarscrollingstate }) => navbarscrollingstate.fontSize};
padding: ${({ navbarscrollingstate }) => navbarscrollingstate.navbarButtonPadding};
height: ${({ navbarscrollingstate }) => navbarscrollingstate.navbarButtonHeight};
box-shadow: ${({ navbarscrollingstate }) => navbarscrollingstate.boxShadow};
cursor: pointer;
border-radius: ${({ navbarscrollingstate }) => navbarscrollingstate.borderRadius};
transition: all 0.2s ease-in-out;
margin: ${({ navbarscrollingstate }) => navbarscrollingstate.navbarButtonMargin};
  
&:hover {
  box-shadow: ${({ navbarscrollingstate }) => navbarscrollingstate.boxShadowOnHover};
}
`;