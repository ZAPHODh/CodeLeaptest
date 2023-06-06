import styled, { css } from 'styled-components';
type Button = {
  rounded: boolean;
  width: number | string;
  fontSize: string;
  center: boolean;
  reverse: boolean;
  height: number | string;
  margin: string | number;
};
export const Wrapper = styled.button<Button>`
    ${({ rounded, width, fontSize, center, reverse, height, margin }) => css`
        width: ${width};
        margin: ${margin};
        display: flex;
        height: ${height};
        align-items: center;
        font-size: ${fontSize};

        justify-content: ${center ? 'center' : 'space-evenly'};
        border-radius: ${!rounded ? '10px' : '50%'};
        color: ${reverse ? '#ffffff' : '#7695EC'};
        transition: all 0.2s;
        background-color: ${reverse ? '#7695EC;' : 'transparent'};
        border: 1px solid #7695EC;
        &:hover {
            cursor: pointer;
            background-color: #3f58e5;
            color: #ffffff;
        }
        &:disabled{
            cursor:no-drop ;
            border: 1px solid #b2b2b2;
            background-color: #b2b2b2;
            color:white;
        }
    `}
`;
