'use client';

import styled, { css } from 'styled-components';

export const Wrapper = styled.button`
    ${() => css`
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(0,0,0,0.2);
        color: white;
        padding: 5px;
        font-size: 15px;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        &:hover{
            cursor: pointer;
            background-color: rgba(0,0,0,0.5);
            box-shadow: 5px 5px 5px rgba(0,0,0,0.2);
        }
    `}
`;
