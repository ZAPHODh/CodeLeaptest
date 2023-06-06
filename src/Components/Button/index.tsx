import * as Styled from './styles';
import React from 'react';
import { Roboto } from 'next/font/google';
const roboto = Roboto({ subsets: ['latin'], weight: '700' });
export type ButtonProps = {
  children: string | React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  rounded?: boolean;
  width?: number | string;
  fontSize?: string;
  center?: boolean;
  reverse?: boolean;
  disabled?: boolean;
  height?: number | string;
  margin?: string | number;
};

export const Button = ({
  children,
  onClick,
  rounded = false,
  width = '90%',
  fontSize = 'inherit',
  center = true,
  reverse = false,
  disabled,
  height = '20px',
  margin = '0px',
}: ButtonProps) => {
  return (
    <Styled.Wrapper
      onClick={onClick}
      rounded={rounded}
      width={width}
      fontSize={fontSize}
      center={center}
      reverse={reverse}
      disabled={disabled}
      height={height}
      className={roboto.className}
      margin={margin}
    >
      {children}
    </Styled.Wrapper>
  );
};
