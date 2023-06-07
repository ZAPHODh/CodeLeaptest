import styled, { css } from 'styled-components';
type Button = {
  rounded: boolean;
  width: number | string;
  fontSize: string;
  center: boolean;
  reverse: boolean;
  height: number | string;
  margin: string | number;
  bg: string;
  color: string;
};
export const Wrapper = styled.button<Button>`
    ${({
      rounded,
      width,
      fontSize,
      center,
      reverse,
      height,
      margin,
      bg,
      color,
    }) => css`
        width: ${width};
        margin: ${margin};
        display: flex;
        height: ${height};
        align-items: center;
        font-size: ${fontSize};

        justify-content: ${center ? 'center' : 'space-evenly'};
        border-radius: ${!rounded ? '10px' : '50%'};
        color: ${reverse ? '#ffffff' : color};
        transition: all 0.2s;
        background-color: ${reverse ? bg : 'transparent'};
        border: 1px solid ${bg};
        &:hover {
            cursor: pointer;
            filter: brightness(1.15);
        }
        &:disabled{
            cursor:no-drop ;
            border: 1px solid #b2b2b2;
            background-color: #b2b2b2;
            color:white;
        }
    `}
`;
