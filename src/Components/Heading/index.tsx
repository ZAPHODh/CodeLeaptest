import * as Styled from './styles';
export type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
import React from 'react';
import { Roboto } from 'next/font/google';
const roboto = Roboto({ subsets: ['latin'], weight: '700' });
export type HeadingProps = {
  children: React.ReactNode | string;
  as?: HeadingType;
  isButton?: boolean;
  onClick?: () => void;
  color?: string;
  fontSize?: number | string;
  margin?: string;
};

export const Heading = ({
  children,
  as = 'h1',
  isButton = false,
  onClick,
  color,
  fontSize,
  margin,
}: HeadingProps) => {
  return (
    <Styled.Title
      as={as}
      onClick={onClick}
      isButton={isButton}
      className={roboto.className}
      color={color}
      fontSize={fontSize}
      margin={margin}
    >
      {children}
    </Styled.Title>
  );
};
