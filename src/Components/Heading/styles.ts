import styled, { css } from 'styled-components';

export const Title = styled.h1<{ isButton: boolean; color?: string }>`
   ${({ isButton, color }) => css`
   color: ${color};
   &:hover {
        cursor: ${isButton ? 'pointer' : 'default'};
    }
   `}
`;
