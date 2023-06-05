import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import { MaxQuantity } from '.';

describe('MaxQuantity Component', () => {
  it('should render', () => {
    const { getByText } = render(
      <MaxQuantity
        quantity={1}
        rightClick={jest.fn()}
        leftClick={jest.fn()}
        what="test"
      />,
    );
    expect(getByText('test')).toBeInTheDocument();
  });
  it('should render the correct player count', () => {
    const Quantity = 4;
    const { getByText } = render(
      <MaxQuantity
        quantity={Quantity}
        leftClick={() => {}}
        rightClick={() => {}}
        what="test"
      />,
    );
    const playerCountElement = getByText(`Máximo de Quantity ${Quantity}`);
    expect(playerCountElement).toBeInTheDocument();
  });

  it('should call the leftClick function when the left arrow is clicked', () => {
    const leftClickMock = jest.fn();
    const { getByTestId } = render(
      <MaxQuantity
        quantity={4}
        leftClick={leftClickMock}
        rightClick={() => {}}
        what="test"
      />,
    );
    const leftArrowButton = getByTestId('left-arrow-button');
    fireEvent.click(leftArrowButton);
    expect(leftClickMock).toHaveBeenCalledTimes(1);
  });

  it('calls the rightClick function when the right arrow is clicked', () => {
    const rightClickMock = jest.fn();
    const { getByTestId } = render(
      <MaxQuantity
        quantity={4}
        leftClick={() => {}}
        rightClick={rightClickMock}
        what="test"
      />,
    );
    const rightArrowButton = getByTestId('right-arrow-button');
    fireEvent.click(rightArrowButton);
    expect(rightClickMock).toHaveBeenCalledTimes(1);
  });
});
