import { Heading } from '../Heading';
import * as Styled from './styles';
import React from 'react';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
export type CardProps = {
  theme: string;
  Icon?: React.ReactElement;
  onClick?: () => void;
  selected?: boolean;
};

export const Card = ({
  theme,
  Icon = <VideogameAssetIcon fontSize="large" />,
  onClick,
  selected = false,
}: CardProps) => {
  return (
    <Styled.Wrapper onClick={onClick} selected={selected}>
      {Icon}
      <Heading as="h4">{theme}</Heading>
    </Styled.Wrapper>
  );
};
