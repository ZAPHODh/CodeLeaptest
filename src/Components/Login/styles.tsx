'use client';

import styled, { css } from 'styled-components';
import { Wrapper as Button } from '../Button/styles';
export const Wrapper = styled.section`
    ${() => css`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    min-height: 100vh;
    width: 100%;
    background-color: #DDDDDD;
    `}
`;
export const Form = styled.form`
    ${() => css`
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        width: 500px;
        background-color: white;
        border-radius: 16px;
        border: 1px solid #cccccc;
        padding: 30px;

        @media (max-width: 726px) {
         width: 100vw;
         min-height: 100vh;
         border-radius: 0px;
         justify-content: center;
        }
    `}
`;
export const ButtonContainer = styled.div`
    ${() => css`
        width: 100%;
        display: flex;
        justify-content: flex-end;
        @media (max-width: 726px) {
            >${Button}{
            width: 100%;
        }
        }

    `}
`;
export const Division = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`;
export const Divisor = styled.div`
    width:100%;
    border: 1px solid #a1a1a1;
`;
export const Or = styled.p`
    margin: 0px 5px;
    color: #777777;
`;
export const AnotherButtons = styled.div`
    ${() => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    `}
`;
export const Spacing = styled.span`
padding: 0px 15px;
display: flex;
`;
