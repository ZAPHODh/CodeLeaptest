'use client';

import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
    ${() => css`
    position: relative;
    display: flex;
    align-items:center;
    justify-content: flex-start;
    width: 95%;
    overflow: hidden;
    background-color: white;
    border:1px solid #999999;
    border-radius: 16px;
    flex-direction: column;
    min-height: 316px;
    margin: 15px 0px;
    @media (max-width:726px) {
     width: 85% ;
    }
    `}
`;
export const TitleContainer = styled.div`
    ${() => css`
    width: 100%;
    background-color: #7695ec;
    color: white;
    font-size: 22px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    `}
`;
export const Buttons = styled.div`
    ${() => css`
    width: 60px;
    display: flex;
    justify-content: space-between;
    margin: 0px 30px;
    `}
`;
export const InfoContainer = styled.div`
    ${() => css`
    width: 93%;
    height: 20px;
    color:#777777;
    display: flex;
    align-items: center;
    font-size: 18px;
    justify-content: space-between;
    margin: 20px 0px;
    `}
`;
export const Button = styled.button`
    ${() => css`
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    color:white;
    font-size: 22px;
    &:hover{
        cursor: pointer;
    }
    `}

`;
