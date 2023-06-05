import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import { Heading } from './';

describe('<Heading Component />', () => {
  it('should render', () => {
    const { getByText } = render(<Heading>test</Heading>);
    expect(getByText('test')).toBeInTheDocument();
  });
  it('should render the correct HTML tag based on the as prop', () => {
    const tagName = 'h3';
    const { getByRole } = render(<Heading as={tagName}>Heading Text</Heading>);
    expect(getByRole('heading', { level: 3 })).toBeInTheDocument();
  });
  it('should render with the onClick handler when isButton prop is true', () => {
    const onClick = jest.fn();
    const { getByRole } = render(
      <Heading isButton={true} onClick={onClick}>
        Button Heading
      </Heading>,
    );
    const headingButton = getByRole('heading');
    fireEvent.click(headingButton);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
