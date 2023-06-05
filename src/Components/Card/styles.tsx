'use client';

import styled, { css } from 'styled-components';

export const Wrapper = styled.button<{ selected: boolean }>`
    ${({ selected }) => css`
        border: none;
        width: 120px;
        height: 120px;
        background-color: ${selected ? '#65a8a6' : '#e65540'};
        border-radius: 15px;
        color: #f8ecc2;
        display: flex;
        align-items: center;
        margin: 15px;
        justify-content:space-evenly;
        flex-direction: column;
        &:hover{
            cursor: pointer;
            box-shadow: 5px 5px rgba(0,0,0,0.2);
        }
    `}
`;
