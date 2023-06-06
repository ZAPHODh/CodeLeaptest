import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { LoginForm } from './';

describe('<LoginForm Component />', () => {
  it('should render', () => {
    const { getByText } = render(<LoginForm />);
    expect(getByText('Welcome to CodeLeap network!')).toBeInTheDocument();
  });
});
