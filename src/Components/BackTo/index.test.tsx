import { render, fireEvent } from '@testing-library/react';
import mockRouter from 'next-router-mock';
import '@testing-library/jest-dom';
import { BackTo } from './';

jest.mock('next/navigation', () => require('next-router-mock'));

describe('BackTo Component', () => {
  it('should render the component with the correct label', () => {
    const title = 'Go back to previous page';
    const { getByRole } = render(<BackTo title={title} />);

    expect(getByRole('button')).toHaveAttribute('aria-label', title);
  });

  it('should call router.back() when clicked', () => {
    mockRouter.push('/initial-path');
    mockRouter.back = jest.fn();
    const title = 'Go back to previous page';
    const { getByRole } = render(<BackTo title={title} />);
    const backButton = getByRole('button');
    fireEvent.click(backButton);
    expect(mockRouter.back).toHaveBeenCalledTimes(1);
  });
});
