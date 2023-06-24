import styled from "styled-components";
import { IoLayers } from 'react-icons/io5';
import { primaryColor, secondaryColor, linkColor } from "../../../../../../../themesCss";
export const CategoriesListIconLeft = styled(IoLayers)
`
  position: absolute;
  color: ${({ active }) => active === 'true' ? secondaryColor : primaryColor};
  transition: all 0.2s ease-in-out;
  border-radius: 5px;
  padding:2px;
  &:hover{
    color: ${linkColor};
  }
  `;