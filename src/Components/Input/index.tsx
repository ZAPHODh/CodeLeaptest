import { ChangeEventHandler } from 'react';
import * as Styled from './styles';

export type InputProps = {
  placeholder?: string;
  value?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  width?: string | number;
  height?: string | number;
  id: string;
  className?: string;
};

export const Input = ({
  placeholder,
  value,
  onChange,
  width = '452px',
  height = '32px',
  id,
  className,
}: InputProps) => {
  return (
    <Styled.Wrapper
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      width={width}
      height={height}
      className={className}
    ></Styled.Wrapper>
  );
};
