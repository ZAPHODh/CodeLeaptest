import styled, { css } from 'styled-components';

export const Title = styled.h1<{
  isButton: boolean;
  color?: string;
  fontSize?: number | string;
  margin?: string;
}>`
   ${({ isButton, color, fontSize, margin }) => css`
   margin: ${margin};
   color: ${color};
   font-size: ${fontSize};
   &:hover {
        cursor: ${isButton ? 'pointer' : 'default'};
    }
   `}
`;
