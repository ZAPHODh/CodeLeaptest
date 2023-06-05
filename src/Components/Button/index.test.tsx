import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from '.';

describe('Button Component', () => {
  it('renders with the correct text', () => {
    const { getByText } = render(<Button>Click me</Button>);
    expect(getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Button onClick={handleClick}>Click me</Button>,
    );
    fireEvent.click(getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies the correct styles', () => {
    const { getByText } = render(
      <Button rounded width={'100px'} fontSize="20px" center reverse disabled>
        Click me
      </Button>,
    );
    const button = getByText('Click me');
    expect(button).toHaveStyle('border-radius: 50%;');
    expect(button).toHaveStyle('width: 100px;');
    expect(button).toHaveStyle('font-size: 20px;');
    expect(button).toHaveStyle('text-align: center;');
    expect(button).toHaveStyle('color: rgb(248, 236, 194);');
    expect(button).toHaveStyle('background-color: rgba(230, 85, 64, 0.8);');
    expect(button).toHaveAttribute('disabled');
  });
});
