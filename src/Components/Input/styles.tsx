'use client';

import styled, { css } from 'styled-components';

export const Wrapper = styled.input<{
  width?: number | string;
  height?: number | string;
}>`
    ${({ width, height }) => css`
    margin: 5px 0px;
    border-radius: 8px;
    outline: none;
    border: 1px solid #777777;
    width: ${width};
    height: ${height};
    padding: 8px 0;
    padding-left: 10px;
    &:focus{
        border: 1px solid #596dde;
        outline: none;
    }
    `}
`;
