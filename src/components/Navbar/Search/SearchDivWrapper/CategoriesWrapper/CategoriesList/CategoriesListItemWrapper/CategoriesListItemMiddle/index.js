import styled from "styled-components";
import { primaryColor, secondaryColor } from "../../../../../../themesCss";
export const CategoriesListItemMiddle = styled.div `
width:60%;
text-align:center;
display: flex;
align-items: center;
justify-content:center;
border-radius:5px;
border-left: 1px solid ${({ active }) => active === 'true' ? secondaryColor : primaryColor};
border-right: 1px solid ${({ active }) => active === 'true' ? secondaryColor : primaryColor};
`;