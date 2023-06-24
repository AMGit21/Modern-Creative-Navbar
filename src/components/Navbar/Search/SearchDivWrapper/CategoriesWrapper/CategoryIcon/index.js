import styled from "styled-components";
import { MdCategory } from "react-icons/md";
import { primaryColor, linkColor } from "../../../../themesCss";
export const CategoryIcon = styled(MdCategory)
`
width: 20px;
position: relative;
right: 178px;
color: ${primaryColor};
padding: 3px 3px;
z-index:2;
transition: all 1.2s ease-in-out;
&:hover{
  color:${linkColor};
}
`;