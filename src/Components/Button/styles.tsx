import styled, { css } from 'styled-components';
type Button = {
  rounded: boolean;
  width: number | string;
  borderColor: string;
  fontSize: string;
  center: boolean;
  reverse: boolean;
};
export const Wrapper = styled.button<Button>`
    ${({ rounded, width, borderColor, fontSize, center, reverse }) => css`
        margin: 5px;
        width: ${width};
        padding: 10px;
        display: flex;
        align-items: center;
        font-size: ${fontSize};
        justify-content: ${center ? 'center' : 'space-between'};
        border-radius: ${!rounded ? '10px' : '50%'};
        color: ${reverse ? '#f8ecc2' : '#e65540'};
        transition: all 0.2s;
        background-color: ${
          reverse ? 'rgba(230, 85, 64, 0.8);' : 'transparent'
        };
        border: 1px solid #e65540;
        &:hover {
            cursor: pointer;
            border: 1px solid ${borderColor};
            background-color: #e65540;
            color: #f8ecc2;
        }
        &:disabled{
            cursor:no-drop ;
            &:hover{
                background-color: transparent;
            }
        }
    `}
`;
