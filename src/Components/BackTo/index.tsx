import { useRouter } from 'next/navigation';
import * as Styled from './styles';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Tooltip } from '@mui/material';

export type BackToProps = {
  title: string;
};

export const BackTo = ({ title }: BackToProps) => {
  const router = useRouter();
  const handleClick = () => {
    router.back();
  };
  return (
    <Tooltip title={title}>
      <Styled.Wrapper onClick={handleClick}>
        <ArrowBackIosIcon fontSize="inherit" />
      </Styled.Wrapper>
    </Tooltip>
  );
};
