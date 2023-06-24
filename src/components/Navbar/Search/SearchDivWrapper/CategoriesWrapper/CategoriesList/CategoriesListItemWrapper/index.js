import styled, { keyframes } from "styled-components";
import { CategoriesListIconLeft } from './CategoriesListItemLeft/CategoriesListIconLeft';
import { primaryColor, secondaryColor } from "../../../../../themesCss";
const slideUp = keyframes `
0% { transform: translateY(0) }
50% { transform: translateY(20%) }
100% { transform: translateY(0) }
`;

export const CategoriesListItemWrapper = styled.div `
  background: ${({ active }) => active === 'true' ? primaryColor : secondaryColor};
  transition: all .2s ease-in-out;
  height: 40px;
  width:100%;
  display: flex;
  align-items: center;
  border: 1px solid ${primaryColor};
  padding: 2px;
  margin:1px;
  border-radius:5px;
  cursor: pointer;
  &:hover {
    box-shadow: 0 1px 8px ${primaryColor};
  }
  &:hover ${CategoriesListIconLeft}{
    animation: ${slideUp} 2s ease-in-out infinite;
  }
`;