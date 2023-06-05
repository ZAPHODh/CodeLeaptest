'use client';

import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
    ${() => css`
    display: flex;
    align-items: center;
    justify-content: center;
    `}
`;
export const ArrowButton = styled.button`
    ${() => css`
    border: none;
    background-color: rgba(101, 168, 166,0.8);
    padding: 5px;
    width: 40px;
    height: 40px;
    margin: 10px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #f8ecc2;
    &:hover{
       cursor: pointer;
       background-color: rgb(101, 168, 166);
    }
    `}
`;
