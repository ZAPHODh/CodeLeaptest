'use client';

import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{ visible: boolean }>`
    ${({ visible }) => css`
        width:100vw;
        height: 100vh;
        position: fixed;
        z-index: 11;
        display: ${visible ? 'flex' : 'none'};
        align-items: center;
        justify-content: center;
        background-color:rgba(119, 119, 119, 0.8) ;
    `}
`;

export const Modal = styled.div`
    ${() => css`
    position: relative ;
    width: 660px;
    max-width: 660px;
    height: 146px;
    background-color: #FFFFFF;
    border: 1px solid #999999;
    border-radius: 16px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    @media (max-width:726px) {
        width: 80%;
    }
    `}
`;
export const Buttons = styled.div`
    ${() => css`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-end;
    position: absolute;
    bottom: 0;
    right: 1.2rem;
    `}
`;
