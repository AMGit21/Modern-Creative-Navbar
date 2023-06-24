import styled from "styled-components";
import { primaryColor } from "../../../../themesCss";
export const CategoriesInput = styled.input`
  height: 10px;
  width:150px;
  background-color: ${({ navbarscrollingstate }) => navbarscrollingstate.bgSecondaryColor}; 
  outline: none;
  z-index:2;
  padding: 10px 0 10px 28px;
  border: none;
  border-radius: 5px;
  margin-left: 10px;
  transition: all 0.2s ease-in-out;
  border-bottom: 1px solid ${primaryColor};
  color: ${primaryColor};
  ::placeholder {
    color: ${primaryColor};
    font: 400 14px 'Cambria', 'sans-serif';
  }
  &:focus{
    border-radius: 0;
    border-left: 3px solid ${primaryColor};
    border-right: 3px solid ${primaryColor};
    border-bottom: 0 solid ${primaryColor};
    transition: all 0.3s ease-in-out;
    outline: 0;
    box-shadow: 0 1px 8px ${primaryColor};
  }
`;