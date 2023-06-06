import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import { Input } from './';

describe('<Input Component />', () => {
  it('should render', () => {
    const handleChange = jest.fn();
    const { getByRole } = render(
      <Input
        placeholder="test"
        id="test"
        value="test"
        onChange={handleChange}
      />,
    );
    expect(getByRole('textbox')).toBeInTheDocument();
  });
  it('should trigger onChange event', () => {
    const handleChange = jest.fn();
    const { getByRole } = render(
      <Input
        value="test"
        placeholder="test"
        id="test"
        onChange={handleChange}
      />,
    );
    fireEvent.change(getByRole('textbox'), { target: { value: 'Test value' } });
    expect(handleChange).toHaveBeenCalled();
  });
});
