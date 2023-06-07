import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Menu } from './';
import { signIn, signOut, useSession } from 'next-auth/react';

jest.mock('next-auth/react');
jest.mock('next/navigation', () => require('next-router-mock'));

describe('Menu component', () => {
  const mockSession = {
    user: {
      name: 'John Doe',
    },
    expires: 'fake-expires',
  };
  const mockMenuLinks = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Contact', to: '/contact' },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly when user is not authenticated', () => {
    (useSession as jest.Mock).mockReturnValue({ data: null });
    const { getByText } = render(
      <Menu username="test" menuLink={mockMenuLinks} />,
    );
    const loginButton = getByText('Login');
    expect(loginButton).toBeInTheDocument();
    expect(signIn).not.toHaveBeenCalled();
  });

  it('should render correctly when user is authenticated', () => {
    (useSession as jest.Mock).mockReturnValue({ data: mockSession });
    const { getByText } = render(
      <Menu username="test" menuLink={mockMenuLinks} />,
    );
    const logoutButton = getByText('Deslogar');
    expect(logoutButton).toBeInTheDocument();
    expect(signOut).not.toHaveBeenCalled();
  });

  it('should call signIn when Login button is clicked', () => {
    (useSession as jest.Mock).mockReturnValue({ data: null });
    const { getByText } = render(
      <Menu username="test" menuLink={mockMenuLinks} />,
    );
    const loginButton = getByText('Login');
    fireEvent.click(loginButton);
    expect(signIn).toHaveBeenCalledTimes(1);
  });

  it('should call signOut when Deslogar button is clicked', () => {
    (useSession as jest.Mock).mockReturnValue({ data: mockSession });
    const { getByText } = render(
      <Menu username="test" menuLink={mockMenuLinks} />,
    );
    const logoutButton = getByText('Deslogar');
    fireEvent.click(logoutButton);
    expect(signOut).toHaveBeenCalledTimes(1);
  });
});
