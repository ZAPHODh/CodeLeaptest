'use client';

import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
    ${() => css`
    overflow: hidden;
    position: relative;
    color: #f8ecc2;
    width: 380px;
    border-radius: 10px;
    background-color: #79896d;
    height: 500px;
    box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.2);
    display: flex;
    align-items: center;
    /* justify-content: center; */
    flex-direction: column;
    @media (max-width: 768px) {
        width: 80%;
    }
    `}
`;
export const Button = styled.button`
    ${() => css`
    font-size: 20px;
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: #65a8a6;
    color:#f8ecc2 ;
    border: none;
    padding: 15px;
    &:hover{
        cursor: pointer;
        background-color: #498381;
    }
    &:disabled{
        cursor:not-allowed;
        background-color:#f8ecc2;
        color: rgba(230, 85, 64,0.5);
    }
    `}
`;
