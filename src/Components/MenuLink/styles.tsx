import styled, { css } from 'styled-components';
import Link from 'next/link';
export const Wrapper = styled(Link)`
    ${() => css`
        text-decoration: none;
        color: #ffffff;
        padding: 10px;

        &:hover {
            text-decoration: underline;
        }
        &::first-letter {
            text-transform: uppercase;
        }
    `}
`;
