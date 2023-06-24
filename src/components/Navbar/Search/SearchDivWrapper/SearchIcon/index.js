import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { primaryColor, linkColor } from "../../../themesCss";

export const SearchIcon = styled(BsSearch)
`
  width: 20px;
  margin-left: -25px;
  color:${primaryColor};
  transition: all .2s ease-in-out;
  transform:rotate(90deg);
  &:hover{
    color:${linkColor};
    transform:rotate(0deg);
  }
  `;