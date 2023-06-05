import '@testing-library/jest-dom';
import { Description } from '.';
import { render } from '@testing-library/react';

describe('Description Component', () => {
  it('should render the children prop', () => {
    const childrenText = 'Hello, world!';
    const { getByText } = render(<Description>{childrenText}</Description>);
    expect(getByText(childrenText)).toBeInTheDocument();
  });

  it('should truncate the children prop if maxChars prop is defined', () => {
    const childrenText = 'Hello, world!';
    const maxChars = 5;
    const { getByText } = render(
      <Description maxChars={maxChars}>{childrenText}</Description>,
    );
    expect(
      getByText(`${childrenText.slice(0, maxChars)}...`),
    ).toBeInTheDocument();
  });

  it('should apply the correct styles', () => {
    const fontSize = '16px';
    const color = 'red';
    const maxWidth = '50%';
    const padding = '10px';
    const { getByText } = render(
      <Description
        fontSize={fontSize}
        color={color}
        maxWidth={maxWidth}
        padding={padding}
      >
        test
      </Description>,
    );
    const wrapper = getByText('test');
    expect(wrapper).toHaveStyle(`font-size: ${fontSize}`);
    expect(wrapper).toHaveStyle(`color: ${color}`);
    expect(wrapper).toHaveStyle(`max-width: ${maxWidth}`);
    expect(wrapper).toHaveStyle(`padding: ${padding}`);
  });
});
