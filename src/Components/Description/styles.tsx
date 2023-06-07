import styled, { css } from 'styled-components';

export const Wrapper = styled.p<{
  fontSize: string;
  color: string;
  maxWidth: string;
  padding: string | undefined;
}>`
    ${({ fontSize, color, maxWidth, padding }) => css`
        text-align: left;
        font-size: ${fontSize};
        width: ${maxWidth};
        max-width:${maxWidth};
        color: ${color};
        margin: 0;
        padding: ${padding ? padding : 0};
    `}
`;
