import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import { Card } from './';
import React from 'react';

describe('Card Component', () => {
  const mockProps = {
    theme: 'Default',
    Icon: <VideogameAssetIcon fontSize="large" />,
    cardClick: jest.fn(),
    selected: false,
  };
  it('should render', () => {
    const { getByText } = render(<Card {...mockProps}></Card>);
    expect(getByText('Default')).toBeInTheDocument();
  });
  it('should call the cardClick function when the component is clicked', () => {
    const { getByText } = render(<Card {...mockProps} />);
    const card = getByText('Default');
    fireEvent.click(card);
    expect(mockProps.cardClick).toHaveBeenCalled();
  });
});
