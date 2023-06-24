import { HiMenuAlt3 } from "react-icons/hi";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import {primaryColor, secondaryColor} from './themesCss';

export const HamburgerMenu = styled.div`
display:none;
  ${({ hamburgermenustate }) =>
    hamburgermenustate === "true" && `
transition: .2s all ease-in-out;
display: block;
width: 50% ;
margin: 10px;
position: fixed;
top: 0;
left: 0;
height: 100%;
width: 100%;
margin: auto;
background: ${primaryColor};
z-index: 100;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`}
`;

export const HamburgerMenuLink = styled(Link)
  `
color: ${({ navbarscrollingstate }) => navbarscrollingstate.bgSecondaryColor};
text-decoration: none;
font-size: 18px;
z-index:2;
letter-spacing: 0.01em;
border-radius: 5px;
padding: 10px 20px 10px 20px;
width: 120px;
background: ${secondaryColor};
color: ${primaryColor};
display: flex;
justify-content: center;
align-items: center;
transition: .3s all ease-in-out;

  &:hover {
  transition: .2s all ease-in-out;
  border-radius: 10px;
}

@media screen and (max-width: 1050px) {
  width: 50%;
  margin: 10px;
}
  
  ${({ active }) =>
    active === 'true' && `
    font-weight: bold;
    text-shadow: 1px 1px 2px gray;
  `}
`;


export const CloseToggle = styled(HiMenuAlt3)
  `
display:none;
position: fixed;
top: 7%;
right: 7%;
background: ${primaryColor};
color: ${secondaryColor};
padding: .50rem;
place-items: center;
font-size: 1.5rem;
cursor: pointer;
border: 8px double ${secondaryColor};
transition: .2s all ease-in-out;

${({ hamburgermenustate }) =>
    hamburgermenustate === "true" && `
display: flex;
border-radius: 20px;
`}
&:hover {
  border-radius: 360px;
  transform: rotate(45deg);
  transition: .2s all ease-in-out;
}
`;