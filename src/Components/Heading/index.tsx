import * as Styled from './styles';
export type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
import React from 'react';
import { Montserrat } from 'next/font/google';
export type HeadingProps = {
  children: React.ReactNode | string;
  as?: HeadingType;
  isButton?: boolean;
  onClick?: () => void;
  color?: string;
};
const montserrat = Montserrat({ subsets: ['latin'] });

export const Heading = ({
  children,
  as = 'h1',
  isButton = false,
  onClick,
  color,
}: HeadingProps) => {
  return (
    <Styled.Title
      as={as}
      onClick={onClick}
      isButton={isButton}
      className={montserrat.className}
      color={color}
    >
      {children}
    </Styled.Title>
  );
};
