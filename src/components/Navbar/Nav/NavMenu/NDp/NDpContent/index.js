import styled from "styled-components";

export const NavbarDropdownContent = styled.div `
position: absolute;
padding-top: ${({ navbarscrollingstate }) => navbarscrollingstate.paddingTopNavbarDropdownContent};
z-index: 1;
margin-left: -25%;
visibility: hidden;
opacity: 0;
transition: visibility 0s, opacity 0.3s linear;
`;