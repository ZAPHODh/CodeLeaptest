'use client';

import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
    ${() => css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    width: 800px;
    background-color: #ffffff;
    min-height: 100vh;
    @media (max-width: 726px) {
         width: 100vw;
         border-radius: 0px;
         /* justify-content: center; */
        }
    `}
`;
