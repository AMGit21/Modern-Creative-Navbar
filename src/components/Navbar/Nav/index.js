import styled from "styled-components";

export const Nav = styled.nav`
  background: ${({ navbarscrollingstate }) => navbarscrollingstate.navbarBgColor}; 
  height: ${({ navbarscrollingstate }) => navbarscrollingstate.navbarHeight};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
  position: fixed;
  width:100%;
  top:${({ navbarscrollingstate }) => navbarscrollingstate.navbarTop};
  transition: all 0.2s ease-in-out;
  box-shadow: ${({ navbarscrollingstate }) => navbarscrollingstate.navbarBoxShadow};
  `;