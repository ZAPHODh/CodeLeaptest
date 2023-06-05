import * as Styled from './styles';
import React from 'react';
export type DescriptionProps = {
  father?: string;
  children: string | React.ReactNode;
  fontSize?: string;
  color?: string;
  maxWidth?: string;
  padding?: string;
  maxChars?: number;
};

export const Description = ({
  father,
  children,
  fontSize = '12px',
  color = 'white',
  maxWidth = '90%',
  padding,
  maxChars,
}: DescriptionProps) => {
  let truncatedText = '';

  if (typeof children === 'string') {
    truncatedText = maxChars ? children.slice(0, maxChars) + '...' : children;
  }
  return (
    <Styled.Wrapper
      id={`${father}-description`}
      fontSize={fontSize}
      color={color}
      maxWidth={maxWidth}
      padding={padding}
    >
      {truncatedText}
    </Styled.Wrapper>
  );
};
