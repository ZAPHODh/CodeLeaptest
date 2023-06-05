import * as Styled from './styles';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export type MaxQuantityProps = {
  what: string;
  quantity: number;
  rightClick: () => void;
  leftClick: () => void;
};

export const MaxQuantity = ({
  quantity,
  rightClick,
  leftClick,
  what,
}: MaxQuantityProps) => {
  return (
    <Styled.Wrapper>
      <Styled.ArrowButton onClick={leftClick} id="left-arrow-button">
        <ArrowBackIosIcon fontSize="inherit" />
      </Styled.ArrowButton>
      <p>
        {quantity} {what}
      </p>
      <Styled.ArrowButton onClick={rightClick} id="right-arrow-button">
        <ArrowForwardIosIcon fontSize="inherit" />
      </Styled.ArrowButton>
    </Styled.Wrapper>
  );
};
