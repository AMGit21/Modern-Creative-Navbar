import styled from "styled-components";
import { CategoryIcon } from './CategoriesWrapper/CategoryIcon';
import { CategoriesList } from './CategoriesWrapper/CategoriesList';
import { SearchIcon } from "./SearchIcon";

export const SearchDivWrapper = styled.div`
  z-index: 100;
  flex-basis: 65%;
  display: flex;
  padding: 0 10px;
  justify-content: center;
  align-items: center;
  height: 40px; 
  transition: all 0.2s ease-in-out;
  input:focus + ${CategoryIcon} {
    transform:translateX(148px) rotate(360deg);
    border-radius:10px;
    transition: all .5s ease-in-out;
    }
    
    input:focus ~ ${CategoriesList} {
      visibility: visible;
      opacity: 1;
      border-bottom: ${({ navbarscrollingstate }) => navbarscrollingstate.borderSolidPrimary};
    }
    input:focus + ${SearchIcon} {
      transition: all .3s ease-in-out;
      transform:rotate(0deg);
      margin-left: -30px;
      }
  `;