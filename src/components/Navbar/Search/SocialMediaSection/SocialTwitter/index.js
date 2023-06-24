import styled from "styled-components";
import { TiSocialTwitter } from 'react-icons/ti';
import { primaryColor, linkColor} from '../../../themesCss';

export const SocialTwitter = styled(TiSocialTwitter)
    `
  color: ${primaryColor};
  transition: all 0.2s ease-in-out;
  border-radius:5px;
  padding:1px;
  cursor:pointer;
  &:hover{
    color:${linkColor};
    transform: scale(1.2);
  }
  `;