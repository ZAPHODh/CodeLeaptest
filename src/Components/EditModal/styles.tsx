'use client';

import styled, { css } from 'styled-components';

export const Form = styled.form`
    ${() => css`
    background: #FFFFFF;
    border: 1px solid #999999;
    border-radius: 16px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 20px 30px;
    flex-direction: column;
    width: 660px;
    height: 334px;
    margin: 20px 0px;
    @media (max-width: 726px) {
         width: 80vw;
         justify-content: center;
         border: none;
         margin: 0px 0px 20px 0px;
        }
    `}
`;
