import styled, { keyframes } from "styled-components";
import { primaryColor } from "../../themesCss";
const slide = keyframes`
  0% { transform: translateX(0) }
  50% { transform: translateX(50%) }
  100% { transform: translateX(0) }
`;

export const MovingButton = styled.button`
display: none;
@media screen and (min-width: 990px) {
  display:block;
  padding: 5px;
  background: transparent;
  color: ${primaryColor};
  flex-basis: 15%;
  border: none;
  border-left: 2px solid ${primaryColor};
  border-right: 2px solid ${primaryColor};
  border-radius: 5px;
  outline:none;
  animation: ${slide} 4s ease-in-out infinite;
}
`;