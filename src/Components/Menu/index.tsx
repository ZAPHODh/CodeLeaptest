import { MenuLink } from '../MenuLink';
import * as Styled from './styles';
import { v4 as uuidv4 } from 'uuid';
import { signOut } from 'next-auth/react';
import { Button } from '../Button';
import { Heading } from '../Heading';
import { useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
export type menuLink = {
  name: string;
  to: string;
  target?: '_self' | '_blank';
};
export type MenuProps = {
  username: string;
  menuLink?: menuLink[];
};

export const Menu = ({
  menuLink = [{ name: 'Just a mock link', to: '#', target: '_self' }],
  username,
}: MenuProps) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClickMenuIcon = () => {
    setOpenMenu((opened) => !opened);
  };
  const handleClickMenuLink = () => {
    setOpenMenu(false);
  };
  const handleCloseMenuNav = () => {
    setOpenMenu(false);
  };

  return (
    <Styled.Wrapper isFixed={isFixed}>
      <Heading as="h1">Welcome, {username}.</Heading>
      <Styled.ContainerSmallWindow>
        <Button
          reverse={true}
          height={'32px'}
          width={'90px'}
          onClick={() => {
            signOut();
          }}
        >
          Logout
        </Button>
        <Styled.Hamburguer onClick={handleClickMenuIcon}>
          <MenuIcon fontSize="inherit" />
        </Styled.Hamburguer>
        <Styled.MenuNav clicked={openMenu}>
          <Styled.CloseMenuSmallWindow onClick={handleCloseMenuNav}>
            <CloseIcon fontSize="inherit" />
          </Styled.CloseMenuSmallWindow>
          {menuLink &&
            menuLink.map((link) => (
              <MenuLink
                href={link.to}
                key={uuidv4()}
                onClick={handleClickMenuLink}
                target={link.target && link.target}
              >
                {link.name}
              </MenuLink>
            ))}
        </Styled.MenuNav>
      </Styled.ContainerSmallWindow>
    </Styled.Wrapper>
  );
};
