import styled from "styled-components";

export const NavbarListWrapper = styled.div `
min-width: 540px;
padding: 5px;
z-index: 1;
display: flex;
justify-content: space-around;
align-items: center;
border-radius: 10px;
height: 230px;
box-shadow: ${({ navbarscrollingstate }) => navbarscrollingstate.boxShadow};
background-image: ${({ navbarscrollingstate }) => navbarscrollingstate.megaMenuBackground};
`;