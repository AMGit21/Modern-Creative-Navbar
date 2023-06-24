import styled from "styled-components";
import { secondaryColor} from '../themesCss';

export const Search = styled.div`
  background: ${secondaryColor};
  z-index: 100;
  position: fixed;
  width:${({ navbarscrollingstate }) => navbarscrollingstate.searchWidth}; 
  top:${({ navbarscrollingstate }) => navbarscrollingstate.searchTop}; 
  margin-left:${({ navbarscrollingstate }) => navbarscrollingstate.searchMarginLeft};
  margin-right:${({ navbarscrollingstate }) => navbarscrollingstate.searchMarginRight};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px; 
  padding:0 10px;
  transition: all 0.2s ease-in-out;
  box-shadow: ${({ navbarscrollingstate }) => navbarscrollingstate.searchBoxShadow}; 
  border-radius: ${({ navbarscrollingstate }) => navbarscrollingstate.searchBorderRadius}; 
`;