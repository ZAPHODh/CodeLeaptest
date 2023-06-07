import { ChangeEventHandler } from 'react';
import * as Styled from './styles';

export type InputProps = {
  placeholder?: string;
  value?: string;
  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  width?: string | number;
  height?: string | number;
  id: string;
  className?: string;
  margin?: string | number;
  type?: string;
  as?: string;
};

export const Input = ({
  placeholder,
  value,
  onChange,
  width = '452px',
  height = '32px',
  id,
  className,
  margin = '5px 0px',
  type = 'text',
}: InputProps) => {
  if (type === 'textarea') {
    return (
      <Styled.TextArea
        id={id}
        placeholder={placeholder}
        value={value}
        width={width}
        height={height}
        className={className}
        margin={margin}
        onChange={onChange}
      ></Styled.TextArea>
    );
  }
  return (
    <Styled.Wrapper
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      width={width}
      height={height}
      className={className}
      margin={margin}
    ></Styled.Wrapper>
  );
};
