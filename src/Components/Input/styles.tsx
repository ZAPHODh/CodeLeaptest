import styled, { css } from 'styled-components';

export const TextArea = styled.textarea<{
  width?: number | string;
  height?: number | string;
  margin?: number | string;
}>`
${({ width, height, margin }) => css`
    margin: ${margin};
    border-radius: 8px;
    outline: none;
    border: 1px solid #777777;
    width: ${width};
    height: ${height};
    padding: 8px 0;
    padding-left: 10px;
    resize: none;
    &:focus{
        border: 1px solid #596dde;
        outline: none;
    }
    `}
`;
export const Wrapper = styled.input<{
  width?: number | string;
  height?: number | string;
  margin?: number | string;
}>`
    ${({ width, height, margin }) => css`
    margin: ${margin};
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
