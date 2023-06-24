import styled from "styled-components";
import { IoAdd } from 'react-icons/io5';
import { primaryColor, secondaryColor, linkColor } from "../../../../../../../themesCss";
export const CategoriesListIconRight = styled(IoAdd)
`
  position: absolute;
  color: ${({ active }) => active === 'true' ? secondaryColor : primaryColor};
  transition: all 0.2s ease-in-out;
  border-radius:5px;
  padding:1px;
  &:hover{
    color:${linkColor};
  }
  `;