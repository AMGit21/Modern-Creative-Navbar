import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { primaryColor, secondaryColor } from "../../../../../../../themesCss";
export const CategoriesListItem = styled(Link)
  `
  background: transparent;
  color: ${({ active }) => active === 'true' ? secondaryColor : primaryColor};
  transition: all .2s ease-in-out;
  height: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content:center;
  text-decoration: none;
  cursor: pointer;

${({ active }) => active === 'true' && `
font-weight: bold;
`}
`;